import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <div className="d-flex flex-row align-items-center">
      <ShoppingCartIcon fontSize="large" color="action" />
      <p className="fs-3 m-0">4</p>
    </div>
  );
};
