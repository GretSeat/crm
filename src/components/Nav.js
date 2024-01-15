import logo from "../images/sample-logo.jpg";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/ticket")}>
          Ticket
        </div>
        <div className="icon" onClick={() => navigate("/")}>
          Home
        </div>
      </div>
    </nav>
  );
}

export default Nav;
