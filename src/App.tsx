import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Path } from "./routes/routePath";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.initPath} element={<LoginPage />} />
        <Route path={Path.dashboardPath} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
