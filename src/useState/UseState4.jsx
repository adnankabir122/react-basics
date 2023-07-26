import React, { useState } from 'react'

const UseState4 = () => {

    const [bioData,setBioData] = useState([
        {
            fName:'',
            lName:'',
            age:''
        }
    ])
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const firstName = e.target.firstName.value
        const secondName = e.target.secondName.value
        const age = e.target.age.value

        const newData = {
            fName:firstName,
            lName:secondName,
            age:age
        }

        setBioData([...bioData,newData])
    } 
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder='First Name' name='firstName'/>
                <input type="text" placeholder='Last Name' name='secondName'/>
                <input type="text" placeholder='Age' name='age'/>

                <button type="submit">Add</button>
            </form>

            {
                bioData.map((element,index) => <p key={index}> Name:{element.fName} {element.lName} Age: {element.age}</p>)
            }
        </>
    )
}

export default UseState4
