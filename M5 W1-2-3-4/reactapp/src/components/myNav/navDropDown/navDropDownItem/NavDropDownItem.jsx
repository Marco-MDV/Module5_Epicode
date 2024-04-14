import {NavDropdown } from 'react-bootstrap'

export default function NavDropDownItem(props){
return (
    <NavDropdown.Item href={"#"+props.href}>{props.text}</NavDropdown.Item>
)
}