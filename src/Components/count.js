import React from 'react'
import {useState} from 'react'
const Count = () => {
    const [data, setData] = useState(0);

    const incrementHandle = () => {
        setData(data + 1);
    }

    const decrementHandle = () => {
        setData(data - 1);
    }
    return (
        <div className='container'>
            <p className='text-center text-danger display-6'>Count No:{data}</p>
            <button className="incr btn btn-danger btn-sm" onClick={incrementHandle}>Increment</button>
            <button className="decr btn btn-primary btn-sm" onClick={decrementHandle}>Decrement</button>
        </div>
    )
}

export default Count