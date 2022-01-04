import React from 'react';
import { dumpLogs } from '../Utls';
import './Podcast.css';

const Podcast = (props) => {

  dumpLogs(props);

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
                <button><img src='src\folder_podcast\heart_icon.png' alt="Like" /></button> 
                <button><img src='src\folder_podcast\add_icon.png' alt="Add" /></button> 
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