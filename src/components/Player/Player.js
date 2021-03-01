import React from 'react';
import './player.css';
import { Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    // console.log(props)
    const {name,email,gender,img,position,salary,place} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    
    return (
        <div className="players">
           <div className="iteam-player">
           <Image src={img} alt="" thumbnail/>
            <h5>Name : {name}</h5>
            <p>Email : {email}</p>
            <p>Gender : {gender}</p>
            <p>Place : {place}</p>
            <p>Position: {position}</p>
            <p>Salary :${salary}</p>
            <Button variant="success" onClick={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserCircle} /> Add Player</Button>
           </div>
        </div>
    );
};

export default Player;