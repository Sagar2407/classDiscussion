/**
 * Created by yashw on 17-03-2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ProfessorCDB from './components/professor_class_dashboard/ProfessorCDB';
import AddStudents from '../js/components/professor_class_dashboard/AddStudents';
import Statistics from '../js/components/professor_class_dashboard/Statistics';
import PastDiscussionResult from '../js/components/professor_class_dashboard/PastDiscussionResult';

//ReactDOM.render(<ProfessorCDB/>,document.getElementById("root"));

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path = "/" component = {ProfessorCDB}>
        <Route path = {"/add"} component = {AddStudents} />
        <Route path = {"/stats"} component = {Statistics} />
        <Route path = {"/past"} component = {PastDiscussionResult} />
    </Route>
    </Router>), document.getElementById('root'));