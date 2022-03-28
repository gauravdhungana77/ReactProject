import React from 'react'
import CurrencyFormat from 'react-currency-format'
import  {getTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './sumtotal.css'
function SumTotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <>
           <div className='total'>
                
                    <CurrencyFormat
                        renderText = {(value)=>(
                            <>
                                <p>
                                    SumTotal({basket.length} items) : <strong>{value}</strong>
                                </p>

                            </>
                        )}
                        decimalScale={2}
                        value={getTotal(basket)}
                        displayType={"text"}
                        thousandSeperator = {true}
                        prefix={"RS "}
                     />
               
                
                    <button className="paymentbutton">Proceed to payment</button>
                
            </div>
            <hr/>
          </>
           
       )
       
    
}

export default SumTotal;
