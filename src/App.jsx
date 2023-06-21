import Navbar from "./components/layout/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { useState } from "react";

function App() {

    const [names, setName] = useState("Produccto x");

  return (
    <div>
      <Navbar />
      <ItemListContainer name={names}/>
    </div>
  );
}

export default App;
