import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../cart/Cart.css";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartContainer = () => {
  const { cart, clearCart, eliminarElemento, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 640 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Producto</TableCell>
              <TableCell align="right">Precio/un</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.cantidad}</TableCell>

                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      eliminarElemento(row.id);
                    }}
                  >
                    Eliminar elemento
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4 style={{ marginTop: "10px" }}>El total del carrito es: {total}$</h4>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: "30px",
        }}
      >
        {cart.length > 0 && (
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <Button
              sx={{ marginRight: "10px" }}
              variant="outlined"
              startIcon={<DeleteForeverIcon />}
              onClick={vaciarCart}
            >
              Vaciar Carrito
            </Button>
            <Button
              sx={{ textDecoration: "none" , height:"40px", marginRight:"10px"}}
              variant="contained"
              endIcon={<ShoppingCartIcon />}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/checkout"}
              >
                Finalizar compra
              </Link>
            </Button>
          </div>
        )}

        <ToastContainer />
      </div>
    </>
  );
};

export default CartContainer;
