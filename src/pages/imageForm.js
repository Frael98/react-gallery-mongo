import React, { useState } from "react";
import axios from "axios";

const ImageForm = () => {
  const [file, setFile] = useState();//Archivo
  const [title, setTitle] = useState(" ");//Titulo
  const [uploaded, setUploaded] = useState(0);//Porccentaje de la carga del archivo
  const [loading, setLoading] = useState(false)//Da vista al bar-progress

  const handlerChangeFile = (e) => {
    
    console.log(e.target.files[0].type)
    setFile(e.target.files[0]);
  };
  const handlerChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();//Evita que la pagina recargue al hacer submit
    setLoading(true)

    const formData = new FormData();//Creamos un formData
    formData.append("file", file);//Le damos el objeto con datos del archivo
    formData.append("title", title);//Y el titulo como campos

    //
    const res = await axios.post("/api/images/upload", formData, {
      headers: {
        "Content-Type": "multipart/formdata",
      },
      onUploadProgress(progress){
          const {loaded, total} = progress;
          const percent = parseInt((loaded * 100 )/ total)
          setUploaded(percent);
      }
    });
    //
    console.log(res);
    setTitle('')

    setLoading(false)//Seteamos de vuelta en falso bar-progress
  };

  return (
    <div className="col-md-4 offset-md-4 ">
       {/* Si carga es verdadero que muestre bar-progress */} {loading && (
        <div className="progress">
        <div
          className="progress-bar bg-success rounded-0"
          role="progressbar"
          style={{ width: `${uploaded}%` }}
        ></div>
      </div>)}
        <div className="card bg-dark text-light rounded-0 p-4">
        <div className="card-body">
          <h4>Sube una Imagen!</h4>
          <form onSubmit={handlerSubmit}>
            <input
              type="text"
              className="form-control bg-dark text-light my-3 rounded-0"
              placeholder="Escribe un Titulo para tu foto"
              onChange={handlerChangeTitle}
              value={title}
            ></input>
            <input
              type="file"
              className="form-control bg-dark text-light rounded-0"
              onChange={handlerChangeFile}
              
            ></input>
            <div className="my-3">
              <button className="btn btn-success rounded-0 w-100">
                Subir!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
