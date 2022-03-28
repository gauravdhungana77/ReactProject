import React from 'react'
import Product from './Product'
function Mobiles() {
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
                                    image="/Mobiles/iphone 5s.jpg"
                                    info="Silver finished iphone x from Apple|3GB RAM 64GB ROM|2716mAh battery|Fast Charging 15W"
                                    price={55680}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product 
                                image="/Mobiles/iphone 7.png"
                                    info="Black finished iphone7 2GB RAM|1960 mAh Battery life|A10 chipset|Quad core 2.34GHZ 2GB RAM 32GB ROM"
                                    price={40855}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                                image="/Mobiles/iphone xr.jpg"
                                    info="Iphone Xr ios A12 Bionic chipset|3GB RAM 128GB ROM|6.1 inches display"
                                    price={70200}
                            />
                            </div>
                        </div>
                        {/* This id middle row */}
                        <div className="row">
                            <div className="col-md-12 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product 
                                     image="/Mobiles/ipad.jpg"
                                    info="Black finished ipad|ipadOS 14|Apple A12 Bionic Hexa core processor|3GB RAM 32GB ROM|10.2 inches display with Retina IPS LCD capacitive touchscreen|Li-po(3.2w battery)"
                                    price={41999}
                                />
                            </div>
                        </div>
                     {/* The last row */}
                     <div className="row">
                            <div className="col-md-4 pl-1 pb-1 pt-1 pr-1  columns">
                                <Product
                                     image="/Mobiles/note 20.jpg"
                                    info="Note 20 from Samsung with octa core snapdragon 865 processor|8GB RAM 256GB ROM|Super AMOLEID 6.7 inches display|4300mAh battery life "
                                    price={123500}
                                />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1  columns">
                            <Product
                                  image="/Mobiles/note9.jpg"
                                    info="Note 9 from Samsung|powered by snapdragon 845 Octa-core processor|6GB RAM 128GB ROM|Super AMOLED 6.4 inch display|protected by corning Gorilla Glass 5|4000 mAH battery life"
                                    price={50580}
                            />
                            </div>
                            <div className="col-md-4 pl-1  pb-1 pt-1 pr-1 columns">
                            <Product
                             image="/Mobiles/iphone 11.png"
                                    info="Iphone 11 pro gray finished|powered by Apple A13 Bionic chipset|6BG Ram 256GB ROM|3192 mAh battery life"
                                    price={192000}
                                
                            />
                            </div>
                        </div>
                    </div>
                    
            </div>
        </>
    )
}

export default Mobiles;
