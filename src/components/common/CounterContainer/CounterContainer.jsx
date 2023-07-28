import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CounterContainer = ({ stock, onAdd, cantidad = 1 }) => {
  const [contador, setContador] = useState(cantidad);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : contador;
  };
  const restar = () => {
    contador > 1 ? setContador(contador - 1) : contador;
  };

  return (
    <div className="contadorContainer1">
      <div className="contador">
        <button className="botonResta" onClick={restar}>
          <RemoveIcon/>
        </button>
        <div style={{marginTop:"4px"}}>{contador}</div>
        <button className="botonSuma" onClick={sumar}>
          <AddIcon />
        </button>
      </div>
      <div>
        <button
          className="botonComprar1"
          onClick={() => {
            onAdd(contador);
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CounterContainer;
