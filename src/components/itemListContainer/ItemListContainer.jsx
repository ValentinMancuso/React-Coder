import { useState } from "react";

function ItemListContainer({ name }) {
  const [name1=name, setName] = useState("Produccto x");
  let numeroRandom = Math.random() * 10;

  return (
    <div>
      <h1>Producto aleatorio: {name1} </h1>
      <button
        onClick={() => {
          setName(`Impresion ${Math.round(numeroRandom)}`);
        }}
      >
        Cambiar nombre del producto
      </button>
    </div>
  );
}

export default ItemListContainer;
