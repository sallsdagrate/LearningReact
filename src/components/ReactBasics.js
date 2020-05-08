//importing react
import React, { useState } from "react"

//import from materialui for cool buttons and stuff
import { Button } from "@material-ui/core"

//named export must be exported like this
export const Hi = () => { 
    return 'HI'
}

export const Btn = () => {

    const [num, setMyNum] = useState(0)

    const inc = () => {
        setMyNum(num+1)
    }

    return <div>
        <Button onClick={inc}>
            Clicked {num} times
        </Button>
    </div>
}

//more complex named export component
export const NameAndAge = () => {

    //useState explained in App.js
    //initialised with an object
    const [obj, setObj] = useState({age: 0, name: 'Harry'})


    const incrAge = () => {
        setObj(
            {
                //both vars in the object must be set when using setObj
                age: obj.age + 1,
                name: 'Sam'
            }
        )
    }

    return <>
        <Button onClick={f}>
            Button 2
        </Button>
        <div>
            {obj.name}
        </div>
    </>
}

const Welcome = () => {

    return <div>
        Hello
    </div>
}

//Welcome is a default export
//All other components in this file are named exports
export default Welcome