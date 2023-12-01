import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";


function Register(props) {
    let [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState({})

    const PATTERN = /^[a-zA-Z0-9]+$/;

    function fireSetUsername(e) {
        const val = e.target.value
        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...error, usernameErr: 'Никнейм может содержать только латинский буквы и цифры' })
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
        const inputName = e.target.name

        let errName = inputName == "password" ? "passwordErr" : "password2Err"

        if (val.length !== 0) {
            if (!PATTERN.test(val)) {
                setError({ ...error, [errName]: 'Пароль может содержать только латинский буквы и цифры' })
            } else {
                setError({ ...error, [errName]: '' })
            }
        }  else {
            setError({ ...error, [errName]: '' })
        }

        errName = inputName == "password" ? setPassword(val) : setPassword2(val)
    }

    pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
    return (
        <div>
            <div className="form-group">
                <div>
                    <input type="text" id="register-name-input" placeholder="Введите никнейм" />
                    <input type="email" id="register-email-input" placeholder="Электронная почта" />
                    
                </div>
                <div>
                    <input
                        id="register-pass-input" className="pass-input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Придумайте пароль"
                        name="password"
                    />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                    <p className="error">
                        {error.passwordErr}
                    </p>
                </div>
                <div>
                    <input
                        id="pass2-input"
                        type="password"
                        placeholder="Повторите пароль"
                        name="password"
                    />
                    <p className="error">
                        {error.password2Err}
                    </p>
                </div>
                <button className='войти'>Создать</button>
            </div>
        </div>
    );
}
export default Register;