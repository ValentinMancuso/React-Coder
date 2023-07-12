import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SimpleBadge() {
  return (
    <>
      <Link to="/Cart">
        <Badge badgeContent={4} color="primary" sx={{ marginRight: "30px" }}>
          <ShoppingCart color="action" />
        </Badge>
      </Link>
    </>
  );
}
