import React, { memo, useMemo } from 'react';

const Message = ({numberOfMessage, onHandleIncrement}) => {
    console.log("message rendering");

const calculatorNumber = useMemo(() =>{
        let number = 0;
        for (let index = 0; index < 500000; index++) {
            Number++ ;
            
        }
        return number;
    },[]);
    return (
        <div>
            <h2>Number: {calculatorNumber}</h2>
            <p>send {numberOfMessage} Message</p>
            <button onClick={onHandleIncrement} >Increment Message Number</button>
        </div>
    );
};

export default memo(Message);
