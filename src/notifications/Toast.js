/*

import React from "react";

const NotificationProvider = (props) => {
    const notifications = [
        {
            id: v4(),
            type: "SUCCESS",
            message: "Student saved",
        }
    ];

    console.log(notifications);

    return(
        <div>
            <div className="notification-wrapper">
                {notifications.map(note => {
                    return <Notification key={note.id} {...note} />
                })}
            </div>
            {props.children}
        </div>
    )
};


export default NotificationProvider()

*/