import React from 'react';
import EmployeeAdd from './EmployeeAdd';
import SearchInput from './SearchInput';
import'./index.css';

class EmployeeIndex extends React.Component{
    constructor(){
        super();
        this.state={
            Employee:[
                {
                IdIsNext:1,
                First_Name:"rqoot",
                Last_Name:"lsa",
                Sex:"M",
                Birthday:"1900-01-01",
                Phone_Number:1234567,
                Address:"sd2dddd",
                Email:"1233@qq.com",
                Develpment:"text"
                },
                {
                IdIsNext:2,
                First_Name:"root",
                Last_Name:"lsa",
                Sex:"M",
                Birthday:"1900-01-02",
                Phone_Number:21234567,
                Address:"sd2dddd",
                Email:"1233@qq.com",
                Develpment:"develpment"
                }
            ],
            isShow:false,
            editFlag:false,
            editData:null,
            id:3,
            IdIsNext:3,
            col:[{
                colname:"IdIsNext",
                searchkeys:"",
                datatype:"number",
            },
            {
                colname:"First_Name",
                searchkeys:"",
                datatype:"string",               
            },
            {
                colname:"Last_Name",
                searchkeys:"",
                datatype:"string",              
            },
            {
                colname:"Sex",
                searchkeys:"",
                datatype:"string",             
            },
            {
                colname:"Birthday",
                searchkeys:"",
                datatype:"string",             
            },
            {
                colname:"Phone_Number",
                searchkeys:"",
                datatype:"number",             
            },
            {
                colname:"Address",
                searchkeys:"",
                datatype:"string",             
            },
            {
                colname:"Email",
                searchkeys:"",
                datatype:"string",               
            },
            {
                colname:"Develpment",
                searchkeys:"",
                datatype:"string",             
            }
        ],
        sortOrder:{
            listName:'IdIsNext',
            order:"ASC"
        },
        pageSize:3,
        courrentPage:1
        };
    }


    addEmployee(e){
        const Employee=this.state.Employee;
        this.setState({
            Employee:Employee.concat(e),
            IdIsNext:this.state.id+1,
            id:this.state.id+1
        }
        );
        
    }

    showSearchInput(){
        return this.state.col.map(col=>{
            return(
                <td>
                    <SearchInput
                        searchlist={col.colname}
                        search={(colname,searchkeys)=>this.search(colname,searchkeys)}
                    />
                </td>
            )
        })
    }

    showEmployee(){
        let seachResult=this.state.Employee;
        this.state.col.forEach(function(searchCondition){
           seachResult=seachResult.filter(emp=>emp[searchCondition.colname].toString().indexOf(searchCondition.searchkeys)!==-1);
        });
        const Employees=seachResult.map((employee,IdIsNext)=>{
            return(
                <tr>
                    <td>{employee.IdIsNext}</td>
                    <td>{employee.First_Name}</td>
                    <td>{employee.Last_Name}</td>
                    <td>{employee.Sex}</td>
                    <td>{employee.Birthday}</td>
                    <td>{employee.Phone_Number}</td>
                    <td>{employee.Address}</td>
                    <td>{employee.Email}</td>
                    <td>{employee.Develpment}</td>
                    <td><button onClick={()=>this.showFrom(employee.IdIsNext)}>Edit</button>
                    <button onClick={()=>this.delete(employee.IdIsNext)}>Delete</button></td>
                </tr>
            )
        })
        const currentEmployee=this.paging(Employees);
        return currentEmployee;
    }

    paging(Employees){
        return(Employees.slice(0+(this.state.courrentPage-1)*this.state.pageSize,0+(this.state.courrentPage-1)*this.state.pageSize+this.state.pageSize));
    }

    editEmployee(e){
        const result=this.state.Employee.map(emp=>emp.IdIsNext===e.IdIsNext?e:emp);
        this.setState({
            Employee:result
        })
    }

