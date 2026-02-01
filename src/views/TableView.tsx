import type { UsersData } from "../models/dataUsers";
import type { FC } from "react";
import Card from "../components/Card";
interface props {
  usersData?: UsersData;
}
const TableView: FC<props> = ({ usersData }) => {
  return (
    <group>
      {usersData?.data.map((user, index) => {
        return (
          <Card key={index} userData={user} index={index} mode="Table" />
        );
      })}
    </group>
  );
};
export default TableView;
