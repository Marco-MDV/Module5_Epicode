import { NavDropdown } from 'react-bootstrap'
import NavDropDownItem from './navDropDownItem/NavDropDownItem.jsx'
import actions from '../../../data/arrayActions.js'

export default function NavDropDown() {
    return (
        <NavDropdown title="About" id="navbarScrollingDropdown">
            {
                actions.slice(0, 3).map((action, index) => {
                    return (
                        <NavDropDownItem
                            key={index}
                            text={action}
                            href='#'
                        />
                    )
                })
            }
            <NavDropdown.Divider />
            <NavDropDownItem
                text={actions[3]}
                href='#'
            />
        </NavDropdown>
    )
}