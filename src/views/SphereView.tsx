import type { FC } from "react";
import Card from "../components/Card";
import type { UsersData } from "../models/dataUsers";
import { Mode } from "../constants/Mode";
interface props {
  usersData?: UsersData;
}
const SphereView: FC<props> = ({ usersData }) => {
  return (
    <group>
      {usersData?.items.map((user, index) => {
        return (
          <Card
            key={index}
            userData={user}
            index={index}
            mode={Mode.SPHERE}
            totalData={usersData.items.length}
          />
        );
      })}
    </group>
  );
};

export default SphereView;
