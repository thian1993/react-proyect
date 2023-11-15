import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BarraRutasPublic from "./ruteo/BarraRutasPublic";
import BarraRutasProtected from "./ruteo/BarraRutasProtected";
import { useAuth } from "./ruteo/AuthContext";

function App() {
  const { user } = useAuth();
  return (
    <div>
      <Router>{user ? <BarraRutasProtected /> : <BarraRutasPublic />}</Router>
    </div>
  );
}

export default App;
