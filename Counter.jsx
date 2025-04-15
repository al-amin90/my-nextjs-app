"use client"

import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    console.log('counter page', counter);
    return (    
        <div>
            <button className='bg-amber-700' onClick={() => setCounter(counter-1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
    );
};

export default Counter; 