import React, { Component, useEffect } from 'react';
import { css, jsx } from '@emotion/core'
import { Button } from '@material-ui/core'
import { Slide } from '@material-ui/core'
/**@jsx jsx */
const style = css`
height: 100vh;
width: 200px;
background-color: #0066ff;
position: absolute;
right: 0px;
z-index: 1;
.list{
    margin-left: 50%
    align-items: center;
}
.toggle-btn{
    color: white;
}
`
const Basket = (props) => {
    
    useEffect(
        ()=>{
            console.log('initial basket')
        }, 
        [] // list of what varaibles i should watch and if they change, run the funcrion
    )

    const hide = () => {
        props.setVisible(false);
    }
    return (
        <Slide direction="left" in={props.visible}>
            <div className="basket-box" css={style}>
                <div>
                    Basket
                </div>
                <div id="showList">
                    <ul id="list">
                        {
                            props.items.length !== 0 ?
                                props.items.map(
                                    (item) => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    }
                                )
                                :
                                <p>Your cart is currently empty</p>
                        }
                        <li>Total: £{props.total}</li>
                    </ul>

                </div>
                <Button className="toggle-btn" onClick={hide}>Back to Menu</Button>
            </div>
        </Slide>
    )
}
export default Basket;