/**
 * Created by yashw on 06-04-2017.
 */
import React,{Component} from 'react';
import {Well, Button} from 'react-bootstrap';
import ProfessorAddClass from './ProfessorAddClass';

export default class ProfessorHome extends Component{
    constructor(props){
        super(props);
        this.state= {
            classArray: [
                {
                    className: "IS-6465-001",
                    classTime: "6pm - 10pm"
                },
                {
                    className: "IS-6565-002",
                    classTime: "2pm - 5pm"
                },
                {
                    className: "IS-7465-003",
                    classTime: "6pm - 9pm"
                },
                {
                    className: "IS-6665-004",
                    classTime: "3pm - 7pm"
                },
                {
                    className: "IS-6465-005",
                    classTime: "6pm - 9pm"
                }
            ],
            showAC : this.props.showAddClass
        }
    }

    handleAddClassButton(classObj){
        let newClassArray = [];
        newClassArray = this.state.classArray;
        newClassArray.push(classObj);
        this.setState({
            showAC: false,
            classArray: newClassArray
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            showAC: nextProps.showAddClass
        })
    }



    handleClassesDisplay(){
        let searchString = this.props.searchString;
        if(this.props.filter){
            console.log(this.props.filter);
            let filteredClasses = this.state.classArray.filter(
                function checkIfSearchStringMatchesClass(classObj){
                    return classObj.className.includes(this);
                }, searchString);
            return filteredClasses.map(
                (classDetails, id)=> <div key={id}><Button bsStyle="default" bsSize="large">{classDetails.className}<br/>{classDetails.classTime}</Button><br/><br/></div>
            )
        }
        else
        {
            return this.state.classArray.map(
                (classDetails, id)=> <div key={id}><Button bsStyle="default" bsSize="large">{classDetails.className}<br/>{classDetails.classTime}</Button><br/><br/></div>
            )
        }
    }

    render(){
        return(
            <Well>
                {this.handleClassesDisplay()}
                <ProfessorAddClass showAC={this.state.showAC} handleAddClass={this.handleAddClassButton.bind(this)}/>
            </Well>
        );
    }
}
