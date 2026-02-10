import type { UsersData } from "../models/dataUsers";
import { type FC } from "react";
import Card from "../components/Card";
import { Mode } from "../constants/Mode";
import tableCoordinate from "../utils/tableCoordinate";
interface props {
  usersData: UsersData;
}
const TableView: FC<props> = ({ usersData }) => {
  return (
    <group>
      {usersData.items.map((user, index) => {
        return (
          <Card
            key={index}
            userData={user}
            index={index}
            mode={Mode.TABLE}
            coordinateFunc={() => tableCoordinate(user)}
          />
        );
      })}
    </group>
  );
};
export default TableView;
