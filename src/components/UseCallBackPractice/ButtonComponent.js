import React from 'react';

function ButtonComponent({ handleClick, children }) {
    console.log('Rendering button: ' + children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
}

export default React.memo(ButtonComponent);