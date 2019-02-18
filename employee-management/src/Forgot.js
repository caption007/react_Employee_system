import React from'react';

class Forgot extends React.Component{

    forgot(){
        if(this.refs.ForgotName.value==="root"){
            alert("123456");
        }else{
            alert("name wrong! input agian");
            
        }
    }

    render(){
        return(
        <div>
            <p>If you Forgot your password plaese input your name</p>
            <input ref="ForgotName" type="text"></input>
            <input type="button" onClick={()=>this.forgot()} value="submt"></input>
            <p><a href="">back</a></p>
        </div>
    ) ;
    }
}

export default Forgot;