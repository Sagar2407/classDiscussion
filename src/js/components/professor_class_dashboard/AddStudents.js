/**
 * Created by Sagar Singh on 4/13/2017.
 */

import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class AddStudents extends Component{
    constructor(){
        super();
        this.state = {
            studentUid: "",
            studentName: ""
        };
    }


    handleAddStudent(){
        let studentObj = this.state;
        this.props.handleAddStudent(studentObj);
        this.setState({
            studentUid: "",
            studentName: ""
        })
    }

    handleStudentNameChange(e){
        this.setState({
            studentName: e.target.value
        });
    }

    handleStudentIdChange(e){
        this.setState({
            studentUid: e.target.value
        });
    }

    render(){
    console.log("Add Student called..")
        return(
            <Modal show = {this.props.showAS}>
                <Modal.Body>
                    <label>Student Id: </label> <input onChange={this.handleStudentIdChange.bind(this)} className="input-sm" type="text"/>
                    <label>Student Name: </label> <input onChange={this.handleStudentNameChange.bind(this)} className="input-sm" type="text"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="default" onClick={this.handleAddStudent.bind(this)}>Add Student</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}