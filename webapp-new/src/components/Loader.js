import React, { Component, useEffect, useState } from "react"

const getProducts = (products) => {
    products.map(
        //p = ()
    )
}

class OGLoader extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        let products = getProducts()
    }

    componentDidUpdate = () => {

    }

    componentWillUnmount = () => {}

    render () {
        return <div>
            yo
        </div>
    }
}

const Loader = (props) => {

    useEffect( // component did mount
        getProducts,
        []
    )

    const [first_render, setFirstRender] = useState(true)
    useEffect( // component did update 
        () => {
            if (first_render) {
                setFirstRender(false)
            }
            else {
                console.log('groceries changed')
            }
            return () => {console.log('your groceries changed this session')}
        },
        [props.groceries]
    )

    useEffect( // component will unmount
        () => {
            return () => {console.log('component will unmount')} // the function returns ANOTHER function which is called when component will unmount
        }
    , [])

    return <div>
        yo
    </div>
}

export default Loader