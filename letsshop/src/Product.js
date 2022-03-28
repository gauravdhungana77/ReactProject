import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Product.css'
import { useStateValue } from './StateProvider';


function Product(props) {
    const[{basket},dispatch] = useStateValue();
    console.log(basket);
    const addtobasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
               image:props.image,
               info:props.info,
               price:props.price,

            },
        })
    }
    return (
       <>
           <div className="card">
                <img src={props.image} className="card-img-top product_image" alt="productimage"/>
                <div className="card-body">
                    <p className="card-text">{props.info}</p>
                    <div><strong>Rs {props.price}</strong></div>
                    <div  className="cart_button">
                    <button type="button" onClick={addtobasket}>Add to basket</button>
                    </div>
                </div>
            </div> 
       </> 
    )
}

export default Product;
