import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    const existe = isInCart(item.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, cantidad:item.cantidad };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const eliminarElemento = (id) => {
    let newCart = cart.filter((elemento) => elemento.id !== id);
    setCart(newCart);
  };
  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.cantidad;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  }

  const getQuantityById = (id)=>{
    let elemento = cart.find((item)=>item.id === id)
    return elemento?.cantidad
  }

  const data = { cart, addToCart, clearCart, eliminarElemento, getTotalPrice, getTotalQuantity, getQuantityById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
