import { useEffect } from "react";
import {
  Card,
  ShopCartContainer,
  DefaultShopContainer,
  TopScrollContainer,
  TransparentHide,
  CartEmpty,
  useSelector,
  useDispatch,
  cartActions,
  getLocaleStorage,
} from "../../Home/index";
import HeaderCart from "./HeaderCart";
import ButtonsCart from "./ButtonsCart";
import ItemCartContainer from "./ItemCartContainer";

const ShopCart = () => {
  const showCart = useSelector((state) => state.cartSlice.showCart);
  const cartLists = useSelector((state) => state.cartSlice.addedItems);
  const showScroll = useSelector((state) => state.cartSlice.showScroll);
  const items = getLocaleStorage("items") || [];
  const dispatch = useDispatch();

  useEffect(() => {
    cartLists.length > 2
      ? dispatch(cartActions.addScrollBar(true))
      : dispatch(cartActions.addScrollBar(false));
  }, [cartLists, dispatch]);

  const hideCartHandler = () => {
    dispatch(cartActions.showCart(false));
  };

  return (
    <>
      <Card showCart={showCart}></Card>
      <DefaultShopContainer showCart={showCart}>
        <TransparentHide onClick={hideCartHandler}></TransparentHide>
        <ShopCartContainer showCart={showCart}>
          <HeaderCart />
          <TopScrollContainer showScroll={showScroll}>
            {items?.length === 0 ? (
              <CartEmpty>You have no item in your cart!</CartEmpty>
            ) : (
              <ItemCartContainer />
            )}
          </TopScrollContainer>
          <ButtonsCart onHideCart={hideCartHandler} />
        </ShopCartContainer>
      </DefaultShopContainer>
    </>
  );
};

export default ShopCart;
