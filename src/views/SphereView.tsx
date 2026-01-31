import type { FC } from "react";
import { periodicData } from "../data/periodicData";
import Card from "../components/Card";

const SphereView: FC = () => {
  return (
    <group>
      {periodicData.map((el, i) => {
        return (
          <Card
            key={i}
            periodicItem={el}
            index={i}
            mode="Sphere"
            totalData={periodicData.length}
          />
        );
      })}
    </group>
  );
};

export default SphereView;
