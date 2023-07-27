import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let consulta;
    if (category) {
      consulta = query(itemsCollection, where("categoria", "==", category));
    } else {
      consulta = itemsCollection;
    }
    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setItems(productos);
    });
  }, [category]);

  return <ItemList items={items} />;
}
