import {
  ShopCartContainer,
  DefaultShopContainer,
  TransparentHide,
  CartHeader,
  useDispatch,
  heartActions,
  cartActions,
} from "../../../Home/index";
import "../../../Home/styles.css";
import { useEffect } from "react";
import ScrollTopContainer from "./ScrollTopContainer";

const ShopDefaultContainer = ({
  showWishlist,
  showScroll,
  wishLists,
  cartItems,
  items,
}) => {
  const dispatch = useDispatch();

  const hideHeartHandler = () => {
    dispatch(heartActions.showWishlist(false));
  };

  const addToCartHandler = (id) => {
    const checkItem = cartItems.findIndex((item) => item[5] === id);

    if (checkItem === -1) {
      dispatch(cartActions.addToCart(id));
    }

    dispatch(heartActions.removeFromWishList(id));
  };

  const removeFromWishListHandler = (id) => {
    dispatch(heartActions.removeFromWishList(id));
  };

  useEffect(() => {
    dispatch(heartActions.setInitialState(items));
  }, [items, dispatch]);

  return (
    <DefaultShopContainer showCart={showWishlist}>
      <TransparentHide onClick={hideHeartHandler}></TransparentHide>
      <ShopCartContainer t showCart={showWishlist}>
        <span
          onClick={hideHeartHandler}
          className="material-symbols-outlined exitHeart"
        >
          close
        </span>
        <CartHeader a>
          <ion-icon name="heart"></ion-icon>
          <h2>My Wishlist</h2>
        </CartHeader>
        <ScrollTopContainer
          showScroll={showScroll}
          wishLists={wishLists}
          useRemoveFromWishlist={removeFromWishListHandler}
          useAddToCart={addToCartHandler}
        />
      </ShopCartContainer>
    </DefaultShopContainer>
  );
};

export default ShopDefaultContainer;
