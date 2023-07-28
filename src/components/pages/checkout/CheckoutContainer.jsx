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
import "../../pages/ItemDetail/ItemDetail.css";
import { Button } from "@mui/material";

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
    clearCart();
  };
  const capturarInfo = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {orderId ? (
        <div className="page1">
          <div
            style={{
              height: "500px",
              display: "flex",
              alignContent: "center",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                width: "400px",
                height: "30px",
                marginBottom: "15px",
                marginTop: "10px",
              }}
            >
              Felicitaciones por su compra
            </h1>
            <h4>Su numero de seguimiento es {orderId}</h4>
            <Button sx={{ textDecoration: "none" }} variant="contained">
              <Link style={{ textDecoration: "none", color:"white"}} to={"/"}>
                Seguir Comprando
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="page1">
          <div>
            <form
              className="container1"
              style={{
                height: "500px",
                flexDirection: "column",
                alignContent: "space-around",
                justifyContent: "center",
                flexWrap: " wrap",
              }}
              onSubmit={enviarCompra}
            >
              <h1>Ingrese sus datos</h1>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese su Nombre"
                onChange={capturarInfo}
                style={{
                  width: "400px",
                  height: "30px",
                  marginBottom: "15px",
                  marginTop: "10px",
                }}
              />
              <input
                type="text"
                name="telefono"
                placeholder="Ingrese su telefono"
                onChange={capturarInfo}
                style={{ width: "400px", height: "30px", marginBottom: "15px" }}
              />
              <input
                type="text"
                name="email"
                placeholder="Ingrese su email"
                onChange={capturarInfo}
                style={{ width: "400px", height: "30px", marginBottom: "15px" }}
              />
              <Button variant="contained" type="submit">
                Comprar
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;
