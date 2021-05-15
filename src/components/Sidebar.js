import React from 'react';
import {NavLink,Link,Route,Switch,useRouteMatch} from 'react-router-dom';
import '../css/Sidebar.css';

function Sidebar() {
    //let { path, url } = useRouteMatch();
    return (
        <div className="sidebar">
            <div className="sidebar__links">
            
           <NavLink to="/dashboard" className="sidebar__link" ><p>Home</p></NavLink>
           <NavLink to="/dashboard/questionnaire" className="sidebar__link" activeClassName="active-dash"><p>Questionnaire</p></NavLink>
           <NavLink to="/dashboard/reports" className="sidebar__link" activeClassName="active-dash"><p>My reports</p></NavLink>
            </div>


           
           <Switch>
                <Route path="/dashboard/questionnaire">
                    <h1 style={{marginLeft:'300px'}}>Questionnaire</h1>
                </Route>
               
               <Route  path="/dashboard/reports">
                    <h1 style={{marginLeft:'300px'}}>Reports</h1>
               </Route>
               <Route  path="/dashboard">
                   <h1 style={{marginLeft:'300px'}}>Home</h1>
               </Route>
           </Switch>
        </div>
    )
}

export default Sidebar
