import React, { useState } from "react";
import './login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    function handleLogin(e) {
        console.log(email, password);
        e.preventDefault();

        const url = "http://localhost:3001/user/login";

        axios
            .post(url, {
                'email': email,
                'password': password,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.status === true) {
                    navigate('/HomePage')
                } else {
                    alert("User Login password not match")
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <>
            <nav class="nav">
                <img
                    src="/src/HomePage/img/logo.png"
                    alt="Bankist logo"
                    class="nav__logo"
                    id="logo"
                    designer="Jonas"
                    data-version-number="3.0"
                />
                <ul class="nav__links">
                    <li class="nav__item">
                        <a class="nav__link" href="/HomePage">Home</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#section--1">Features</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#section--2">Operations</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="#section--3">Testimonials</a>
                    </li>
                    <li class="nav__item">
                        <a class="nav__link" href="/">Logout</a>
                    </li>

                </ul>
            </nav>

            <div className="bg-img">
                <div class="container12">
                    <div className="row">
                        <div class="card">
                            <div class="card_title">
                                <h1>Login Account</h1>
                                <span>Do not have a account? Please Click <a href="/signup">Sign In</a></span>
                            </div>
                            <div class="form">
                                <form action="/register" method="post" onSubmit={handleLogin}>
                                    <input type="email" name="email" placeholder="Email" id="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} />
                                    <input type="password" name="password" placeholder="Password" id="password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }} />
                                    <button type="submit">Login Here</button>
                                </form>
                            </div>
                            <div class="card_terms">
                                <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;