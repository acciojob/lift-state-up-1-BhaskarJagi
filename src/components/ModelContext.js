import React from "react";

const ModelContext = ({showModel}) => {
    return(
        <button onClick={() => showModel({
            context: 'Model Context',
            text: 'This is the model context.'
        })}
        >Show Model</button>
    )
}

export default ModelContext