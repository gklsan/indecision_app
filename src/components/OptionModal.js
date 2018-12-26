import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <div>
            <Modal
                isOpen={!!props.selectedOption}
                contentLabel="selected option"
                onRequestClose={props.handleResetSelectedOption}
                closeTimeoutMS={200}
                className='modal'
            >
                <h3 className='modal__title'>Selected Option is: </h3>
                { props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
                <button className='button' onClick={props.handleResetSelectedOption}> Okay </button>
            </Modal>
        </div>
    );

export default OptionModal;