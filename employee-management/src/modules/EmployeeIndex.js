import React from 'react';
import EmployeeAdd from './EmployeeAdd';

class EmployeeIndex extends React.Component{
    constructor(){
        super();
        this.state={
            Employee:[{
            }],
            id:0
        };
    }
    
    render(){
        const Employee=this.state.Employee;
        const Employees=Employee.map((employee,IdIsNext)=>{
            return(
                <tr key={IdIsNext}>
                    <td>{employee.IdIsNext}</td>
                    <td>{employee.First_Name}</td>
                    <td>{employee.Last_Name}</td>
                    <td>{employee.Sex}</td>
                    <td>{employee.Birthday}</td>
                    <td>{employee.Phone_Number}</td>
                    <td>{employee.Address}</td>
                    <td>{employee.Email}</td>
                    <td>{employee.Develpment}</td>
                    <td><button onClick={()=>this.EmployeeAdd(employee)}>Edit</button></td>
                    <td><button onClick={()=>this.delete(employee.IdIsNext)}>Delete</button></td>
                </tr>
            )
        })
        return(
        <div>
            <table border='5'>
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Sex</th>
                        <th>Birthday</th>
                        <th>Phone_Number</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Develpment</th>
                        <th>Options</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {Employees}
                </tbody>
            </table>
            <div>  
                <EmployeeAdd
                    onClick={()=>this.EmployeeAdd(null)}
                ></EmployeeAdd> 
                <button onClick={()=>this.EmployeeAdd(null)}>Add New Employee</button>
            </div>
        </div>
        );
    }

}

export default EmployeeIndex;