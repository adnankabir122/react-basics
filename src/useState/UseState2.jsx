// useState() with previousState
 
import React, { useState } from 'react'
function UseState2() {
    const [count, setCount] = useState(0)
    const handleOnCLick = () => {
        for(let i = 0 ; i < 10; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={handleOnCLick}>Increament By 10</button>
        </div>
    )
}

export default UseState2
