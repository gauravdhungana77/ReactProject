import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Navigation.css';

import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';



function Navigation() {
  const [{basket},dispatch]=useStateValue();
  
    var count=0;
  const listner = () =>{
      if(count==0){
       
        document.getElementById('cat').style.display="flex";
        count=count+1
      }
      else if(count==1){
        document.getElementById('cat').style.display="none";
        count=count-1
      }
  }

return (
       <>
           <div className="container-fluid navs">
               <span onClick={listner}  className="menu_icon"><MenuIcon/></span>    
               <NavLink to = '/'>  
                    <div className="banner">Let's Shop</div>
                </NavLink> 
                <div className="search">
                    <input type="text"  placeholder="Search"  />
                     <SearchIcon className="navbar_searchicon"/>
                </div>
                             
                <div className="login" id="lost">Login</div>
                <NavLink to= '/cart'>
                    <div className='crate'> <ShoppingCartIcon />
                    <span className="value">{basket.length}</span> 
                    </div>
                </NavLink>
                            
            </div>
           <div className=" categories " id="cat">
                <div>categories<hr/></div>
                <NavLink to='./electronics'>
                  <div className='link'>Electronics</div>
                </NavLink>
                <NavLink to ='./fashion'>
                  <div>Fashion</div>
                </NavLink>
                <NavLink to ='./laptops'>
                  <div>Laptops</div>
                </NavLink>
                <NavLink to='./mobiles'>
                  <div>Mobiles</div>
                </NavLink>
           </div>
       </>
    )
}

export default Navigation;
