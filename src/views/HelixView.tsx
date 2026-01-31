import type { FC } from "react";
import Card from "../components/Card";
import { periodicData } from "../data/periodicData";

const HelixView: FC = () => {
  return (
    <group>
      {periodicData.map((el, i) => {
        return (
          <Card
            key={i}
            periodicItem={el}
            index={i}
            mode="Helix"
            totalData={periodicData.length}
          />
        );
      })}
    </group>
  );
};

export default HelixView;
