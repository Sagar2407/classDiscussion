/**
 * Created by yashw on 30-03-2017.
 */
import React,{Component} from 'react';
import Speaker from './Speaker';
import possibleSpeakersArray from '../temp/probableCurrentSpeakers';
import previousSpeakersArray from '../temp/participatingStudents';


export default class ParticipationCard extends Component{


    render(){
        return(
            <div className="participationCard">
               <pre>
                   Current PROBABLE Speakers <br/>
                   <Speaker time="0217"  speakerStatus="currentSpeaker" student={possibleSpeakersArray[0]}/> <br/><hr/>
                    <Speaker time="0217"  speakerStatus="probableCurrentSpeaker" student={possibleSpeakersArray[1]}/> &nbsp; <Speaker time="0217"  speakerStatus="probableCurrentSpeaker" student={possibleSpeakersArray[2]}/>
               </pre>
                <pre>
                    Previous Speakers  <br/>
                    <Speaker time="0216"  speakerStatus="previousSpeaker" student={previousSpeakersArray[0]}/>
                    <Speaker time="0214"  speakerStatus="previousSpeaker" student={previousSpeakersArray[1]}/>
                    <Speaker time="0213"  speakerStatus="previousSpeaker" student={previousSpeakersArray[2]}/>
                </pre>
            </div>
        );
    }
}