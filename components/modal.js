import React from "react";
import Modal from 'react-modal';

const OptModal = (props) => (
    <Modal
    isOpen = {props.modalOpt}
    contentLabel = "Selected Option"
    onRequestClose={props.closeModal}
    className='modal'
    >
        <h3 className="modal_title">Selected Options</h3>
        {props.modalOpt && <p className="modal_option">{props.modalOpt}</p>}
        <button className="button--link" onClick={props.closeModal}>Okay</button>
        
    </Modal>
)
export default OptModal