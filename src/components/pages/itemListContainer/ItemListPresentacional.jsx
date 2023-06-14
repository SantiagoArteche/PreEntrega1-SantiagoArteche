import { ItemList } from "../../common/itemList/itemList";

export const ItemListPresentacional = ({ productos }) => {
  return (
    <div>
      <div className="d-flex flex-row flex-wrap containerTarjeta container-fluid justify-content-center mb-3">
        {productos.map((prod) => (
          <ItemList key={prod.id} products={prod} />
        ))}
      </div>
    </div>
  );
};
