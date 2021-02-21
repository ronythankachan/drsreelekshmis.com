import React from 'react';
import {Link} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap
} from './SidebarElements';
import { Button } from 'react-bootstrap';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="contact">Contact Us</SidebarLink>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/panchakarma">Panchakarma</NavDropdown.Item>
                        <NavDropdown.Item href="/marma_therapy">Marma Therapy</NavDropdown.Item>
                        <NavDropdown.Item href="/post_delivery_care">Post Delivery Care</NavDropdown.Item>
                        <NavDropdown.Item href="/swarna_prashana">Swarna Prashana</NavDropdown.Item>
                        <NavDropdown.Item href="/yoga">Yoga</NavDropdown.Item>
                    </NavDropdown>
                </SidebarMenu>
                <SideBtnWrap>
                    <Button><Link to={'/book_appointment'} className="link">Book appointment</Link></Button>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
