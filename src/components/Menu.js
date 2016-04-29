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
        <h1 className='text-center col-sm-10 col-sm-push-1 col-lg-8 col-lg-push-2 CardTwo'>Menu</h1>
        <AppetizerMenu/>
        <SaladMenu/>
        <EntreeMenu/>
        <SandwichMenu/>
        <KidsMenu/>
        <BreakfastMenu/>
        <BeverageMenu/>
      </div>
    )}
});


module.exports = Menu;