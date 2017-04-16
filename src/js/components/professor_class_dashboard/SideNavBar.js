import React, {Component} from 'react';
import {Nav, NavItem, Modal, Button, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

class Sidebar extends Component {
    render() {
        return (
            <Modal className='Sidebar left' show={ this.props.isVisible } onHide={this.props.onHide}
                   autoFocus keyboard>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.props.children }
                </Modal.Body>
            </Modal>
        );
    }
}

class SidebarDemo extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isVisible: false,
        };
    }

    updateModal(isVisible) {
        this.state.isVisible = isVisible;
        this.forceUpdate();
    }

    render() {
        return (
            <div className='Sidebar-demo'>
                <Button onClick={ () => this.updateModal(true) }>|||</Button>
                <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                    <Nav>
                        <NavItem><Link to={"/add"}><h3>Add Student</h3></Link></NavItem>
                        <NavItem><Link to={"/stats"}><h3>Statistics of Class</h3></Link></NavItem>
                    <NavItem><Link to={"/past"}><h3>Past Discussion Result</h3></Link></NavItem>
                    </Nav>
                </Sidebar>
            </div>
        );
    }
}

export default SidebarDemo;