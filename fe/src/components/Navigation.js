import React from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";


const Navigation = () => {
    const handleLogout = () => {
        console.log("logout")
    }

    return (
        <Nav tabs>
            <NavItem>
                <NavLink active href="/login"> Login </NavLink>
            </NavItem>
            <NavItem>
                <NavLink active href="/register"> Register </NavLink>
            </NavItem>

            <NavItem>
                <NavLink active href="/Problems"> Problems </NavLink>
            </NavItem>

            <NavItem>
                <NavLink active href="/blogs"> Blogs </NavLink>
            </NavItem>

            <NavItem>
                <NavLink active href="/profile"> Profile </NavLink>
            </NavItem>

            <NavItem>
                <NavLink active href="/ranking"> Ranking </NavLink>
            </NavItem>

            <NavItem>
                <Button onClick={handleLogout} color="link">Logout</Button>
            </NavItem>

        </Nav>
    )
}

export default Navigation;