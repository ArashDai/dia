import React from 'react'

import BreakfastMenu from './BreakfastMenu'
import EntreeMenu from './EntreeMenu'
import AppetizerMenu from './AppetizerMenu'
import SaladMenu from './SaladMenu'
import SandwichMenu from './SandwichMenu'
import KidsMenu from './KidsMenu'
import BeverageMenu from './BeverageMenu'


const Menu = React.createClass({

  render:function(){
    return(
      <div className='container-fluid menuContainer'>
        <h1 className='text-center col-xs-12 hidden' id='menuHeader'>Menu</h1>
        
        <AppetizerMenu/>
          <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 mainImg' >
            <img className='Img' src='./assets/MedSalad.jpg'/>
          </div>
        <SaladMenu/>
          <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 mainImg' >
            <img className='Img' src='./assets/salmon.jpg'/>
          </div>
        <EntreeMenu/>
          <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 mainImg'>
            <img className='Img' src='./assets/falafel.jpg'/>
          </div>
        <SandwichMenu/>
        <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 mainImg'>
          <img className='Img' src='./assets/cheeseburger.jpg'/>
        </div>
        <KidsMenu/>
        <BreakfastMenu/>
        <BeverageMenu/>
      </div>
    )}
});


module.exports = Menu;