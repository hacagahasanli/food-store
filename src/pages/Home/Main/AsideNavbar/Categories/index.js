import {
  AsideCategories,
  AllDepartments,
  departmentListActions,
} from "../../../index";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(departmentListActions.toggle());
  };

  return (
    <AsideCategories onClick={handleToggle}>
      <ion-icon className="menu__outline" name="menu-outline"></ion-icon>
      <AllDepartments>All departments</AllDepartments>
      <span className="material-symbols-outlined">expand_more</span>
    </AsideCategories>
  );
};

export default Categories;
