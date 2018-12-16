import React from "react";

const Option = (props) => (
        <li>
            <div key={props.option}> {props.option} </div>
            <button onClick={(e) => { props.handleDeleteOption(props.option)}}>Remove</button>
        </li>
    );

export { Option }