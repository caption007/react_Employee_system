import React from 'react';

class EmployeeDelete extends React.cloneElement{
    delete(Id){
        let index=0;
        const employee =this.state.Employee;
        for(let i=0;i<employee.length;i++){
                if(employee[i].IdIsNext===Id){
                    break;
                }
            index=index+1;
        }
        employee.splice(index,1);
        this.setState({
            employee,
        })
    }
}

export default EmployeeDelete;