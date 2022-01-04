import React from 'react';
// import { dumpLogs } from '../Utls';
import './user_card.css';
import { Container, Row, Col } from 'react-grid-system';


const SingleUser = (props) => {

  // dumpLogs(props);

  return(
    <div>
    <div className="usercard-box">
      <h2>Name: {props.name}</h2>
      <Container>
      <Row>
          <Col sm={0}>
            <b>Email: {props.email}</b>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col sm={0}>
            Domain: {props.domain}
          </Col>
        </Row>
        <Row>
          <Col sm={0}>
            Avatar: {props.avatar}
          </Col>
        </Row>
        
      </Container>     
    </div>
    <br/><br/>
    <hr/>  
    </div>  
  )
} 

export default SingleUser;