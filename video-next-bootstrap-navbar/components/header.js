import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { mainMenu as menuLinks, site} from '../config'


const MenuItem = ({title, path, subMenu, id}) => {
  const router = useRouter()
  if(subMenu){
    const activeChild = subMenu.find((item) => {
      if(router.pathname === item.path){
        return true
      }
      return false
    })
    return(
    <NavDropdown title={title} id={`nav-dropdown-${id}`} active={activeChild}>
      {subMenu.map((item, index) => {
        return(<DropdownItem {...item} key={index} />)
      })}
    </NavDropdown>
    )
  }
    return(
        <Nav.Link active={router.pathname === path} href={path}>{title}</Nav.Link>
    
    )
}

const DropdownItem = ({title, path, divider}) => {
  const router = useRouter()
  if(divider){
    return(
      <NavDropdown.Divider />
    )
  }

  return (
  <NavDropdown.Item active={router.pathname === path} href={path}>{title}</NavDropdown.Item>
  )
}

const Header = () => {
    return(<Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">{site.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            {menuLinks.map((item, index) => {
                return(<MenuItem {...item} key={index}></MenuItem>)
            })}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}


export default Header