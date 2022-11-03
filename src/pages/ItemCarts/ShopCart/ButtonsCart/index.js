import {
  CartButtonsContainer,
  CartButtonsSub,
  CartButton,
  CartTotalsInfos,
  useDispatch,
  postOrderedItems,
  cartActions,
  getLocaleStorage,
} from "../../../Home/index";

const ButtonsCart = ({ onHideCart }) => {
  const dispatch = useDispatch();
  const totals = getLocaleStorage("totals");

  const cancelHandler = () => {
    onHideCart();
  };

  const orderHandler = () => {
    dispatch(postOrderedItems());
    dispatch(cartActions.postOnChange(true));
    dispatch(cartActions.showCart(false));
    dispatch(cartActions.removeAllItems());
  };
  return (
    <CartButtonsContainer>
      <CartTotalsInfos>
        <div>
          Total Price:
          <span>${totals?.totalPrice ? totals?.totalPrice : 0}</span>
        </div>
        <div>
          Total quantity:
          <span>x{totals?.totalQuantity ? totals?.totalQuantity : 0}</span>
        </div>
      </CartTotalsInfos>
      <CartButtonsSub>
        <CartButton cancel onClick={cancelHandler}>
          Cancel
        </CartButton>
        <CartButton onClick={orderHandler}>Order</CartButton>
      </CartButtonsSub>
    </CartButtonsContainer>
  );
};

export default ButtonsCart;
