import type { FC } from "react";
import InformationCard from "../components/InformationCard";
import { useNavigate } from "react-router-dom";
import { Path } from "../routes/routePath";
import { Html } from "@react-three/drei";

const EmptyView: FC = () => {
  const navigate = useNavigate();
  return (
    <Html fullscreen={true}>
      <InformationCard
        title="No Data Available Yet"
        description="It looks like there's no information here."
      >
        <button
          className="mt-8 w-full rounded-full px-4 py-[4px] bg-blue-600 text-xl font-bold text-white cursor-pointer"
          onClick={() => {
            navigate(Path.initPath);
          }}
        >
          Sign Out
        </button>
      </InformationCard>
    </Html>
  );
};

export default EmptyView;
