import React from "react";
import { StyledCard } from "../styledcomponents/Home";

const Card = ({ showCart, children }) => {
  return (
    <StyledCard showCart={showCart ? showCart : ""}>{children}</StyledCard>
  );
};

export default Card;
