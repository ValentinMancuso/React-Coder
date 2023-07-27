import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function SimpleBadge() {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();

  return (
    <>
      <Link to="/Cart">
        <Badge
          badgeContent={total}
          color="primary"
          sx={{ marginRight: "30px" }}
        >
          <ShoppingCart color="action" />
        </Badge>
      </Link>
    </>
  );
}
