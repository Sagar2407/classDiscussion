/**
 * Created by yashw on 06-04-2017.
 */
import React, {Component} from 'react';

import ProfessorBanner from './ProfessorBanner';
import ProfessorHome from './ProfessorHome';

export default class ProfessorDashboard extends Component{
    constructor(){
        super();
        this.state = {
            show: false,
            searchString: "",
            filter: false
        }
    }

    handleAddClassClick(){
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
            <div>
                <ProfessorBanner handleSearchString={this.handleSearchStringChange.bind(this)} handleAddClass={this.handleAddClassClick.bind(this)}/>
                <ProfessorHome filter={this.state.filter} searchString={this.state.searchString} showAddClass={this.state.show}/>
            </div>
        );
    }
}