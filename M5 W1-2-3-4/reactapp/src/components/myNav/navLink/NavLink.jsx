import {Nav} from 'react-bootstrap'
export default function NavLink(props) {
    return(
        <Nav.Link href={"#"+props.href}>{props.text}</Nav.Link>
    )
}