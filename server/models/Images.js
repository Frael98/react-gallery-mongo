import {Schema, model} from 'mongoose'
// Coleccion para la insercion de imagenes
const ImageSchema = new Schema({
    title: String,
    key: String,
    url: {
        type: String,
        required: true
        } 
    }
    ,{
        timestamps: true,
        versionKey: false
    }  
);
// Exportacion de Schema
export default model('Image', ImageSchema)