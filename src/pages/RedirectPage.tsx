import { useNavigate } from "react-router-dom";
import { Path } from "../routes/routePath";

export default function RedirectPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black select-none">
      <div className="border-2 bg-white rounded-xl px-24 py-16 text-center border-detail custom-box-shadow on-hover">
        <h1 className="text-2xl font-bold mb-5">Requried Login</h1>
        <h2>You must be logged in to view to page</h2>
        <button
          className="mt-8 w-full rounded-full px-4 py-[4px] bg-blue-600 text-xl font-bold text-white cursor-pointer"
          onClick={() => {
            navigate(Path.initPath);
          }}
        >
          OK
        </button>
        <h3 className="mt-2 text-sm text-slate-600">Redirect to home page</h3>
      </div>
    </div>
  );
}
