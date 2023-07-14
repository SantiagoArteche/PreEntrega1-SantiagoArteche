import { CarritoContainer } from "./components/pages/carrito/CarritoContainer"
import { CheckOutPresentacional } from "./components/pages/checkout/CheckOutPresentacional"
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"

export const rutas = [{
    id: "home",
    path: "/",
    Element: ItemListContainer

},{
    id: "categorias",
    path: "/categoria/:categoria",
    Element: ItemListContainer

},{
    id: "detalleproductos",
    path: "/detalleproducto/:id",
    Element: ItemDetailContainer

},{
    id: "carrito",
    path: "/carrito",
    Element: CarritoContainer

},{
    id: "checkout",
    path: "/checkout",
    Element: CheckOutPresentacional
},
]