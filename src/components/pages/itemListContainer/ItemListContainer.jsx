import { useEffect, useState } from "react";
import { productsMock } from "../../../productsMock";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import { ItemListPresentacional } from "./ItemListPresentacional";

export const ItemListContainer = () => {
  const [product, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const filtroProductos = productsMock.filter(
      (elemento) => elemento.categoria === categoria
    );
    const productos = new Promise((resolve) => {
      resolve(categoria ? filtroProductos : productsMock);
    });
    productos
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, [categoria]);

  return <ItemListPresentacional productos={product} />;
};
