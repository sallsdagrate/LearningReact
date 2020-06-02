import boto3

ddb = boto3.resource('dynamodb')

productsTable = ddb.Table('streamline-users')
user = productsTable.get_item(Key={'user_id': '0130a0cf-23b7-477e-9af0-d3dc2f3678a6'})

print(user)