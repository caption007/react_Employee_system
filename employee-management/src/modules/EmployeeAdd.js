import React from 'react';

class EmployeeAdd  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Employee:  props.editFlag ? props.editData : {
                    IdIsNext:props.IdIsNext,
                    First_Name:"",
                    Last_Name:"",
                    Sex:"",
                    Birthday:"",
                    Phone_Number:null,
                    Address:"",
                    Email:"",
                    Develpment:""
                }
            };
    }
        changeEmployee(){
            if(this.state.Employee.First_Name!==""){
                this.props.editFlag? this.props.editEmployee(this.state.Employee) : this.props.addEmployee(this.state.Employee);
                this.props.close();
            }
            else{
                alert("you should complete the form!")
            }
        }

        onChangeValue(key,reg,span,e){
            if(reg){
                if(!reg.test(e.target.value)&&e.target.value!==""){
                    this.refs[span].style.display="block";
                    this.refs.saveButton.disabled="disabled";
                }
                else{
                    this.refs[span].style.display="none";
                    this.refs.saveButton.disabled=null;
                }
            }
            let Employee=this.state.Employee;
            Employee[key]=e.target.value;
            this.setState({Employee:Employee});
        }

        render(){
            return(
                <div>
                    <from>
                        <p>
                            <label>Firstname:</label>
                            <input placeholder="firstname"  value={this.state.Employee.First_Name} onChange={(e)=>this.onChangeValue("First_Name",/^[a-zA-Z]+$/,"First_NameValidation",e)}></input>
                            <span ref="First_NameValidation" className="validationSpan" >validation only input character</span><br/>
                        </p>
                        <p>
                            <label>lastname:</label>
                            <input placeholder="lastname" value={this.state.Employee.Last_Name} onChange={(e)=>this.onChangeValue("Last_Name",/^[a-zA-Z]+$/,"Last_NameValidation",e)}></input>
                            <span ref="Last_NameValidation" className="validationSpan" >validation only input character</span><br/>
                        </p>
                        <p>
                            <label>gender</label>
                                <select value={this.state.Employee.Sex} onChange={(e)=>this.onChangeValue("Sex",null,null,e)}>
                                    <option></option>
                                    <option>M</option>
                                    <option>F</option>
                            </select>
                        </p>
                        <p>
                            <label>birthday</label>
                            <input type="date"  placeholder="New birthday" value={this.state.Employee.Birthday} onChange={(e)=>this.onChangeValue("Birthday",null,null,e)}></input>
                        </p>
                        <p>
                            <label>phonenumber</label>
                            <input type="number"  placeholder="New phonenumber"value={this.state.Employee.Phone_Number} onChange={(e)=>this.onChangeValue("Phone_Number",/^.{11,11}$/,"Phone_NumberValidation",e)}></input>
                            <span ref="Phone_NumberValidation" className="validationSpan" >validation need input 11 digits</span><br/>
                        </p>
                        <p>
                            <label>address</label>
                            <input required type="text"  placeholder="New address" value={this.state.Employee.Address}onChange={(e)=>this.onChangeValue("Address",null,null,e)}></input>
                         </p>
                         <p>
                             <label>email</label>
                            <input type="email"  placeholder="New email"value={this.state.Employee.Email}onChange={(e)=>this.onChangeValue("Email",null,null,e)}></input>
                        </p>
                        <p>
                             <label>department</label>
                                <select  name="department" value={this.state.Employee.Develpment}onChange={(e)=>this.onChangeValue("Develpment",null,null,e)}>
                                    <option></option>
                                    <option>develop</option>
                                    <option>text</option>
                                    <option>manager</option>
                                 </select>
                        
                        </p>
                        <input type="button" ref="saveButton" value="save" onClick={()=>this.changeEmployee()}></input>
                        <input type="button" value="close" onClick={()=>this.props.close()}></input>
                    </from>
            </div>
            )
        }
}

export default EmployeeAdd;