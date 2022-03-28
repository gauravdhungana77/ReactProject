import React from 'react'
import Product from './Product'
import './fashion.css'
function Fashion() {
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
                                    image="/fashion/bag.jpg"
                                    info="Orange and Black leather satchel bag"
                                    price={1500}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product 
                                  image="/fashion/nochainwatch.jpg"
                                    info="Black leather strap silver chronograph watch"
                                    price={1500}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/fashion/drmartin.jpg"
                                    info="Yellow low tops Dr.Martin"
                                    price={6000}
                            />
                            </div>
                        </div>
                        {/* This id middle row */}
                        <div className="row">
                            <div className="col-md-12 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product 
                                image="/fashion/chainwatch.jpg"
                                    info="Round silver-coloured chronograph watch with link bracelet"
                                    price={2000}
                                   
                                />
                            </div>
                        </div>
                     {/* The last row */}
                     <div className="row">
                            <div className="col-md-4 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product
                                     image="/fashion/hoodie.jpg"
                                    info="Yellow winter hoodie "
                                    price={2000}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product
                                   image="/fashion/shoe.jpg"
                                    info="Black plain pair shoe  "
                                    price={3000}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/fashion/sunglass.jpg"
                                    info="Brown clubmaster style glass"
                                    price={1400}
                            />
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Fashion;
