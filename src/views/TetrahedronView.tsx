import { type FC } from "react";
import type { UsersData } from "../models/dataUsers";
import Card from "../components/Card";
import { useTetrahedronGridPositions } from "../hooks/useTetrahedronGridPositions";
import { Mode } from "../constants/Mode";
import tetrahdronCoordinate from "../utils/tetrahedronCoordinate";

interface props {
  usersData: UsersData;
}
const TetrahedronView: FC<props> = ({ usersData }) => {
  const currentData = useTetrahedronGridPositions(usersData);

  return (
    <group>
      {currentData.map((user, index) => {
        return (
          <Card
            key={index}
            index={index}
            userData={user}
            mode={Mode.TETRAHEDRON}
            coordinateFunc={() => tetrahdronCoordinate(user)}
          />
        );
      })}
    </group>
  );
};

export default TetrahedronView;
