import React from "react";

const ModalContent = ({showModal}) => {
    return(
        <button onClick={() => showModal({
            Content: 'Modal Content',
            text: 'This is the modal Content.'
        })}
        >Show Modal</button>
    )
}

export default ModalContent