import {Option} from "./Option";
import React from "react";

const Options = (props) => (
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All </button>
            {props.options.length === 0 && <p>Please add option to getting started!!!</p>}
            <ol>
                { props.options.map((opt) => <Option key={opt} option={opt} handleDeleteOption={props.handleDeleteOption} />) }
            </ol>
        </div>
    );

export default Options;