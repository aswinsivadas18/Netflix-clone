import React from 'react'
import './style.css'
import NavBar from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'

const Registerpage = () => {
    return (
        <div className='body'>
            <div class="main">
                <NavBar />
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <NavLink to='/' className='buttn'>Sign up</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registerpage
