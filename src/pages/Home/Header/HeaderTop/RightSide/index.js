import { RightSideMain, RightSideInner } from "../../../index";
import Author from "./Author";
import Languages from "./Languages";
import Social from "./Social";

const RightSide = () => {
  return (
    <RightSideMain>
      <RightSideInner>
        <Social />
        <Languages />
        <Author />
      </RightSideInner>
    </RightSideMain>
  );
};

export default RightSide;
