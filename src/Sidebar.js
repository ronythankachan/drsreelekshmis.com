import React from 'react';
import {Link} from 'react-router-dom';
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
                </SidebarMenu>
                <SideBtnWrap>
                    <Button><Link to={'/book_appointment'} className="link">Book appointment</Link></Button>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
