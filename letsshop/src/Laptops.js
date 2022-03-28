import React from 'react'
import Product from './Product'

function Laptops() {
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
                                    image="/Laptop/pc.png"
                                    info="Silver finished apple pc with 2.3 GHZ processing speed|Dual core|intel i5|8GB RAM"
                                    price={131880}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product 
                                image="/Laptop/dell2.jpg"
                                    info="Silver finished dell inspiron 153000|Core i3|Hard-disk 256|RAM 8GB|Intel integrated HD Graphics 520"
                                    price={55000}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/Laptop/dell inspiron.jpg"
                                    info="Dell inspiron 153542 4th generation intel core i5|2.7 GHZ| RAM 4 GB|HDD 1TB"
                                    price={70400}
                            />
                            </div>
                        </div>
                        {/* This id middle row */}
                        <div className="row">
                            <div className="col-md-12 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product 
                                     image="/Laptop/asussetup.jpg"
                                    info="Highly powered full gaming setup with curved monitor|RAM 32GB|1TB SSD|1TB HDD|..."
                                    price={250000}
                                />
                            </div>
                        </div>
                     {/* The last row */}
                     <div className="row">
                            <div className="col-md-4 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product
                                     image="/Laptop/gamingpc.jpg"
                                    info="Full Gaming setup powered by highend components|RAM 16GB|....."
                                    price={200000}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product
                                   image="/Laptop/macbookpro.png"
                                    info="Silver finished Macbook pro|1.4GHZ quad-core 8th-generation|powered by intel core i5 |8GB RAM and 256GB internal storage "
                                    price={155880}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/Laptop/macbook air.png"
                                    info="Macbook with magic keyboard, double the storage and faster performanance|Display 13 inch |16GB RAM....."
                                    price={155880}
                            />
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Laptops;
