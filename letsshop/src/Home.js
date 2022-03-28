import React from 'react'
import Navigation from './Navigation'
import './Home.css'
import Homeproducts from './Homeproducts'
import Aboutus from './Aboutus'
import Contacts from "./Contacts"
function Home() {
    return (
        <>
       
            <Homeproducts/>
            <Aboutus/>
            <Contacts/>

        </>
    )
}

export default Home;
