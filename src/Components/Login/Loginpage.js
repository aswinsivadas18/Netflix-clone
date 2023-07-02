import React from 'react'
import './style.css'
import NavBar from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'

const Loginpage = () => {
    return (
        <div className='body'>
            <div class="main">
                <NavBar />
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="login">
                    <form>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <NavLink to='/Main' className='buttn'>Login</NavLink>  <br /><br />
                        <NavLink to='/register'className='buttn'>Sign up</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Loginpage
