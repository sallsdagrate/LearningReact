export default () => {
    return new Promise((resolve, reject)=>{
        try {
            setTimeout(
                ()=>{
                    let products = [
                        {
                            name: 'phone',
                            price: 100
                        }
                    ]
                    resolve(products)
                }
            )
        }
        catch (err) {
            reject(err)
        }
    })
}