import React, { useState } from "react"
import { Button } from "@material-ui/core"

export const Hi = () => { return 'HI'}

const Welcome = () => {

    return <div>
        Hello
    </div>
}

export const Obj = () => {
    const [obj, setObj] = useState({age: 0, name: 'Harry'})


    const f = () => {
        setObj(
            {
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



export default Welcome