import React from 'react';
class Login extends React.Component {
    render() {
      return (
          <div id="content">
            <div className="Login-header">
                <p className="">Employyer Login</p>
            </div>
            <form>
                <div className="login-input-box">
                    <span ></span>
                    <input id="Account" type="text" placeholder="Please enter your Id"></input>
                </div>
                <div class="login-input-box">
                    <span ></span>
                    <input  id="Password" type="password" placeholder="Please enter your password">
                </input>
                </div>
            </form>
            
            <div class="login-button-box">
                <button >Login</button>
                
            </div>
            <div class="logon-box">
                <a href="#/EmployeeIndex">xiayiye</a>
                <a href="">Forgot?</a>
                <a href="">Register</a>
            </div>
          </div>
     );
    }
  }

  export default Login;