/**
 * Created by Sagar Singh on 4/13/2017.
 */

import React, {Component} from 'react';
import SideNavBar from './SideNavBar';
import ClassBanner from './ClassBanner';
import {Link} from 'react-router';
import ClassHome from './ClassHome';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import AddStudents from './AddStudents';
import Statistics from './Statistics';
import PastDiscussionResult from './PastDiscussionResult';
import Activity from './Activity';

// class ProfessorCDB extends Component{
//     render(){
//         return(
//             <div>
//                 <ClassBanner/>
//                 <SideNavBar/>
//                 <ul role = "nav">
//                     <li><Link to="/add">Add</Link></li>
//                     <li><Link to="/stats">Stats</Link></li>
//                 </ul>
//                 {this.props.children}
//             </div>
//
//         );
//     }
// }
// export default ProfessorCDB;
export default class ProfessorDashboard extends Component{
    constructor(){
        super();
        this.state = {
            show: false,
            searchString: "",
            filter: false
        }
    }

    handleAddStudentClick(){
        this.setState({
            show: true
        });
    }

    handleSearchStringChange(e){
        this.setState({
            searchString: e.target.value,
            filter: true
        });
    }

    render(){
        console.log(this.state.searchString);
        return(

            <div className="container-fluid text-center">
                <ClassBanner handleSearchString={this.handleSearchStringChange.bind(this)} handleAddStudent={this.handleAddStudentClick.bind(this)}/>
                <div className="row content">
                    <div className="col-sm-2 sidenav">
                        <SideNavBar/>

                        {/*<ul role = "nav">*/}
                    {/*<li><Link to="/add">Add</Link></li>*/}
                    {/*<li><Link to="/stats">Stats</Link></li>*/}
                    {/*<li><Link to="/past">Past Discussion Result</Link></li>*/}
                        {/*</ul>*/}

            </div>
            <div className="col-sm-8 text-left">
            <h1>Professor Class Dashboard</h1>
                <p className="well">{this.props.children}</p>
            </div>
                <div className="col-sm-2 sidenav">
                    <div className="well">
                        <p>
                            <ClassHome filter={this.state.filter} searchString={this.state.searchString} showAddStudent={this.state.show}/>
                        </p>
                    </div>
                    <div className="well">
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}