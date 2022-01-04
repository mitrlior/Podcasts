import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SingleUser from './folder_user/user_card.js';

const Userr = (props) => {

  return(
    <div className="Userr">
      <h1>User Options</h1>
      <hr/>
      <SingleUser/>
      <Container>
      <Row>
        <Col sm={12}>
          <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input type="text" name="name" value={"Name"}></input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Update</button>
        </Col>
      </Row>
      <Row>
          <Col sm={12}>
          <label>Domain:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input type="text" name="domain" value={"Domain"}></input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Update</button>
          </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
					<input type="text" name="Email" value={"Email"}></input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Update</button>
        </Col>
      </Row>
      <Row>
          <Col sm={12}>
          <label>Username:&nbsp;&nbsp;</label>
					<input type="text" name="username" value={"Avatar"}></input>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button>Update</button>
          </Col>
      </Row>
      </Container>
      <div>
      </div>
    <hr/>
    </div>  
  )
} 

export default Userr;