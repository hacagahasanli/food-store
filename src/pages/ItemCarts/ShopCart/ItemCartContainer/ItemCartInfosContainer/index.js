import {
  CartItemInfosContainer,
  CartItemInfos,
  CartItemInfosSub,
  CartItemInfo,
  CartItemName,
} from "../../../../Home/index";

const ItemCartInfosContainer = ({ name, itemInfo, price, quantity, total }) => {
  return (
    <CartItemInfosContainer>
      <CartItemInfos>
        <CartItemName>
          <h3>{name}</h3>
        </CartItemName>
        <CartItemInfosSub>
          <CartItemInfo section>
            <small>Section</small>
            <span>{itemInfo}</span>
          </CartItemInfo>
          <CartItemInfo style={{ margin: "0 auto" }}>
            <small>Price</small>
            <span>{parseInt(price.substring(1, price.length))}$</span>
          </CartItemInfo>
          <CartItemInfo total>
            <small>Quantity</small>
            <span>x{quantity}</span>
          </CartItemInfo>
          <CartItemInfo total>
            <small>Total</small>
            <span>{total}$</span>
          </CartItemInfo>
        </CartItemInfosSub>
      </CartItemInfos>
    </CartItemInfosContainer>
  );
};

export default ItemCartInfosContainer;
