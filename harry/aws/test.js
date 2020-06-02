const AWS = require('aws-sdk')

const ddb = AWS.DynamoDB.DocumentClient()

ddb.get_item({
    TableName: 'streamline-users',
    Key: {
        'user_id': '0130a0cf-23b7-477e-9af0-d3dc2f3678a6'
    }
}).promise().then(response => console.log(response))