import { Aside } from "../../index";
import Categories from "./Categories";
import ListsDepartment from "./ListsDepartment";

const AsideNavbar = () => {
  return (
    <Aside as="aside">
      <Categories />
      <ListsDepartment />
    </Aside>
  );
};

export default AsideNavbar;
