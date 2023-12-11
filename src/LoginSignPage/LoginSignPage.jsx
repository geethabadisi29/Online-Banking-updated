import React from 'react'
import './LoginSignPage.css';
import { NavLink } from 'react-router-dom';


function LoginSignPage() {
    return (
        
        <div>
            <>
                <header class="header">
                    <nav class="nav">
                        <img
                            src="src/HomePage/img/banking-logo.png"
                            alt="Bankist logo"
                            class="nav__logo"
                            id="logo"
                            designer="Jonas"
                            data-version-number="3.0"
                        />
                        <span className="banking-title">Banking System</span>
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
                    <div className="bg-img1">
                   <div class="container12"> 
                    <div className="row">
                    <div class="btn-btn-btn">

                        <NavLink to='/login'>

                            <button>Login</button>
                        </NavLink>
                        <NavLink to='/signup'>
                        <button>SignUp</button>
                        </NavLink>

                    </div>
                    </div>
                    </div>

        </div>
                </header>
            </>
        </div>
        
    )
}

export default LoginSignPage;
