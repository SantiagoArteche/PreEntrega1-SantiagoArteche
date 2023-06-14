import "./itemDetail.css";

export const ItemDetailPresentacional = ({ product }) => {
  return (
    <div className="d-flex flex-row">
      <div className="d-flex justify-content-center my-5 col-6">
        <div className="d-flex flex-column align-items-center border border-black rounded-3 bg-dark text-light p-4">
          <img
            src={product.img}
            alt=""
            className=" mt-3 align-self-center mb-3"
          />
          <h2 className="fs-4 text-center">{product.nombre}</h2>
          <h3 className="fs-5">$ {product.precio}</h3>
          <div className="d-flex flex-row">
            <button className="p-1 me-3">-</button>
            <h3 className="fs-5 bg-success rounded-2 p-2 me-3">
              {`Stock disponible : ${product.stock}`}
            </h3>
            <button>+</button>
          </div>
          <h3 className="fs-5 bg-success rounded-2 p-2">Anadir al carrito</h3>
        </div>
      </div>
      <div className="col-6 fs-1 my-5 align-self-center">
        {product.descripcion}
      </div>
    </div>
  );
};
