import { useNavigate } from "react-router-dom";
import "./logoutButton.scss";

function LogoutButton(){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/");
    }
    return(
        <button onClick={handleLogout} className="buttonLogout">Sair</button>
    );
}

export default LogoutButton;