import { useNavigate, Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import AlertMessage from "../../components/alertMessage";
import AssetLogin from "../../assets/SamsungDevices.jpg";
import axios from "axios";
import "./register.scss";

function Register() {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState([]);
    const [message, setMessage] = useState({
        type: "",
        message: "",
        visible: false
    });
    const [user, setUser] = useState({
        name_user: "",
        login_user: "",
        password_user: "",
        avatar_user: "userDefault",
        job_position_fk: ""
    })


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/mycheil/user", user);
            navigate("/login");

        } catch (error) {
            setMessage({
                type: "error",
                message: error.response.data.errors[0],
                visible: true
            })
        }
    }   

    useEffect(() => {
        axios.get("http://localhost:5000/mycheil/job-position").then((res) => setJobTitle(res.data.jobs)).catch((error) => console.log(error));
    }, []);


    return(
        <div className="containerRegister">
            {message.visible && (
                            <AlertMessage 
                                typeAlert={message.type}
                                messageAlert={message.message}
                                durationTime={3000}
                                onClose={() => setMessage({...message, visible: false})}
                            />
                        )}
            <div className="containerImage">
                <img src={AssetLogin} alt="" />
            </div>
            <div className="containerFormRegister">
                <div className="form">
                    <form method="post" className="formRegister" onSubmit={handleSubmit}> 
                        <label htmlFor="name_user">Nome do usuario</label>
                        <input type="text" 
                        name="name_user" 
                        placeholder="Nome de apresentacao"
                        value={user.name_user}
                        onChange={handleChange} 
                        required
                        />

                        <label htmlFor="login_user">Email</label>
                        <input type="text" 
                        name="login_user" 
                        placeholder="email@cheil.com"
                        value={user.login_user}
                        onChange={handleChange}
                        required
                         />

                        <label htmlFor="password_user">Senha</label>
                        <input type="password" 
                        name="password_user" 
                        placeholder="!Cheil123"
                        value={user.password_user}
                        onChange={handleChange}
                        required
                        />

                        <label htmlFor="avatar_user">Avatar</label>
                        <select name="avatar_user" onChange={handleChange} value={user.avatar_user}>
                            <option value="userDefault">👤 Padrão</option>
                            <option value="woman">👩 Mulher</option>
                            <option value="man">👨 Homem</option>
                        </select>

                        <label htmlFor="job_position_fk">Job</label>
                        <select name="job_position_fk" 
                        value={user.job_position_fk}
                        onChange={handleChange}>
                            <option value="">Selecione um cargo</option>
                            {jobTitle.map((job) => (
                                <option key={job._id} value={job._id}>{job.name_job}
                                </option>
                            ))
                            }
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