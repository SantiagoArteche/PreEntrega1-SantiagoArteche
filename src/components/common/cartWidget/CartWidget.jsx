import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";


export const CartWidget = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className="d-flex flex-row align-items-center">
      <ShoppingCartIcon className="carrito" color="action" sx={{ fontSize : 55}}/>
      <p className="fs-3 m-0 ">{cart.reduce((acum, el)=> acum + el.cantidad, 0)}</p>
    </div>
  );
};
