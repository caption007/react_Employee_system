import React from 'react';
import ReactDOM from 'react-dom';
import './file.css';
import {BrowserRouter as Router ,Route ,Link,Switch,HashRouter} from 'react-router-dom';
import Login from'./Login';
import EmployeeIndex from'./modules/EmployeeIndex';
import EmployeeAdd from './modules/EmployeeAdd';

ReactDOM.render((
    <Router>
        <HashRouter>
            <Switch>
                <Route exact  path="/" component={Login}/>
                <Route exact  path="/EmployeeIndex" component={EmployeeIndex}/>
                <Route exact path = "/EmployeeAdd" component = {EmployeeAdd}></Route>
            </Switch>
        </HashRouter>
    </Router>
    ), document.getElementById('root')
);