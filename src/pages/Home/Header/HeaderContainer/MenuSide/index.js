import PagesListMain from "./PagesListMain";
import { NavLink } from "react-router-dom";
import {
  MenuMiddleSide,
  MiddleSideNav,
  Menu,
  MenuList,
  MenuListItem,
  useDispatch,
  useSelector,
  fetchOrderedItems,
} from "../../../index";

const MenuSide = () => {
  const dispatch = useDispatch();
  const postOnChange = useSelector((state) => state.cartSlice.postOnChange)
  const showOrdersHandler = () => {
    dispatch(fetchOrderedItems(postOnChange));
  };

  return (
    <MenuMiddleSide>
      <MiddleSideNav>
        <Menu>
          <MenuList>
            <NavLink to="/">Home</NavLink>
          </MenuList>
          <MenuList>
            <MenuListItem href="/shop">Shop</MenuListItem>
          </MenuList>
          <PagesListMain />
          <MenuList>
            <MenuListItem href="/contact">Contact</MenuListItem>
          </MenuList>
          <MenuList>
            <NavLink to="/orders" onClick={showOrdersHandler}>
              Orders
            </NavLink>
          </MenuList>
        </Menu>
      </MiddleSideNav>
    </MenuMiddleSide>
  );
};

export default MenuSide;
