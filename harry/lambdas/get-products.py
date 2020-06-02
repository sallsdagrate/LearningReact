import json
import boto3
import decimal

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        return super(DecimalEncoder, self).default(o)

ddb = boto3.resource('dynamodb')
products_table = ddb.Table('products')

def lambda_handler(event, context):
    
    print('initial event:', event)

    return {
        'statusCode': 200,
        'body': json.dumps([decimal.Decimal(0)], cls=DecimalEncoder)
    }