import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components/layout/Layout";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalleproducto/:id"
              element={<ItemDetailContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
