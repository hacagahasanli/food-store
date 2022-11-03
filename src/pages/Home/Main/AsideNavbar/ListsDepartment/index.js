import {
  DepartmentsList,
  DepartmentList,
  DepartmentItem,
} from "../../../index";
import { useSelector } from "react-redux";

const ListDepartment = () => {
  const lists = useSelector((state) => state.departmentListSlice.lists);
  const toggleValue = useSelector((state) => state.departmentListSlice.toggle);
  return (
    <DepartmentsList toggle={toggleValue} >
      {lists.map((list) => (
        <DepartmentList key={list.id}>
          <DepartmentItem href="/#">{list.name}</DepartmentItem>
        </DepartmentList>
      ))}
    </DepartmentsList>
  );
};

export default ListDepartment;
