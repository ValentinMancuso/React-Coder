import { useState } from "react";

const CounterContainer = ({ stock, onAdd, cantidad=1}) => {
  const [contador, setContador] = useState(cantidad);

  const sumar = () => {
    contador<stock ? setContador(contador + 1) : contador
  };
  const restar = () => {
    contador > 1 ? setContador(contador - 1) : contador;
  };


  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <div>{contador}</div>
      <button onClick={restar}>Restar</button>
      <button onClick={()=>{onAdd(contador)}}>Comprar</button>
    </div>
  );
};

export default CounterContainer;
