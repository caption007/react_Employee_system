import React from 'react';

class EmployeeAdd  extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Employee:[{
            }],
            id:0
        };
    }

    EmployeeAdd(Id){
        const Employee=this.state.Employee;
        if(Id===null){
            const First_Name=document.getElementById('first_name').value;
            const Last_Name=document.getElementById('last_name').value;
            const Sex=document.getElementById('add-gender').value;
            const Birthday=document.getElementById('add-birthday').value;
            const Phone_Number=document.getElementById('add-phonenumber').value;
            const Address=document.getElementById('add-address').value;
            const Email=document.getElementById('add-email').value;
            const Develpment=document.getElementById('add-department').value;
            const employees={IdIsNext: this.state.id ,First_Name:First_Name,Last_Name:Last_Name,Sex:Sex,Birthday:Birthday,Phone_Number:Phone_Number,Address:Address,Email:Email,Develpment:Develpment};
            this.setState({
                Employee:Employee.concat([               
                    employees,
                    ]),
                    id:this.state.id+1
            });
        }
        else{
            document.getElementById('first_name').value=Id.First_Name;
            document.getElementById('last_name').value=Id.Last_Name;
            document.getElementById('add-gender').value=Id.Sex;
            document.getElementById('add-birthday').value=Id.Birthday;
            document.getElementById('add-phonenumber').value=Id.Phone_Number;
            document.getElementById('add-address').value=Id.Address;
            document.getElementById('add-email').value=Id.Email;
            document.getElementById('add-department').value=Id.Develpment;
        }
        }
        render(){
            return(
                <div>
                    <from>
                        <p>
                            <label>Firstname:</label>
                            <input placeholder="firstname" id='first_name'></input>
                        </p>
                        <p>
                            <label>lastname:</label>
                            <input placeholder="lastname" id='last_name'></input>
                        </p>
                        <p>
                            <label>gender</label>
                                <select id='add-gender' name="gender">
                                    <option>M</option>
                                    <option>F</option>
                            </select>
                        </p>
                        <p>
                            <label>birthday</label>
                            <input type="date" id='add-birthday' placeholder="New birthday" name="birthday"></input>
                        </p>
                        <p>
                            <label>phonenumber</label>
                            <input type="number" id='add-phonenumber' placeholder="New phonenumber" name="phonenumber"></input>
                        </p>
                        <p>
                            <label>address</label>
                            <input type="text" id='add-address' placeholder="New address" name="address"></input>
                         </p>
                         <p>
                             <label>email</label>
                            <input type="email" id='add-email' placeholder="New email" name="email"></input>
                        </p>
                        <p>
                             <label>department</label>
                                <select id='add-department' name="department">
                                    <option>develop</option>
                                    <option>text</option>
                                    <option>manager</option>
                                 </select>
                        
                        </p>
                        <button onClick={()=>this.props.onClick()}>add New Employee</button>
                    </from>
            </div>
            )
        }
}

export default EmployeeAdd;