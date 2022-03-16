import {Link} from 'react-router-dom';
import "./header.css";

export default function Header() {
  var axiosConfig = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  };
  
  return (
    <div className="sidebar">
      <div>

      </div>

      <Link to="/">Dashboard</Link>
      <Link to="/perfil">Perfil</Link>
      <a>
        Sair
      </a>

    </div>
  );
}