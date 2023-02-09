import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favourite from "./components/Favourite";

function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <div>
        <Link to={"/"}>
          {" "}
          <h3>HOME</h3>
        </Link>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
