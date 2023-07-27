import { useContext, useEffect, useState } from "react";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import CounterContainer from "../../CounterContainer/CounterContainer";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productCollection = collection(db, "products");
    let productRef = doc(productCollection, id);
    getDoc(productRef).then((res) => {
      let producto = { ...res.data(), id: res.id };
      setProducto(producto);
    });
  }, [id]);

  const { addToCart, getQuantityById } = useContext(CartContext);

  const cantidad = getQuantityById(id);

  const onAdd = (cantidad) => {
    let productoAgregado = { ...producto, cantidad };
    addToCart(productoAgregado);
    Swal.fire("Agregaste el producto al carrito");
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Agregaste el producto al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
            {producto.stock === 0 ? <div>No hay stock</div> : <CounterContainer
              stock={producto.stock}
              onAdd={onAdd}
              cantidad={cantidad}
            />}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
