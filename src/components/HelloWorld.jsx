import React, { useState } from 'react';

const HelloWorld = () => {

    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
    }
    
    return(
        <>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1>Hola Mundo 2</h1>
            }
        </>
    );
}

export default HelloWorld;