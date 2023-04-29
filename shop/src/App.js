import React, {useState} from 'react';
import './App.css';
import { Button,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import data from './data.js';

function App() {

  let [shoes,shoes변경] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Yong Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Jumbotron></Jumbotron>
    <div className='container'>
      <div className='row'>
        {
          shoes.map((a,i)=>{
             return <Card shoes={shoes[i]} i={i} key={i}/>
          })
        }        
      </div>
    </div>
    </div>
  );
}

function Jumbotron(){
  return(
    <div className='background'>
      <h2>20$ Season Off</h2>
      <p>권용휘 짱짱맨</p>
      <p>
      <Button variant="primary">Primary</Button>{' '}
      </p>
    </div>
  );
}
function Card(props){
  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="100%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}

export default App;
