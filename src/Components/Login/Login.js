import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css'


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useState({ email: "", password: "" })
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
    setLoggedInUser(user)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = (data) => {
        if (data.email === "test@test.com" && data.password === "#2021dev") {
            const userInfo = { ...user }
            userInfo.email = data.email
            userInfo.password = data.password
            setUser(userInfo)
            history.replace(from);
        }
        else {
            alert("You aren't admin. Make sure you are admin using mail as test@test.com and password #2021dev")
        }
    }

    return (
        <div className="Margin-top d-flex justify-content-center">
            <div className="shadow p-5 bg-light field-width">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input name="email" className="form-control" placeholder="enter your email" ref={register} />
                    </div>
                    <div className="form-group">
                        <input name="password" className="form-control" placeholder="enter your password" ref={register} />
                    </div>
                    <div className="text-center">
                        <input value="Login" className="btn-style" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;