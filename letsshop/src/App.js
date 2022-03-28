import React from 'react'
import Home from './Home'
import {Route,Switch} from 'react-router-dom'
import Cartepage from './Cartepage'
import Electronics from './Electronics'
import Navigation from './Navigation'
import Fashion from './Fashion'
import Laptops from './Laptops'
import Mobiles from './Mobiles'
function App() {
  return (
    <>
    <Navigation/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/cart'>
          <Cartepage/>
        </Route>
        <Route path ='/electronics'>
          <Electronics/>
        </Route>
        <Route path ='/fashion'>
          <Fashion/>
        </Route>
        <Route path ='/laptops'>
          <Laptops/>
        </Route>
        <Route path ='/mobiles'>
          <Mobiles/>
        </Route>
      
      </Switch>
    </>
  )
}

export default App

