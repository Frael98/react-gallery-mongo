//import { config } from 'dotenv'
import {Router} from 'express'
import config from '../config'
import Image from '../models/Images'


const router = Router()

//Guardar Imagenes en la BD and ServerCloud
router.post('/api/images/upload', async (req, res) => {
    const {file } = req.files
    
    try{
        // Put object in the serverCloud
        const uploadObject = {
            acl: "",
            bucket: config.BucketName,
            key: file.name,
            body: file.data
        }

        //Get the image's path
       // const urlImage = `https://${config.BucketName}/${config.EndPoint}/${file.name}`;
        const urlImage = `${config.APP_HOST}:${config.APP_PORT}/storage/images/${file.name}`;
        //Instancia el objeto del Modelo
        const image = new Image({
            url: urlImage,
            key: file.name,
            title: req.body.title
        })

        
        //Guarda en la BD
        await image.save();
        
        console.log(image)
        res.send(image)
        
    }catch(err){
        console.log(err);
        res.send(err);
    }

})

//Get las imagenes
router.get('/api/images',  async (req, res)=>{
    const img = await Image.find();
    return res.json(img);
})
//Get a image
router.get('/api/images/:id', async (req, res)=>{
    const img =  await Image.findById(req.params.id);
    return res.send(img);
})
//Elimina una imagen
router.delete('/api/images/:id', async (req, res)=>{
    const deleteImg = await Image.findByIdAndDelete(req.params.id);

    return res.send(deleteImg);
    //Eliminar en el Cloud
 /*    await s3.deleteObject({
        Bucket: config.BucketName,
        Key: deleteImg.key
    }).promise();

    res.json(deleteImg); */
    
})


export default router;