// useState() with Object 
import React, { useState } from 'react'
const UseState3 = () => {

    const [user, setUser] = useState(
        {
            firstName: '',
            lastName: ''
        }
    )
    console.log(user)
    return (
        <div>
            <form>
                <input type="text" onBlur={e => setUser({...user, firstName: e.target.value }) }/>
                <input type="text" onBlur={e => setUser({...user, lastName: e.target.value }) }/>
            </form>
            
            {/* printing user */}
            <h1>{user.firstName} {user.lastName}</h1>
            
        </div>
    )
}

export default UseState3
