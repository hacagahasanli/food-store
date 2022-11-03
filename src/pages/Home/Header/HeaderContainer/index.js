import { HeaderContainerMain, Row, useSelector } from "../../index";
import MenuSide from "./MenuSide";
import CartSide from "./CartSide";
import LogoSide from "./LogoSide";
import "../../styles.css";

const HeaderContainer = () => {
  const cartTotals = useSelector((state) => state.cartSlice.itemTotals);

  return (
    <HeaderContainerMain>
      <Row>
        <LogoSide />
        <MenuSide />
        <CartSide cartTotals={cartTotals} />
      </Row>
    </HeaderContainerMain>
  );
};

export default HeaderContainer;
