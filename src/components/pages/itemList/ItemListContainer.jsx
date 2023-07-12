import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      let productosFiltrados = products.filter(
        (item) => item.categoria === category
      );
      resolve(category === undefined ? products : productosFiltrados);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [category]);

  return <ItemList items={items} />;
}
