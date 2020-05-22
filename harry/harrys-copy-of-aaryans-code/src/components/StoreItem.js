import React, { Component } from 'react'
import { css, jsx } from '@emotion/core'
import { Button } from '@material-ui/core'
/**@jsx jsx */
const style = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 60px;
.btn{
    background-color: #0066ff;
    color: white;
}
.btn:hover{
    color: #80b3ff;
}
.image{
    width: 200px;
    height: 200px;
}
`
class StoreItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // const addItem = (name, price) =>{
        //     this.props.addItem(this.props.name, this.props.price)
        //     alert(this.props.name + " has been added to trolley")
        // }
        return (
            <div className="container" css={style}>
                <div className="itemImg">
                    <img src={this.props.img} className="image"></img>
                </div>
                <div className="info">
                    <div id="name">
                        {this.props.name}
                    </div>
                    <div id="price">
                        £{this.props.price}
                    </div>
                </div>
                <div className="add">
                    <Button className="btn" onClick={() => {
                        this.props.addItem(this.props.name);
                        alert(this.props.name + " has been added to trolley");
                        this.props.addPrice(this.props.price)
                    }}>
                        Add to Basket</Button>
                </div>
            </div>
        )
    }
}
export default StoreItem;
/*export default (props) => {
    const addToBasket = () => {
        return (
            console.log("hi")
        )
    }
    return (
        <div className="container" css={style}>
            <div className="itemImg">
                <img src={props.img}></img>
            </div>
            <div className="info">
                <div id="name">
                    {props.name}
                </div>
                <div id="price">
                    £{props.price}
                </div>
            </div>
            <div className="add">
                <Button className="btn" onClick={addToBasket}>Add to Basket</Button>
            </div>
        </div>
    );
}*/