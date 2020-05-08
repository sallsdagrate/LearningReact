// THIS FILE TEACHES YOU ABOUT PROPS
import React from "react"
import { css, jsx } from "@emotion/core"
/** @jsx jsx */
import { Button } from "@material-ui/core"

const style = css`
    background-color: #ff822e;
    width: 400px;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    button {

    }
`

export default (props) => {
    console.log(props)
    return <div css={style}>
        <div>{props.name}</div>
        {props.controls.map(option=>{return <Button>{option}</Button>})}
        <div>{props.age}</div>

        {/* <Button>
            Send mail
        </Button>
        <Button>
            Subscribe
        </Button>
        <Button>
            Shear sheep
        </Button> */}
    </div>
}