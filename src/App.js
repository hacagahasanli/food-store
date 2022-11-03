import { Route, Routes } from "react-router-dom";
import {
  GlobalStyle,
  AppContainer,
  ItemCarts,
  useSelector,
  Home,
  Orders,
  WelcomeSound,
} from "./exports";

export default function App() {
  const showCart = useSelector((state) => state.cartSlice.showCart);
  const showWishList = useSelector((state) => state.heartSlice.showWishlist);

  return (
    <>
      <GlobalStyle showCart={showCart} showWishList={showWishList} />
      <WelcomeSound />
      <ItemCarts />
      <AppContainer>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/orders" exact element={<Orders />}></Route>
        </Routes>
      </AppContainer>
    </>
  );
}
