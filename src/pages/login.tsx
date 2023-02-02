import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../component/logo';
import "../style/login.scss";
import pablo from "../assets/pablo-sign-in 1.png";


const Login = () => {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [isVisible, setIsvisible] = useState(false); 

    const showPassword = () => {
        if(isVisible){
            setIsvisible(false)
        }else{
            setIsvisible(true);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const loginClick = () => {
        navigate('/dashboard')
    }

    useEffect(() => {
        document.title = 'Login';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return(
        <div className='content'>
            <div className='login-left-div'>
                <div className='login-left-mid'>
                    <div className='logo-div'><Logo /></div>
                    <img className="pablo" alt='pablo sign in' src={pablo}/>
                </div>
            </div>

            <div className='login-right-div'>
                <div className="form-div">
                    <h1 className='welcome-text'>Welcome!</h1>
                    <p className='details-text'>Enter details to login.</p>

                    <form className='form-form' onSubmit={(e) => handleSubmit(e)}>
                        <input className="input-field text-field" 
                            value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Email'/>

                        <div className='password-div'>
                            <input className="input-field" 
                                value={password} onChange={(e) => setPassword(e.target.value)} type={isVisible ? 'text' : 'password'} placeholder='Password'/>
                            <button className='text-input-button' onClick={showPassword}>SHOW</button>
                        </div>

                        <button className='text-button' >FORGOT PASSWORD?</button>

                        <input disabled={username.length < 3 && password.length<3} type='submit' value='LOG IN' className='login-button' onClick={loginClick}></input>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login; 