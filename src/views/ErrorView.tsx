import { Html } from "@react-three/drei";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import InformationCard from "../components/InformationCard";
import { Path } from "../routes/routePath";
import type { Error } from "../models/generic";

interface props {
  error: Error;
}
const ErrorView: FC<props> = ({ error }) => {
  const navigate = useNavigate();
  return (
    <Html fullscreen={true}>
      <InformationCard
        title={
          error.status == "UNAUTHENTICATED" ? "Session Expired" : "Access Denied"
        }
        description={
          error.status == "UNAUTHENTICATED"
            ? "Please sign in again to view this page."
            : "You don't have permission to view this page."
        }
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

export default ErrorView;
