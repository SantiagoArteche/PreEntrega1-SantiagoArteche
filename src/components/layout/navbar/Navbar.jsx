import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <p className="text-center bg-success text-light fs-5 m-0">
          Hasta 12 cuotas sin interés!
        </p>
        <h1 className="text-success text-center bg-dark m-0 fs-1">OffStore</h1>
        <ul className="list-unstyled d-flex flex-row justify-content-around bg-success p-2 text-light fs-5">
          <li className="bg-dark rounded p-2">Productos</li>
          <li className="bg-dark rounded p-2">Remeras</li>
          <li className="bg-dark rounded p-2">Buzos</li>
          <li className="bg-dark rounded p-2">Pantalones</li>
          <li className="bg-dark rounded p-2">Zapatillas</li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};
