import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'

const ImageDetails = () => {

    const [image, setImage] = useState({
      title: "",
      url: "",
      _id: ""  
    });

    const params = useParams();
    const history = useHistory()

    useEffect( ()=>{
        ( async () =>{
            const res = (await axios.get(`/api/images/${params.id}`)).data
            setImage(res)
        }
        )();
    },[params.id]);

    const handlerDelete = async () =>{
        const res = await axios.delete(`/api/images/${params.id}`)
        console.log(res)
        history.push('/');
    }

    return(
        <div className="col-md-4 offset-md-4">
           <div className="card bg-dark">
                    <img src={image.url} alt={image.title} className="card-img-top"/>
                <div className="card-body">
                    <h1>
                        {image.title}
                        <button className="btn btn-outline-danger"
                        onClick={handlerDelete}>
                            Delete
                        </button>
                    </h1>
                </div>  
            </div>   
        </div>
    )
}

export default ImageDetails;