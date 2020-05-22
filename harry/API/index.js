const server = require('server') //import server

const { get, post } = server.router

server(
    {port: 3000},
    [
        get('/', ()=>'Hello Harry')
    ]
)