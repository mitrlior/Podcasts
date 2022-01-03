import React from 'react';
import { dumpLogs } from '../Utls';
import './Podcast.css';

const Podcast = (props) => {

  dumpLogs(props);

  return(
    <div>
    <div className="Podcast-box">
      <h2>{props.pod_name}Podcast Name</h2>
      <p>
        {props.pod_type} <b>Type</b> &nbsp; | &nbsp; {props.pod_genre} genre <br/>
        {props.pod_author}Author <br/>
      </p>
      <br/>
      <div>
        <button><img src='src\folder_podcast\heart_icon.png' alt="Like" /></button> 
        <button><img src='src\folder_podcast\play_icon.png' alt="Play" /></button> 
        <button><img src='src\folder_podcast\add_icon.png' alt="Add" /></button> 
      </div>   
    </div>
    <hr/>  
    </div>  
  )
} 

export default Podcast;