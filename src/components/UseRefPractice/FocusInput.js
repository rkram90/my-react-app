import React, { useEffect, useRef } from 'react';

function FocusInput() {
    const focusInput = useRef(undefined);
    useEffect(() => {
        focusInput.current.focus();
    });
    return (
        <div>
            <input ref={focusInput} type='text' />
        </div>
    );
}

export default FocusInput;