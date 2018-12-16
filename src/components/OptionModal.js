import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <div>
            <Modal
                isOpen={!!props.selectedOption}
                contentLabel="selected option"
                onRequestClose={props.handleResetSelectedOption}
            >
                <h3>Selected Option is: </h3>
                { props.selectedOption && <p>{props.selectedOption}</p>}
                <button onClick={props.handleResetSelectedOption}> Reset and Close</button>
            </Modal>
        </div>
    );

export default OptionModal;