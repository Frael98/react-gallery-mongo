import React , {useEffect, useState}from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

//Component Gallery
const ImageGallery = ()=> {

    const [images ,setImages] = useState([])//Arreglo que contendra todas las imagenes
    const History = useHistory()//

    useEffect( () =>{
        (async ()=>{
            const res = (await axios.get('/api/images')).data;
            //console.log(res);//
            
            setImages(res)//Setteamos el arreglo con los datos traidos de la BD
        })();
    }, []);



    return(
        <div className="row">
            <div>
                {console.log(images)}
            { images.map( imgs => (
                <div className="col-md-4 p-2 card-image"
                onClick={() => History.push(`/images/${imgs._id}`)}/*Enviamos al usuario a una nueva pagina 
                con detalles de la imagen -> "imageDetails" */
                key = {imgs._id}>
                    <img src={imgs.key} className="img-fluid h-100 w-100" alt={imgs.title}/>
                </div>
    ))
            }
            </div>
        </div>
    );
}

export default ImageGallery;