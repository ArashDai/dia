import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'


import Slideshow from './Slideshow'
import Information from './Information'
import Menu from './Menu'

const Homepage = React.createClass({

  render:function(){
    return(

      <div className='container-fluid Homepage'>
        <Slideshow/>
        
        <Information/>
        
        <Menu/>
        
      </div>
    )}
});


module.exports = Homepage;