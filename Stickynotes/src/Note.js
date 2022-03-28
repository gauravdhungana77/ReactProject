import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import DeleteIcon from '@material-ui/icons/Delete';
import './Note.css'
function Note(props) {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const event = () =>{
        props.click(props.id);
    }
    return (
        <>
            <div className="note">
                <h3>{props.title}</h3>
                <p> {props.content}</p>
                <span>{date}</span>
                <span>{time}</span>
                <DeleteIcon className="delete" onClick={event}/>
            </div>
      
        </>
    )
}

export default Note;
