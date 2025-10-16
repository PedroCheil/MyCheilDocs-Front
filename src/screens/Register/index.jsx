import { useNavigate, data, Link } from "react-router-dom";
import React, {useEffect, useState} from "react";

import AssetLogin from "../../assets/SamsungDevices.jpg";
import Man from "../../assets/userImage/man.png";
import Woman from "../../assets/userImage/woman.png";
import userDefault from "../../assets/userImage/userDefault.png";
import axios from "axios";

import "./register.scss";
/* 
const userEmoji = [{

    "default": userDefault,
    "man" : Man,
    "woman" : Woman
}];
*/

function Register() {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState([]);
    const [selectedJob, setSelectedJob] = useState("");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        name_user: "",
        login_user: "",
        password_user: "",
        avatar_user: "",
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
        console.log(user);
        try {
            const res = await axios.post("http://localhost:5000/mycheil/user", user);
            setMessage("Usuario registrado com sucesso!");
            console.log(res.data);
            useNavigate("/feed");

        } catch (error) {
            setMessage("Erro ao registrar usuario");
            console.log(error);
        }
    }


    useEffect(() => {
        axios.get("http://localhost:5000/mycheil/job-position").then((res) => setJobTitle(res.data.jobs)).catch((error) => console.log(error));
        console.log(data)
        //console.log(jobTitle)
    }, []);

    //console.log(jobTitle)

    return(
        <div className="containerRegister">
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
                        required />

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
                            <option value="userDefault">Padrão</option>
                            <option value="woman">Mulher</option>
                            <option value="man">Homen</option>
                        </select>

                        <label htmlFor="job_position_fk">Job</label>
                        <select name="job_position_fk" 
                        value={user.job_position_fk}
                        onChange={handleChange}>
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