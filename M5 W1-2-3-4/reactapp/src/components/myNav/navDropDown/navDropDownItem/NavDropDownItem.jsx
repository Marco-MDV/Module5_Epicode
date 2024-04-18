import {NavDropdown } from 'react-bootstrap'
import styleNavDropDownItem from './styleNavDropDown.module.css'

export default function NavDropDownItem(props){
return (
    <NavDropdown.Item href={"#"+props.href} className={styleNavDropDownItem.colorLink}>{props.text}</NavDropdown.Item>
)
}