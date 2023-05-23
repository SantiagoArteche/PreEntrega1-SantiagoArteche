import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <div className="d-flex flex-row justify-content-center ">
      <ShoppingCartIcon fontSize="large" color="success" />
      <p className="fs-3">0</p>
    </div>
  );
};
