/**
 * Created by yashw on 30-03-2017.
 */
import React, {Component} from 'react';

import ParticipationCard  from './ParticipationCard';
import possibleSpeakersArray from '../temp/probableCurrentSpeakers';
import participatingStudents from '../temp/participatingStudents';

import ProfessorDashboard from './ProfessorDashboard';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
          time: 2
        }
    }
    render(){
        return(
            <div>
                {/*<ParticipationCard possibleSpeakers={possibleSpeakersArray}/>*/}
                <ProfessorDashboard/>
            </div>
        );
    }
}