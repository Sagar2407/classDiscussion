/**
 * Created by Sagar Singh on 4/13/2017.
 */

import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class Statistics extends Component{
    render(){
        console.log("Statistics..")
        return(
            <div>
                Here all the statistics of the previous Class Discussion will be shown
                <div>
                    <img width={700} height={500} src={require('../../../../media/statistics.png')}/>
                </div>
            </div>
        );
    }
}

export default Statistics;