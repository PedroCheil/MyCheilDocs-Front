import AssetLogin from '../../assets/SamsungDevices.jpg';
import './login.scss'
import React, {useState} from 'react'

function Login() {
    const [errorPassword, setErrorPassword] = useState(true);
    
    return(
        <div className="containerLogin">
            <div className="containerImage">
                <img src={AssetLogin} alt="Imagens animado do mycheil docs" />
            </div>
            <div className="containerForm">
                <div className="formLogo">
                    <img src="" alt="Logo do myCheilDocs" />
                </div>
                <div className="form">
                    <form method="get" className="formLogin">
                        <label htmlFor='email'>Usuario</label>
                        <input type="text" name="email" placeholder="email@cheil.com"/>
                        <label htmlFor="senha">Senha</label>
                        <input type="text" name="senha" placeholder="Password"/>    
                        <span>*Esqueceu a senha?</span>
                        
                        <div className="buttonForm">
                            <button>Logar</button>    
                        </div>    
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login;