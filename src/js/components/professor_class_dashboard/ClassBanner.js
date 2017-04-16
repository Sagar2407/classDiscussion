/**
 * Created by Sagar Singh on 4/13/2017.
 */

import React, {Component} from 'react';
import {Nav, NavItem, Modal, Button, Navbar, NavDropdown, MenuItem, Glyphicon, InputGroup, FormControl} from 'react-bootstrap';

export default class ClassBanner extends Component{
    handleSearchStringChange(e){
        this.props.handleSearchString(e);
    }

    render(){
        console.log("Class Banner..")

        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img width={190} height={500} src={require('../../../../media/cd.png')}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {/*<Nav>*/}
                        {/*<NavItem eventKey={2} onClick={this.props.handleAddStudent}>Add Student</NavItem>*/}
                    {/*</Nav>*/}

                    <Navbar.Form pullLeft>
                        <InputGroup>
                            <FormControl onChange={this.handleSearchStringChange.bind(this)} type="text" placeholder="Search for a student" />
                            <InputGroup.Button>
                                <Button type="submit" className="glyphicon glyphicon-search"/>
                            </InputGroup.Button>
                        </InputGroup>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Professor" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Profile Settings</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}