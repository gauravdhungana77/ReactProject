import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './carteproduct.css'
function Cartproduct( props) {
    return (
        <>
            <div className="row productrow ">
                <div className="col-sm-4  pt-3 pb-3 image_section">
                 <img src={props.image} alt= 'image'/>
                </div>
                <div className="col-sm-8 pr-0 detail_section">
                    <p>{props.info}</p>
                    <div><strong>Rs {props.price}</strong></div>
                    <button type="button">Remove</button>
                </div>
            </div>
        </>
    )
}

export default Cartproduct;
