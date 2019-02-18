import React from 'react';

class Login extends React.Component {

    validation(){
        if(this.refs.Account.value==="root"&&this.refs.Password.value==="123456"){
            sessionStorage.setItem("Account","root");
            this.props.history.push(`/EmployeeIndex`);
        }else{
            this.props.history.push(`/`);
        }
    }

    render() {

      return (
            <div id="content">
                <div className="Login-header">
                    <p className="">Employer Login</p>
                </div>
                
                <form>
                    <div className="login-input-box">
                        <span ></span>
                        <input ref="Account" type="text" placeholder="Please enter your Id"></input>
                    </div>
                    <div class="login-input-box">
                        <span ></span>
                        <input  ref="Password" type="password" placeholder="Please enter your password">
                    </input>
                    </div>
                </form>
                
                <div class="login-button-box">
                    <button onClick={()=>this.validation()}>Login</button>
                    
                </div>
                
                <div class="logon-box">
                    <a href="#/Forgot">Forgot?</a>
                    <a href="/">Register</a>
                </div>
            </div>
            );
        }
  }

  export default Login;