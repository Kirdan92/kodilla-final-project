import React from 'react';

import Username from './username';

const UsersList = (props) => (
    <div className="users-list">
        {props.users.map(user => {
            return (
                <div className="single-user" key={user.id}>
                    <Username user={user} />
                </div>
            )
        })}
    </div>
);

export default UsersList;