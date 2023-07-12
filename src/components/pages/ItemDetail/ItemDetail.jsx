
import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import "./ItemDetail.css"
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [producto, setProductos] = useState({});

  const {id} = useParams()

  useEffect(() => {
  let productoSeleccionado = products.find((item) => item.id === Number(id));
    const tarea = new Promise((resolve) => {
      resolve(productoSeleccionado);
    });
    tarea
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.log(error));
  }, [id]);


  return (
    <div className="containerProductos">
      {" "}
      <div className="card" key={producto.id}>
        <div className="contenedorFoto">
          <img className="fotoProducto" src={producto.img} />
        </div>
        <div className="contenedorInfo">
          <div className="contenedorTitulo">
            <b className="titulo">{producto.title}</b>
            <p className="precio">${producto.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ItemDetail;