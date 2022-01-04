import React from 'react';
import { Container, Row, Col } from 'react-grid-system';


const Adminn = (props) => {

  return(
    <div className="Adminn">
      <h1>Admin Options</h1>
      <Container>
        <Row>
          <Col sm={4}>
            <button>Delete All Users</button>
          </Col>
          <Col sm={4}>
            <button>Delete All Instances</button>
          </Col>
          <Col sm={4}>
            <button>Delete All Activities</button>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <button>Get All Users</button>
          </Col>
          <Col sm={4}>
            <button>Get All Activities</button>
          </Col>
        </Row>
        <hr/>  
        <Row>
          <Col sm={12}>
            <div>
              RESULTS
            </div>
          </Col>
        </Row>
      </Container>
    </div>  
  )
} 

export default Adminn;