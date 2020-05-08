import React, { Component } from "react"
import { Button } from "@material-ui/core"

export const F = () => {
    return <div>
        Functional component!
    </div>
}

export default class C extends Component {
    constructor(props) {
        super()
        this.state = {
            clicks: 0
        }
    }

    onClick = () => {
        // this.state.clicks += 1
        this.setState({ // method from Component class, tells react to rerender component when called
            clicks: this.state.clicks + 1
        }) 
    }

    render() {
        return <div>
            <div>Class component</div>
            <Button onClick={this.onClick}>{this.state.clicks} clicks</Button>
        </div>
    }
}