import LogoPng from "../../../../../assets/images/logo.png";
import {
  LogoLeftSide,
  LogoContainer,
  LogoImg,
  LogoAnchor,
} from "../../../index";


const LogoSide = () => {
  return (
    <LogoLeftSide>
      <LogoContainer>
        <LogoAnchor href="/#">
          <LogoImg src={LogoPng} alt="logo" />
        </LogoAnchor>
      </LogoContainer>
    </LogoLeftSide>
  );
};

export default LogoSide;
