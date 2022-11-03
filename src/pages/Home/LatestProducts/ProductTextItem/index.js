import { LatestProductTextItem } from "../../index";
import "../../styles.css";

const ProductTextItem = ({ name }) => {
  return (
    <LatestProductTextItem>
      <h4>{name}</h4>
      <h4>
        <ion-icon name="wallet-outline"></ion-icon>
        <ion-icon name="cash-outline"></ion-icon>
      </h4>
    </LatestProductTextItem>
  );
};

export default ProductTextItem;
