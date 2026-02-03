import { useNavigate } from "react-router-dom";
import InformationCard from "../components/InformationCard";
import { Path } from "../routes/routePath";

export default function RedirectPage() {
  const navigate = useNavigate();
  return (
    <InformationCard
      title="Requried Login"
      description="You must be logged in to view to page"
      footer="Redirect to home page"
    >
      <button
        className="mt-8 w-full rounded-full px-4 py-[4px] bg-blue-600 text-xl font-bold text-white cursor-pointer"
        onClick={() => {
          navigate(Path.initPath);
        }}
      >
        OK
      </button>
    </InformationCard>
  );
}
