import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SumTotal from './SumTotal'
import './cartepage.css'
import Cartproduct from './Cartproduct'
import { useStateValue } from './StateProvider';

function Cartepage() {
    const[{basket},dispatch] = useStateValue();
    return (
        <>
            
            <div className='container-fluid p-0'>
              
                    <img className="cartbanner" src='/image/smallcartbanner.jpg' alt='small cart banner'/>
                
                <div className="row m-0 mt-3 mr-3 ml-3">
                    <div className="col-md-4 p-0">
                        <SumTotal/>
                    </div>
                    <div className="col-md-8 p-0 productcontainer">
                     {
                         basket.map(value =>(
                            <Cartproduct
                              image={value.image}
                              info={value.info}
                              price={value.price}
                            />  
                         ))
                     }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cartepage;
