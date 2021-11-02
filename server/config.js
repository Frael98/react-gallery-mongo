import {config} from 'dotenv' 

config()

export default{
    /*BucketName: process.env.BUCKET_NAME,
    EndPoint: process.env.END_POINT,*/
    APP_PORT: process.env.APP_PORT,
    APP_HOST: process.env.APP_HOST
}