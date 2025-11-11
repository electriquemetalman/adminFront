import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div class="login-popup">
        <form id="authForm" class="login-popup-container">
            <div class="login-popup-title">
                <h2 id="formTitle">Login</h2>
            </div>
            <div class="login-popup-inputs">
                <input type="email" name="email" id="emailInput" placeholder="Enter your email" required />
                <input type="password" name="password" id="passwordInput" placeholder="Enter your password" required />
            </div>
            <button type="submit" class="login-popup-btn" id="submitBtn">Login</button>
            <div class="login-popup-condition">
                <input type="checkbox" id="tosCheck" required />
                <label for="tosCheck">I agree to the Terms of Service and Privacy Policy</label>
            </div>
        </form>
    </div>
  )
}

export default Login
