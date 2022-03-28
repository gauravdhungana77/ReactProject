import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Product from './Product'
import './electronics.css'
function Electronics() {
    return (
        <>
            <div className=" container-fluid products_container ">
                    <div className="row banner_row" >
                        <div className="col-md-12 banner_column">
                            <picture>
                                <source media="(max-Width:768px)" srcSet="/image/Bannerbig.jpg"/>
                                <img className="image" src="/image/Bannersmall.jpg" alt="Home_Banner"  />
                            </picture>
                        </div>
                    </div>
                    <div className="container product_container ">
                    {/* This is first row */}
                        <div className="row">
                            <div className="col-md-4 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product
                                    image="/Electronics/bulb.jpg"
                                    info="Led Bulb"
                                    price={250}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product 
                                image="/Electronics/fan.jpg"
                                    info="Electric mini Table fan"
                                    price={2000}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/Electronics/iron.jpg"
                                    info="Philips iron"
                                    price={3000}
                            />
                            </div>
                        </div>
                        {/* This id middle row */}
                        <div className="row">
                            <div className="col-md-12 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product 
                                     image="/Electronics/refrigerator.png"
                                    info="Cooling two storage refrigerator"
                                    price={25000}
                                />
                            </div>
                        </div>
                     {/* The last row */}
                     <div className="row">
                            <div className="col-md-4 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product
                                     image="/Electronics/washingmachine.png"
                                    info="Front loader  servis Washing Machine"
                                    price={60000}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product
                                   image="/Electronics/lamp.jpg"
                                    info="Table lamp for study"
                                    price={4000}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/Electronics/speaker.png"
                                    info="Highly powered adjustable speakers from Defender"
                                    price={8000}
                            />
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Electronics;
