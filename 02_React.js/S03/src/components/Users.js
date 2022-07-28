import users from '../users.json';
import User from './User.js';
const Users = () => {
    return (
        <div>
            <ul>
                {
                    users.map(user => (
                        <User user={user} key={user.email}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default Users;