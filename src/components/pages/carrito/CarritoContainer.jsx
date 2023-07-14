import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import "./carrito.css"
import { CarritoPresentacional } from "./CarritoPresentacional";


export const CarritoContainer = () => {
 const { cart, limpiarCarrito, limpiarProducto, precioTotal } = useContext(CartContext)

return <CarritoPresentacional cart={cart} limpiarCarrito={limpiarCarrito} limpiarProducto={limpiarProducto} precioTotal={precioTotal} />
};
