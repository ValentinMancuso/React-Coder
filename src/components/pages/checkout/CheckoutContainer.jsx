import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const [data, setData] = useState({ nombre: "", telefono: "", email: "" });

  let { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderid] = useState("");

  let total = getTotalPrice();

  const enviarCompra = (e) => {
    e.preventDefault();
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    let oredersCollection = collection(db, "orders");
    addDoc(oredersCollection, order).then((res) => {
      setOrderid(res.id);
    });

    cart.forEach((element) => {
      updateDoc(doc(db, "products", element.id), {
        stock: element.stock - element.cantidad,
      });
    });
    clearCart()
  };
  const capturarInfo = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  };

  return (
    <div>
      <div>Checkout</div>
      {orderId ? (
        <div>
          <h3>Felicitaciones por su compra</h3>
          <h4>Su numero de seguimiento es {orderId}</h4>
          <button>
            <Link to={"/"}>Seguir Comprando</Link>
          </button>
        </div>
      ) : (
        <form onSubmit={enviarCompra}>
          <input
            type="text"
            name="nombre"
            placeholder="_Ingrese su Nombre"
            onChange={capturarInfo}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Ingrese su telefono"
            onChange={capturarInfo}
          />
          <input
            type="text"
            name="email"
            placeholder="Ingrese su email"
            onChange={capturarInfo}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
