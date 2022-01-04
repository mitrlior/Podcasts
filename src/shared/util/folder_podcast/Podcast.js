import React from 'react';
// import { dumpLogs } from '../Utls';
import './Podcast.css';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from "react-player";


const Podcast = (props) => {

  // dumpLogs(props);

  return(
    <div>
    <div className="Podcast-box">
      <h2>{props.pod_name}Podcast Name</h2>
      <Container>
        <Row>
          <Col sm={6}>
             <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' height={150} width={300}/>
          </Col>
          <Col sm={6}>
            <div>
              <p>
                {props.pod_type} <b>Type</b> &nbsp; | &nbsp; {props.pod_genre} genre <br/>
                {props.pod_author}Author <br/>
              </p>
              <div>
                <button id="btn_play"/>
                <button id="btn_up"/>
                <button id="btn_dn"/>    
              </div>   
            </div>
          </Col>
        </Row>
      </Container>     
    </div>
    <hr/>  
    </div>  
  )
} 

export default Podcast;