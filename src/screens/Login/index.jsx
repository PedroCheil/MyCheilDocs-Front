import AssetLogin from '../../assets/SamsungDevices.jpg';
import './login.scss'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState(null);
    const [errorRequest, setErrorRequest] = useState('');
    const [errorPassword, setErrorPassword] = useState(true);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/mycheil/login', {
               login_user : login,
                password_user: password
            });

            const saveToken = res.data.token;
            setToken(saveToken);
            localStorage.setItem('token', saveToken);
            setMessage('Logado com sucesso')

            navigate('/feed');
            
        } catch (error) {
            console.error('Erro ao authenticar', error);
            setMessage('Email ou senha invalidos');
        }
    }
    
    return(
        <div className="containerLogin">
            <div className="containerImage">
                
                <img src={AssetLogin} alt="Imagens animado do mycheil docs" />
            </div>
            <div className="containerForm">
                <div className="formLogo">
                </div>
                <div className="form">
                    <form method="get" className="formLogin" onSubmit={handleLogin}>
                        <label htmlFor='email'>Usuario</label>
                        <input type="text" name="email" placeholder="email@cheil.com"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        />
                        <label htmlFor="senha">Senha</label>
                        <input type="text" name="senha" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />    
                        <span>*Esqueceu a senha?</span>
                        
                        <div className="buttonForm">
                            <button>Logar</button>    
                        </div>    

                        { message && (
                                <p>{message}</p>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
        
    )
}

// <img src="" alt="Logo do myCheilDocs" />

export default Login;