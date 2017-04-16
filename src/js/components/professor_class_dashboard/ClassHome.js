/**
 * Created by Sagar Singh on 4/13/2017.
 */

import React,{Component} from 'react';
import {Well, Button} from 'react-bootstrap';
import AddStudents from './AddStudents';

export default class ClassHome extends Component{
    constructor(props){
        super(props);
        this.state= {
            studentArray: [
                {
                    studentUid: "u1111111",
                    studentName: "Mayank"
                },
                {
                    studentUid: "u2222222",
                    studentName: "Aditya"
                },
                {
                    studentUid: "u3333333",
                    studentName: "Yash"
                },
                {
                    studentUid: "u4444444",
                    studentName: "Sagar"
                }
                ],
            showAS : this.props.showAddStudent
        }
    }

    handleAddStudentButton(studentObj){
        let newStudentArray = [];
        newStudentArray = this.state.studentArray;
        newStudentArray.push(studentObj);
        this.setState({
            showAS: false,
            studentArray: newStudentArray
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            showAS: nextProps.showAddStudent
        })
    }



    handleStudentDisplay(){
        let searchString = this.props.searchString;
        if(this.props.filter){
            console.log(this.props.filter);
            let filteredStudent = this.state.studentArray.filter(
                function checkIfSearchStringMatchesStudent(studentObj){
                    return studentObj.studentName.includes(this);
                }, searchString);
            return filteredStudent.map(
                (studentDetails, id)=> <div key={id}><Button bsStyle="default" bsSize="large">{studentDetails.studentName}<br/>{studentDetails.studentUid}</Button><br/><br/></div>
            )
        }
        else
        {
            return this.state.studentArray.map(
                (studentDetails, id)=> <div key={id}><Button bsStyle="default" bsSize="large">{studentDetails.studentName}<br/>{studentDetails.studentUid}</Button><br/><br/></div>
            )
        }
    }

    render(){
        return(
            <Well>
                {this.handleStudentDisplay()}
                <AddStudents showAS={this.state.showAS} handleAddStudent={this.handleAddStudentButton.bind(this)}/>
            </Well>
        );
    }
}
