// useState() basic 

import React, { useState } from 'react'
function UseState() {
    // hooks gulo component ar vitore shobar upore call korte hoy 
    const [count,setCount] = useState(0)
    function handleIncreament(){
        let newCount = count + 1
        setCount(newCount)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleIncreament}>Increament</button>
        </div>
    )
}

export default UseState
