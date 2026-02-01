import type { FC } from "react";
import Card from "../components/Card";
import type { UsersData } from "../models/dataUsers";

interface props{
    usersData?: UsersData
}
const HelixView: FC<props> = ({usersData}) => {
  return (
    <group>
      {usersData?.data.map((user, index) => {
        return (
          <Card
            key={index}
            userData={user}
            index={index}
            mode="Helix"
            totalData={usersData.data.length}
          />
        );
      })}
    </group>
  );
};

export default HelixView;
