import {Option} from "./Option";
import React from "react";

const Options = (props) => (
        <div>
            <div className='wedget-header'>
                <h3 className='wedget-header__title'> Your Option(s) </h3>
                <button className='button button--link' onClick={props.handleDeleteOptions}> Remove All </button>
            </div>
            {props.options.length === 0 && <p className='wedget-message'>Please add option to getting started!!!</p>}
            <div>
                { props.options.map((opt, idx) => (
                    <Option key={opt} option={opt} count={idx + 1} handleDeleteOption={props.handleDeleteOption} />)
                ) }
            </div>
        </div>
    );

export default Options;