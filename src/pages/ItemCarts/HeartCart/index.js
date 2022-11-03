import { Card, useSelector } from "../../Home/index";
import ShopDefaultContainer from "./ShopDefaultContainer";
import wrappedHeartCart from "../../../utils/HOC/getHeartCartParams";

const HeartCart = ({
  showWishlist,
  showScroll,
  wishLists,
  cartItems,
  items,
}) => {
  return (
    <>
      <Card showCart={showWishlist}></Card>
      <ShopDefaultContainer
        showWishlist={showWishlist}
        showScroll={showScroll}
        wishLists={wishLists}
        cartItems={cartItems}
        items={items}
      />
    </>
  );
};

export default wrappedHeartCart(HeartCart);
