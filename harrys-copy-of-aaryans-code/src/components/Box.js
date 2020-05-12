import React, { useState } from 'react'
import { css, jsx } from '@emotion/core'
/**@jsx jsx */
const style = css`
display: flex;
flex-direction: column;
justify-content: space-between;

.box{
    width: 400px;
    height: 400px;
    background-color: red;
    align-self: center
}
`
export default (props) => {
   const [name, changeName] = useState("Aaryan")
    const change = () => {
        changeName("Bob")
    }

    return <div class = "container" css = {style}>
        <div class = "box">
            {name}
            </div>
            <div class = "button">
                <button class = "btn" onClick={change}>Click to change</button>
                </div>

        </div>
}