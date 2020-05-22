const server = require('server') // import server
const corsExpress = require('cors')({
    methods: ['GET']
})

const cors = server.utils.modern(corsExpress)

const { get, post } = server.router

const getProducts = () => {
    console.log('getting products')
    // return {
    //     statusCode: 200,
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify([1, 2, 3])
    // }
    return new Promise((resolve, reject)=>{
        try {
            setTimeout(() => {
                resolve([
                    {
                        name: 'phone',
                        price: 100,
                    },
                    {
                        name: 'headphone',
                        price: 200,
                    },
                    {
                        name: 'Kieran',
                        price: 300,
                    },
                ])
            }, 1000);
        }
        catch (err) {
            console.error(err)
            reject(err)
        }
    })
}

server(
    {port: 8000},
    cors,
    [
        get('/', ()=>'<h1>Hi</h1>'), // getting a webpage at the home route
        get('/data', getProducts)
    ]
)