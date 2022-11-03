import {
  CartItemContainer,
  CartItemImageContainer,
  useDispatch,
  cartActions,
  useSelector,
  v4,
} from "../../../Home/index";
import ItemCartInfosContainer from "./ItemCartInfosContainer";
import IncDecCartContainer from "./IncDecCartContainer";

const ItemCartContainer = () => {
  const items = useSelector((state) => state.cartSlice.addedItems);
  const dispatch = useDispatch();
  const { addToCart, removeFromCart } = cartActions;

  const addItemHandler = (id) => {
    dispatch(addToCart(id));
  };

  const removeItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      {items.map((item) => (
        <CartItemContainer key={item[0] + v4()}>
          <CartItemImageContainer>
            <img src={item[1]} alt={item[4]} />
          </CartItemImageContainer>
          <ItemCartInfosContainer
            name={item[2]}
            itemInfo={item[4]}
            price={item[3]}
            quantity={item[6].cartQuantity}
            total={item[6].totalPrice}
          />
          <IncDecCartContainer
            useAddItemHandler={addItemHandler}
            useRemoveItemHandler={removeItemHandler}
            id={item[5]}
          />
        </CartItemContainer>
      ))}
    </>
  );
};

export default ItemCartContainer;
