import { periodicData } from "../data/periodicData";
import Card from "../components/Card";

export default function TableView() {
  return (
    <group>
      {periodicData.map((el, i) => {
        return <Card key={i} periodicItem={el} index={i} mode="Table" />;
      })}
    </group>
  );
}
