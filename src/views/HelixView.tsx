import type { FC } from "react";
import Card from "../components/Card";
import type { UsersData } from "../models/dataUsers";
import { Mode } from "../constants/Mode";
import helixCoordinate from "../utils/helixCoordinate";

interface props {
  usersData: UsersData;
}
const HelixView: FC<props> = ({ usersData }) => {
  return (
    <group>
      {usersData.items.map((user, index) => {
        return (
          <Card
            key={index}
            userData={user}
            index={index}
            mode={Mode.HELIX}
            coordinateFunc={() =>
              helixCoordinate(index, usersData.items.length)
            }
          />
        );
      })}
    </group>
  );
};

export default HelixView;
