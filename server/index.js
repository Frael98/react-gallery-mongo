import express from 'express'
import indexR from './routes/index.routes'
import fileUpload from 'express-fileupload'
import imagesR from './routes/images.routes'
import config from './config'
require('./db')

const app = express();
//Variable de entorno 
console.log(config.APP_PORT)
//Settings
app.set('port', process.env.PORT || 4400)

app.use(fileUpload({
    tempFileDir: '/temp'
}))

app.use(indexR)
app.use(imagesR)
app.use('public',express.static(`${__dirname}/storage/images`))

//Server Running
app.listen(app.get('port'))
console.log(`Listen on port ${app.get('port')}`);