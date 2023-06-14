import { Link } from "react-router-dom";
import "./itemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="d-flex flex-column align-items-center border border-black rounded-3 tarjeta bg-dark text-light p-4">
      <img src={products.img} alt="" className=" mt-3 align-self-center" />
      <h2 className="fs-4 text-center">{products.nombre}</h2>
      <h3 className="fs-5">$ {products.precio}</h3>
      <div className="d-flex justify-content-around w-100">
        <h3 className="fs-5 bg-success rounded-2 p-2 details">
          Anadir al carrito
        </h3>
        <Link
          to={`/detalleproducto/${products.id}`}
          className="fs-5 bg-success rounded-2 p-2 text-light details mb-3"
        >
          Detalles
        </Link>
      </div>
    </div>
  );
};
