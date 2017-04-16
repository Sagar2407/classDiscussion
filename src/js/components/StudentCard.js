/**
 * Created by yashw on 30-03-2017.
 */
import React, {Component} from 'react';
import {Well, Media, Button, Collapse, Checkbox} from 'react-bootstrap';
import likeReasons from '../temp/likeReasons';
import dislikeReasons from '../temp/dislikeReasons';

export default class StudentCard extends Component{
    constructor(){
        super();
        this.state = {
            toggleLikesCollapse: false,
            toggleDislikesCollapse: false
        };
    }

    _handleLikeClick(){
        let tgleClps1 = this.state.toggleLikesCollapse;
        this.setState({
            toggleLikesCollapse: !tgleClps1,
            toggleDislikesCollapse: false
        });
    }

    _handleDislikeClick(){
        let tgleClps = this.state.toggleDislikesCollapse;
        this.setState({
            toggleDislikesCollapse: !tgleClps,
            toggleLikesCollapse: false
        });
    }

    render(){
        return(
            <div className="container studentCard">
                <Well>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={this.props.studentDetails.image} alt={{/*add student name*/}}/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{this.props.studentDetails.name}</Media.Heading>
                        <p>{this.props.studentDetails.blurb}</p>
                    </Media.Body>
                </Media><hr/>
                    <Button onClick={this._handleLikeClick.bind(this)} bsStyle="link"><span className="glyphicon glyphicon-thumbs-up"></span> Like {/*add number of likes*/}</Button>&emsp;
                    <Button onClick={this._handleDislikeClick.bind(this)} bsStyle="link"><span className="glyphicon glyphicon-thumbs-down"></span> Dislike {/*add number of dislikes*/}</Button>&emsp;
                    <div>
                        <Collapse in={this.state.toggleLikesCollapse}>
                            <form>
                                {likeReasons.map((lReason, index)=> <Checkbox key={index}>{lReason.reason}</Checkbox>)}
                            </form>
                        </Collapse>
                    </div>
                    <div>
                        <Collapse in={this.state.toggleDislikesCollapse}>
                            <form>
                                {dislikeReasons.map((dlReason, index)=> <Checkbox key={index}>{dlReason.reason}</Checkbox>)}
                            </form>
                        </Collapse>
                    </div>
                </Well>
               </div>);
    }
}
