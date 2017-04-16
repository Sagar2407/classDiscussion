/**
 * Created by yashw on 06-04-2017.
 */
import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, FormControl, InputGroup, Button, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

export default class ProfessorBanner extends Component{
    handleSearchStringChange(e){
        this.props.handleSearchString(e);
    }

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img width={150} height={100} src={require('../../../media/cd.png')}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem>Home</NavItem>
                        <NavItem eventKey={2} onClick={this.props.handleAddClass}>Add Class</NavItem>
                        {/*For the above onClick function, we will have better code when implemented via ALT*/}
                    </Nav>
                    <Navbar.Form pullLeft>
                        <InputGroup>
                            <FormControl onChange={this.handleSearchStringChange.bind(this)} type="text" placeholder="Search for a class..." />
                            <InputGroup.Button>
                                <Button type="submit" className="glyphicon glyphicon-search"/>
                            </InputGroup.Button>
                        </InputGroup>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="Yashwant Nerella" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action 1</MenuItem>
                            <MenuItem eventKey={3.2}>Action 2</MenuItem>
                            <MenuItem eventKey={3.3}>Action 3</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Profile Settings</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}