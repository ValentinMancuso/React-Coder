
import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import Skeleton from "@mui/material/Skeleton";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="lista">
      {items.length > 0
        ? items.map((item) => <ProductCard item={item} key={item.id} />)
        : arr.map((number) => (
            <div key={number}>
              <Skeleton style={{marginBottom:"10px"}} variant="rounded" width={340} height={500} />
            </div>
          ))}
    </div>
  );
};

export default ItemList;