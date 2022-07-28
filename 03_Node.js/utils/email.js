const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const pug = require('pug');
const { htmlToText } = require('html-to-text');

dotenv.config({ path: '../config.env' });

class Email {
  constructor(to) {
    this.to = to;
  }

  // Create a connection a service email
  newTransport() {
    return nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
  }

  // Send the actual email
  async send(template, subject, data) {
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      data
    );

    await this.newTransport().sendMail({
      from: 'support-frostyInc@gmail.com',
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    });
  }

  // Send an email to newly created account
  async sendWelcome(name) {
    await this.send('welcome', 'New account', { name });
  }

  async sendDelete(name) {
    await this.send('deleteRepairs', 'Deleted Repair', { name });
  }

  async sendComplete(name) {
    await this.send('completedRepairs', 'Repair Completed', { name });
  }

  async sendCreate(name) {
    await this.send('createRepairs', 'Repair Pending', { name });
  }
}

module.exports = { Email };
