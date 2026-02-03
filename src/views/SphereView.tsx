import type { FC } from "react";
import Card from "../components/Card";
import type { UsersData } from "../models/dataUsers";
interface props{
    usersData?: UsersData
}
const SphereView: FC<props> = ({usersData}) => {
  return (
    <group>
      {usersData?.items.map((user, index) => {
        return (
          <Card
            key={index}
            userData={user}
            index={index}
            mode="Sphere"
            totalData={usersData.items.length}
          />
        );
      })}
    </group>
  );
};

export default SphereView;
