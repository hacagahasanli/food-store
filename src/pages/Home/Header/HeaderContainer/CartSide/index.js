import { useEffect } from "react";
import {
  Cart,
  CartInner,
  CartLists,
  CartList,
  CartListItem,
  CartPrice,
  CartQuantity,
  useSelector,
  useDispatch,
  cartActions,
  heartActions,
} from "../../../index";

const CartSide = ({ cartTotals }) => {
  const dispatch = useDispatch();
  const imageLists = useSelector((state) => state.featuresSlice.imageLists);
  
  const wishListsQuantity = useSelector(
    (state) => state.heartSlice.wishListsQuantity
  );

  useEffect(() => {
    dispatch(cartActions.setInitialState(imageLists));
  }, [imageLists, dispatch]);

  const heartsHandler = () => {
    dispatch(heartActions.showWishlist(true));
  };
  const cartsHandler = () => {
    dispatch(cartActions.showCart(true));
  };

  return (
    <Cart>
      <CartInner>
        <CartLists>
          <CartList>
            <CartListItem href="#!">
              <ion-icon name="heart" onClick={heartsHandler}></ion-icon>
              <CartQuantity>
                <p>{wishListsQuantity ? wishListsQuantity : 0}</p>
              </CartQuantity>
            </CartListItem>
          </CartList>
          <CartList>
            <CartListItem href="#!">
              <ion-icon name="cart" onClick={cartsHandler}></ion-icon>
              <CartQuantity>
                <p>
                  {cartTotals?.totalQuantity ? cartTotals?.totalQuantity : 0}
                </p>
              </CartQuantity>
            </CartListItem>
          </CartList>
        </CartLists>
        <CartPrice>
          total:{" "}
          <span>${cartTotals?.totalPrice ? cartTotals?.totalPrice : 0}</span>
        </CartPrice>
      </CartInner>
    </Cart>
  );
};

export default CartSide;
