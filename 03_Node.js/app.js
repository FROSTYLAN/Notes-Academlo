const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const { db } = require('./utils/database');

// Controllers
const { globalErrorHandler } = require('./controllers/errors.controller');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');
const { viewsRouter } = require('./routes/view.routes');

const app = express();

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-data
app.use(express.urlencoded({ extended: true }));

// Set pug as template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Enabled static assets
app.use(express.static('public'));

// Add security helmets
app.use(helmet());

// Compress responses
app.use(compression());

// Log incoming requests
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
else app.use(morgan('combined'));

//Endpoint
app.use('/', viewsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

// Global error handler
app.use('*', globalErrorHandler);

//Limit IP request
const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000,
  message: 'Too many requests from this IP',
});
app.use(limiter);

// Models
const { initModels } = require('./models/initModels');

db.authenticate()
  .then(() => {
    console.log('Database authenticated');
  })
  .catch(err => console.log(err));

// Establish models relations
initModels();

db.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.log(err));

//spin up server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
