import React from "react";

const ModalContext = ({showModal}) => {
    return(
        <button onClick={() => showModal({
            context: 'Modal Context',
            text: 'This is the modal context.'
        })}
        >Show Modal</button>
    )
}

export default ModalContext