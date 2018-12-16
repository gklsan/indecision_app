import React from "react";

const Action = (props) => {
    return(
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What should i do?</button>
    )
};

export default Action;