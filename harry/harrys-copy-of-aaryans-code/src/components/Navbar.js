//this file can be used as reference for when i learned emotion
import React, { useState } from 'react';
import Basket from './Basket'
import { css, jsx } from '@emotion/core'
import { Button } from '@material-ui/core'
/**@jsx jsx */
const style = css`
background-color: #0066ff;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
position: absolute;
top: 0;
height: 60px;
font-size: 20px;
padding: 10px;
box-sizing: border-box;
.basket{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.btn{
    
    color: white;
    border: none;
}
`

export default (props) => {
    const [visibleBasket, setVisible] = useState(false)
    return <div css={style}>
        <div>
            My Application
        </div>
        <div className="basket">
            <Button className='btn' onClick={() => {setVisible(true)}}>Basket</Button>
            <Basket visible={visibleBasket} setVisible={setVisible} items={props.cart} total={props.total}/>
        </div>
    </div>

}