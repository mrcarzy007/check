import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Header = () => {
  
    const common = {
        marginRight : 15,
         fontSize : 17  ,
         letterSpacing : ".5px",

           
    }
  
    return (
    <>
     <Navbar bg="light" variant="light">
 
       <Container>
        <div>
          <h2 className='mt-2  h2_right' style={{color:"#69AABD"}}>
          <Nav.Link href="#home">Aditya Kumar</Nav.Link>

            </h2>  
        </div>
          <Nav className="">
            <div className='mt-2 '>
            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
            <NavLink to="/playlist"className="text-decoration-none" style={common} >Playlist</NavLink>    
            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>    
            </div>
            <div>
            <Button variant="danger">GitHub</Button>{' '}
            </div>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header