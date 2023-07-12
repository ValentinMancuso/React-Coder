import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Layout from "./components/layout/Layout";
import ItemDetail from "./components/pages/ItemDetail/itemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/category/:category" element={<ItemListContainer />}
          />
        </Route>

        <Route path="*" element={<h1> 404 Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
