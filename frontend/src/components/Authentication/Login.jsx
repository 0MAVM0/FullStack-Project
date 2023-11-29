import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";
import { axiosCall, accessTokenIsValid, refreshTokenLS } from "../../conf/axios.js";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../conf/common.js";
import { toast } from 'react-toastify';


function Login(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({})

    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
            'username': username,
            'password': password
        }
        const data = await axiosCall('api/token/create/', user, null, "POST")
        console.log(data)
        if (data.response?.status) {
            toast.error("Incorrect credentials", { toastId: '1' })
        }
        localStorage.clear()
        localStorage.setItem(ACCESS_TOKEN_KEY, data.access)
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh)
    };

    const PATTERN = /^[a-zA-Z0-9]+$/;
    function fireSetUsername(e) {
        const val = e.target.value

        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...error, usernameErr: 'Никнейм может содержать только латинский буквы и цыфры' })
            } else {
                setError({ ...error, usernameErr: '' })
            }
        } else {
            setError({ ...error, usernameErr: '' })
        }

        setPassword(e.target.value)
    }
    function fireSetPassword(e) {
        const val = e.target.value

        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...error, passwordErr: 'Пароль может содержать только латинский буквы и цыфры' })
            } else {
                setError({ ...error, passwordErr: '' })
            }
        }  else {
            setError({ ...error, usernameErr: '' })
        }

        setPassword(e.target.value)
    }


    return (
        <div>
            <form className="form-group" onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        id="login-name-input"
                        onChange={fireSetUsername}
                        placeholder="Никнейм или электронная почта"
                    />
                    <p className="error">
                        {error.usernameErr}
                    </p>
                </div>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="login-pass-input"
                        onChange={fireSetPassword}
                        className="pass-input"
                        placeholder="Пароль"
                    />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                    <p className="error">
                        {error.passwordErr}
                    </p>
                </div>
                <p className='помошник'>
                    <span>Забыли пароль?</span>
                    <a className='восстановить' href='#'>Восстановить</a>
                </p>
                <button className='войти'>Войти</button>
            </form>
        </div>
    );
}

export default Login;
