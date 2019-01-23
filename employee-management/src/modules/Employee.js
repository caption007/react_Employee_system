import React from 'react';

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Employee:[{
            }],
            id:0
        };
    }
   render() {return(<tr key={IdIsNext}>
                    <td>{this.props.IdIsNext}</td>
                    <td>{this.props.First_Name}</td>
                    <td>{this.props.Last_Name}</td>
                    <td>{this.props.Sex}</td>
                    <td>{this.props.Birthday}</td>
                    <td>{this.props.Phone_Number}</td>
                    <td>{this.props.Address}</td>
                    <td>{this.props.Email}</td>
                    <td>{this.props.Develpment}</td>
                    <td><button onClick={()=>this.EmployeeAdd(employee)}>Edit</button></td>
                    <td><button onClick={()=>this.delete(employee.IdIsNext)}>Delete</button></td>
   </tr>)}
}
export default Employee;