import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="card" key={item.id}>
      <Link to={`/ItemDetail/${item.id}`}>
        <div className="contenedorFoto">
          <img className="fotoProducto" src={item.img} />
        </div>
      </Link>
      <div className="contenedorInfo">
        <div className="contenedorTitulo">
          <b className="titulo">{item.title}</b>
          <p className="precio">${item.price}</p>
        </div>
        <div className="contenedorComprar">
          <Link to={`/ItemDetail/${item.id}`}>
            <button className="botonComprar" id="botonComprar${item.id}">
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
