/**
 * Created by yashw on 06-04-2017.
 */
import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class ProfessorAddClass extends Component{
    constructor(){
        super();
        this.state = {
              className: "",
              classTime: ""
        };
    }


    handleAddClass(){
        let classObj = this.state;
        this.props.handleAddClass(classObj);
        this.setState({
            className: "",
            classTime: ""
        })
    }

    handleClassNameChange(e){
        this.setState({
            className: e.target.value
        });
    }

    handleClassTimeChange(e){
        this.setState({
            classTime: e.target.value
        });
    }

    render(){
        return(
            <Modal show = {this.props.showAC}>
                <Modal.Body>
                    <label>Class Name: </label> <input onChange={this.handleClassNameChange.bind(this)} className="input-sm" type="text"/>
                    <label>Class Time: </label> <input onChange={this.handleClassTimeChange.bind(this)} className="input-sm" type="text"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="default" onClick={this.handleAddClass.bind(this)}>Add Class</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
