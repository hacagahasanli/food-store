import React from "react";
import "../../styles.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { HeaderTopMain, Container, Row } from "../../index";

const HeaderTop = () => {
  return (
    <HeaderTopMain>
      <Container>
        <Row>
          <LeftSide />
          <RightSide />
        </Row>
      </Container>
    </HeaderTopMain>
  );
};

export default HeaderTop;
