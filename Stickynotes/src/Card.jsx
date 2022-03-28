import React from 'react';
import Butt from './Button1';

import './index.css';

const Cards = (props) => {
    return(
    
        <div className='card'>
            <img src={props.imgscr} alt="My pic"/>
            <div>
                <p>{props.title}</p>
                <h4>{props.name}</h4>
            </div>
            <div className="button">
               <Butt/>
            </div>
        </div>
        
    
    );
    
}

export default Cards;