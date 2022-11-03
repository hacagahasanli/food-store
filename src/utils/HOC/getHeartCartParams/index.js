import React from "react";
import { useSelector } from "react-redux";

const wrappedHeartCart = (HeartCart) => {
  const HocHeartCart = () => {
    const showWishlist = useSelector((state) => state.heartSlice.showWishlist);
    const showScroll = useSelector((state) => state.heartSlice.showScroll);
    const wishLists = useSelector((state) => state.heartSlice.wishLists);
    const cartItems = useSelector((state) => state.cartSlice.addedItems);
    const items = useSelector((state) => state.featuresSlice.imageLists);
    return (
      <HeartCart
        showWishlist={showWishlist}
        showScroll={showScroll}
        wishLists={wishLists}
        cartItems={cartItems}
        items={items}
      />
    );
  };
  return HocHeartCart;
};

export default wrappedHeartCart;
