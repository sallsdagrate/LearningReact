// THIS FILE TEACHES YOU EMOTION
import React from "react"

//import emotion, lib that allows you to decorate ReactJs components
import { css, jsx } from "@emotion/core"
/** @jsx jsx */

//styling for below components
const style = css`
    background-color: turquoise;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    position: absolute;
    top: 0;
    height: 40px;
    font-size: 20px;
    padding: 10px;
    box-sizing: border-box;

    .item {
        text-decoration: underline;
        cursor: pointer;
    }
`

export default () => {
    return <div css={style}>
        <div>
            MyApp
        </div>
        <div className="item">
            Login
        </div>
    </div>
}