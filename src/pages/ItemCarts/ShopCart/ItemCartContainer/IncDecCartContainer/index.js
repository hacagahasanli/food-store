import { CartIncDecContainer } from "../../../../Home/index";

const IncDecCartContainer = ({
  useAddItemHandler,
  useRemoveItemHandler,
  id,
}) => {
  return (
    <CartIncDecContainer>
      <div onClick={useAddItemHandler.bind(null, id)}>
        <span>+</span>
      </div>
      <div onClick={useRemoveItemHandler.bind(null, id)}>
        <span style={{ position: "relative", bottom: "0.15rem" }}>-</span>
      </div>
    </CartIncDecContainer>
  );
};

export default IncDecCartContainer;
