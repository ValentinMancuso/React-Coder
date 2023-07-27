import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const CartContainer = () => {
  const { cart, clearCart, eliminarElemento, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice()

  const vaciarCart = () => {
    Swal.fire({
      title: "Esta seguro que desea eliminar el carrito",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: "#E56817",
      denyButtonText: `No, guardar`,
      denyButtonColor: "#E56817",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        toast.success("Carrito Eliminado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };
  return (
    <div>
      {cart.map((producto) => {
        return (
          <div key={producto.id}>
            <div>{producto.title}</div>
            <div>{producto.price}</div>
            <div>{producto.cantidad}</div>
            <button
              onClick={() => {
                eliminarElemento(producto.id);
              }}
            >
              Eliminar elemento
            </button>
          </div>
        );
      })}
      {cart.length > 0 && <button onClick={vaciarCart}>Vaciar Carrito</button>}
      <h4>El total del carrito es: {total}</h4>
      <button><Link to={"/checkout"}>Finalizar compra</Link></button>
      <ToastContainer/>
    </div>

  );
};

export default CartContainer;
