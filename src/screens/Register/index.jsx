import { Link } from "react-router-dom";

import AssetLogin from "../../assets/SamsungDevices.jpg";
import Man from "../../assets/userImage/man.png";
import Woman from "../../assets/userImage/woman.png";
import userDefaulth from "../../assets/userImage/userDefaulth.png";

import "./register.scss";

function Register() {

    const userEmoji = [{
        "userDefaulth": userDefaulth,
        "man" : Man,
        "woman" : Woman
    }];

    return(
        <div className="containerRegister">
            <div className="containerImage">
                <img src={AssetLogin} alt="" />
            </div>
            <div className="containerFormRegister">
                <div className="form">
                    <form method="post" className="formRegister">
                        <label htmlFor="name">Nome do usuario</label>
                        <input type="text" name="name" placeholder="Nome de apresentacao" 
                        required
                        />

                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        name="email" 
                        placeholder="email@cheil.com"
                        required />

                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" 
                        placeholder="!Cheil123"
                        required
                        />

                        <label htmlFor="avatar">Avatar</label>
                        <select name="avatar">
                            <option value="userDefaulth">Padrão</option>
                            <option value="woman">Mulher</option>
                            <option value="man">Homen</option>
                        </select>

                        <label htmlFor="jobPosition">Job</label>
                        <select name="jobPosition">
                            <option value="">Account</option>
                            <option value="">Publisher</option>
                            <option value="">Gestão</option>
                            <option value="">UI/UX</option>
                            <option value="">PM</option>
                            <option value="">TI</option>
                            <option value="">RH</option>
                        </select>

                        <div className="buttonForm">
                            <button>Cadastrar</button>
                        </div>

                        <div className="containerDivider">
                            <div className="divider"></div>
                        </div>

                        <div className="containerLink">
                            <span>Ja tem conta? <Link to="/">
                            <b>click aqui</b></Link></span>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;