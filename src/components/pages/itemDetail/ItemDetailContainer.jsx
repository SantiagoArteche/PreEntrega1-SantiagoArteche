import { useState, useEffect } from "react";
import { productsMock } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { ItemDetailPresentacional } from "./ItemDetailPresentacional";
export const ItemDetailContainer = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let productoDetalle = productsMock.find((el) => el.id === JSON.parse(id));
    const detalleProductos = new Promise((resolve) => {
      resolve(productoDetalle);
    });
    detalleProductos.then((response) => setItemDetails(response));
  }, [id]);

  return <ItemDetailPresentacional product={itemDetails} />;
};
