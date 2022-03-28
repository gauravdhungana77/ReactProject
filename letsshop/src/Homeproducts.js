import React, { useReducer } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Homeproducts.css'
import Product from './Product'
import { useStateValue } from './StateProvider';
function Homeproducts() {
    const[{basket},dispatch]= useStateValue();
  
    return (
        <>
            <div className=" container-fluid products_container ">
                    <div className="row banner_row" >
                        <div className="col-md-12 banner_column">
                            <picture>
                                <source media="(max-Width:768px)" srcSet="/image/bighomebanner.jpg"/>
                                <img className="image" src="/image/smallhomebanner.jpg" alt="Home_Banner"  />
                            </picture>
                        </div>
                    </div>
                    <div className="container product_container ">
                    {/* This is first row */}
                        <div className="row">
                            <div className="col-md-4 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product
                                    image="/image/blender.jpg"
                                    info="Blender"
                                    price={8000}
                                   
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product 
                                image="/image/Football.jpg"
                                    info="Nike Football Orginal"
                                    price={3000}
                                   
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/image/joystick.jpg"
                                    info="Gaming fun with  Joystick"
                                    price={2000}
                                   
                            />
                            </div>
                        </div>
                        {/* This id middle row */}
                        <div className="row">
                            <div className="col-md-12 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product 
                                     image="/image/Nike_shoe.jpg"
                                    info="Red and white strip Nike shoe"
                                    price={2500}
                                  
                                />
                            </div>
                        </div>
                     {/* The last row */}
                     <div className="row">
                            <div className="col-md-4 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product
                                     image="/image/headphones.png"
                                    info="Wireless black headphones powered by Beats"
                                    price={1800}
                                   
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product
                                   image="/image/shirt.png"
                                    info="Plain shirts for male  "
                                    price={1200}
                                    
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/image/perfume.png"
                                    info="Chance Chanel perfume"
                                    price={1500}
                                   
                            />
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Homeproducts;