    showFrom(id){
        if(this.state.isShow){
            alert("save data");
        }else{
            let editData=null;
            let editFlag=false;
            if(id){
                editData=this.state.Employee.find(emp=>emp.IdIsNext===id)
                editFlag=true;
            }
            this.setState({
                isShow:true,
                editFlag:editFlag,
                editData:editData
            });
        }
            
    }

    close(){
        this.setState({
            isShow:false
        });
    }

    search(colname,searchkeys){
        const searchCondition={
            colname:colname,
            searchkeys:searchkeys,
            datatype:this.state.col.find(condition=>condition.colname===colname).datatype
        }
        const index=this.state.col.findIndex(condition=>condition.colname===colname);
        const result=this.state.col;
        result.splice(index,1,searchCondition)
        this.setState({
            col:result
        });
    }
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

    sort(listName){
        let employees=this.state.Employee;
        let sortOrder=this.state.sortOrder;
        this.state.col.find(condition=>condition.colname===listName).datatype==="number" ? employees.sort((a,b)=>a[listName]-b[listName]) : employees.sort((a,b)=>a[listName].localeCompare(b[listName]));
        if(sortOrder.listName!==listName){
            sortOrder.order="DESC";
            sortOrder.listName=listName;
        }
        if(sortOrder.order==="ASC"){
            employees.reverse();
            sortOrder.order="DESC";
        }else{
            sortOrder.order="ASC";
        }
        this.setState({
            Employee:employees,
            sortOrder:sortOrder
        })
    }

    componentWillMount(){
        if(!sessionStorage.getItem("Account")){
            this.props.history.push(`/`);
        }
    }
    

    logOut(){
        sessionStorage.removeItem("Account");
        this.props.history.push(`/`);
    }

    changCurrentPage(num){
        const nextPage=this.state.courrentPage+num;
        const pageSize=this.state.pageSize;
        if(nextPage>0&&(nextPage-1)*pageSize<this.state.Employee.length){
            this.setState({
                courrentPage:this.state.courrentPage+num
            });
        }
    }
    
    render(){ 
        return(
        <div>
            hello!{sessionStorage.getItem("Account")}<input type="button" value="LogOut" onClick={()=>this.logOut()}></input>
            <table border='3' cellSpacing="0">
                <thead >
                    <tr>
                        <th width="100" onClick={()=>this.sort("IdIsNext")}>IdIsNext</th>
                        <th width="200" onClick={()=>this.sort("First_Name")}>First_Name</th>
                        <th width="200" onClick={()=>this.sort("Last_Name")}>Last_Name</th>
                        <th width="200" onClick={()=>this.sort("Sex")}>Sex</th>
                        <th width="200" onClick={()=>this.sort("Birthday")}>Birthday</th>
                        <th width="200" onClick={()=>this.sort("Phone_Number")}>Phone_Number</th>
                        <th width="200" onClick={()=>this.sort("Address")}>Address</th>
                        <th width="200" onClick={()=>this.sort("Email")}>Email</th>
                        <th width="200" onClick={()=>this.sort("Develpment")}>Develpment</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showEmployee()}
                </tbody>
                <tr>
                    {this.showSearchInput()}
                    <td><input type='button' value="prev" onClick={()=>this.changCurrentPage(-1)}></input><input type='button' value="next" onClick={()=>this.changCurrentPage(1)}></input>courrentPage:{this.state.courrentPage}</td>
                </tr>
                
            </table>
            <input type="button" value='Add' onClick={()=>this.showFrom(null)}></input>
            {this.state.isShow?
                <EmployeeAdd
                    IdIsNext={this.state.IdIsNext}
                    editFlag={this.state.editFlag}
                    editData={this.state.editData}
                    addemployee={(e)=>this.addEmployee(e)}
                    editemployee={(e)=>this.editEmployee(e)}
                    close={()=>this.close()}
            />:null}
        </div>
        );
    }

}

export default EmployeeIndex;