import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CounterContainer from "../../common/CounterContainer/CounterContainer";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import "../ItemDetail/ItemDetail.css";

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
    <div className="page1">
      <div className="container1" key={producto.id}>
        <div className="contenedorImg1">
          <img className="img1" src={producto.img} />
        </div>
        <div className="contenedorInfo1">
          <div className="infoProduct">
            <b className="titulo1">{producto.title}</b>
            <h3 className="precio1">${producto.price}</h3>
          </div>
          <div className="contadorContainer">
            {producto.stock === 0 ? (
              <div>No hay stock</div>
            ) : (
              <CounterContainer
                stock={producto.stock}
                onAdd={onAdd}
                cantidad={cantidad}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
