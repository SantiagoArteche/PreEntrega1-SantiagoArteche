import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <p className="text-center bg-success text-light fs-5 m-0">
          Hasta 12 cuotas sin interés!
        </p>
        <h1 className="text-success text-center bg-dark m-0 fs-1">OffStore</h1>
        <ul className="list-unstyled d-flex flex-row justify-content-around align-items-center bg-success p-2 text-light fs-5 navb">
          <Link to="/" className="bg-dark rounded p-2">
            Productos
          </Link>
          <Link to="/categoria/remeras" className="bg-dark rounded p-2">
            Remeras
          </Link>
          <Link to="/categoria/buzos" className="bg-dark rounded p-2">
            Buzos
          </Link>
          <Link to="/categoria/pantalones" className="bg-dark rounded p-2">
            Pantalones
          </Link>
          <Link to="/categoria/zapatillas" className="bg-dark rounded p-2">
            Zapatillas
          </Link>
          <Link to="/carrito">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    </>
  );
};
