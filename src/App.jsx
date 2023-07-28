import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetail />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Route>

          <Route path="*" element={<h1> 404 Not Found</h1>}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
