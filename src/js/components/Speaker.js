/**
 * Created by yashw on 30-03-2017.
 */


import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import StudentCard from './StudentCard';


class Speaker extends React.Component {
    constructor(){
        super();
        this.state = {
          showSpeakerVotingContainer: false
        };
    }

    handleSpeakerVoting(){
        let currentTime = "0215";

        if(Number(this.props.time)>Number(currentTime)) {
            this.setState({
                showSpeakerVotingContainer: true
            })
        }
        else {
            this.setState({
                showSpeakerVotingContainer: false
            })
        }

        {/*this.setState({
         showSpeakerVotingContainer: true
         })*/}
    }

    handleSpeakerVotingExit(){
        this.setState({
            showSpeakerVotingContainer: false
        })
    }


    render() {
        return(
            <span>
                <img className={this.props.speakerStatus} onMouseOver={this.handleSpeakerVoting.bind(this)}  width={64} height={64} src={this.props.student.image} />
                <Modal keyboard="true" bsSize="large"  show={this.state.showSpeakerVotingContainer}>
                    <Modal.Body>
                    <StudentCard studentDetails={this.props.student}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="primary">Submit</Button>
                        <Button onClick={this.handleSpeakerVotingExit.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </span>
        );
    }
}

export default Speaker;