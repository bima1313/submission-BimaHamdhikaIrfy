import type { FC } from "react";
import Card from "../components/Card";
import type { UsersData } from "../models/dataUsers";
import { Mode } from "../constants/Mode";
import gridCoordinate from "../utils/gridCoordinate";

interface props {
  usersData: UsersData;
}
const GridView: FC<props> = ({ usersData }) => {
  return (
    <group>
      {usersData.items.map((user, index) => {
        return (
          <Card
            key={index}
            userData={user}
            index={index}
            mode={Mode.GRID}
            coordinateFunc={() => gridCoordinate(index)}
          />
        );
      })}
    </group>
  );
};

export default GridView;
