import React from 'react';
import "./User.css"

const UserOutput = (props) => {
    const ilMioStile = {
        textAlign: "center",
        padding: "1%",
        width: "40%",
        height: "60px",
        margin: "auto",
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: "7px",
        backgroundColor: "rgb(255, 236, 236)",
        borderColor: "rgb(255, 204, 204)",
    }
    return (
        <div>
            <p>{props.username}</p>
            <p className="children" style={ilMioStile}>{props.children}</p>
        </div>
    );
};

export default UserOutput;