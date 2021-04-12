import React from 'react';
import "./User.css"

const UserInput = (props) => {
    return (
        <div>
          <input type="text" className="inputText" onChange={props.chiamaMetodo} value={props.username}/>
        </div>
    );
};

export default UserInput;