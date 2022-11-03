import {
  LeftSideMain,
  LeftSideInner,
  LeftSideUL,
  LeftSideList,
} from "../../../index";

const LeftSide = () => {
  return (
    <LeftSideMain>
      <LeftSideInner>
        <LeftSideUL>
          <LeftSideList className="email__list">
            <ion-icon name="mail" className="mail__outline"></ion-icon>
            <div>hello@colorlib.com</div>
          </LeftSideList>
          <LeftSideList>Free Shipping for all Order of &#x24;99</LeftSideList>
        </LeftSideUL>
      </LeftSideInner>
    </LeftSideMain>
  );
};

export default LeftSide;
