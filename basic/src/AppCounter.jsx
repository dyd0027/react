import Counter from "./component/Counter";
import React, { useState } from 'react';

export default function AppCounter() {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <div className='banner'>
                Total Count: {count} {count > 10 ? '🔥' : '❄️'}
            </div>
            <div className='counters'>
                <Counter />
                <Counter />
            </div>
        </div>
    );
}