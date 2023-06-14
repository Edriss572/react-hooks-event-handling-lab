// Code Keypad Component Here
import React from "react";

function Keypad (){
    const handleOnChange = () => {
        console.log('Entering password...')
    }
    return (
        <input 
            type="password"
            placeholder="Enter password here..."
            onChange={handleOnChange}
        />
    )
}

export default Keypad;