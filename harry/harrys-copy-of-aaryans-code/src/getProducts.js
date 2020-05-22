import phone from "./images/phone.jpg"
import headphones from "./images/headphones.jpg"
import speaker from "./images/speaker.jpg"

const products = [
    {
        name: 'phone',
        price: 100,
        img: phone
    },
    {
        name: 'headphone',
        price: 200,
        img: headphones
    },
    {
        name: 'Kieran',
        price: 300,
        img: speaker
    },
]

export const getProducts = () => {
    return products
}

export const getProductsFromAPI = async () => {
    let products = await fetch('http://localhost:8000/data')
    products = products.json()
    console.log(products)
    return products
}

export const getProductsFromFakeAPI = () => {
    return new Promise(
        (resolve, reject)=>{ // return a promist
            try {
                setTimeout( // first arg = function to run, second arg = how long to wait before running
                    ()=>{
                        resolve(products) // if the code works then the promise will resolve as the products
                    },
                    1000 // wait 1s to simulate getting products from API
                )
                // let myvar = await fetch('endpoint', {mode: 'GET'})
                // resolve(myvar)
            }
            catch (err) {
                reject(err) // if the code fails then the Promise will reject as the error
            }
        }
    )
}

export const getProductsAsync = async () => {
    let p = await getProductsFromFakeAPI() // returns products after 1s
    console.log('awaited products:', p)
    return p
}