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
        <h1 className='text-center col-xs-12 hidden-xs' id='menuHeader'>Menu</h1>
        
        <div className='container-fluid hidden-xs col-sm-10 col-sm-push-1'>
          <img className=' col-xs-4 smallImgs' src='./assets/gyroplatter.jpg'/>
          <img className=' col-xs-4 smallImgs' src='./assets/koftakebab.jpg'/>
          <img className=' col-xs-4 smallImgs' src='./assets/chickenplatter.jpg'/>
        </div>
        
        <AppetizerMenu/>
        <img className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card mainImg' src='./assets/MedSalad.jpg'/>
        <SaladMenu/>
        <img className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card mainImg' src='./assets/salmon.jpg'/>
        <EntreeMenu/>
        <img className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card mainImg' src='./assets/falafel.jpg'/>
        <SandwichMenu/>
        <img className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card mainImg' src='./assets/cheeseburger.jpg'/>
        <KidsMenu/>
        <BreakfastMenu/>
        <BeverageMenu/>
      </div>
    )}
});


module.exports = Menu;