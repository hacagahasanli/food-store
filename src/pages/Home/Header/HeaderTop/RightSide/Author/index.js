import { RightSideAuth, LoginAnchor } from "../../../../index";

const Author = () => {
  return (
    <RightSideAuth>
      <LoginAnchor href="/#">
        <ion-icon name="person"></ion-icon>
        Login
      </LoginAnchor>
    </RightSideAuth>
  );
};

export default Author;
