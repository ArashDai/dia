import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'


import Slideshow from './Slideshow'
import Information from './Information'

const Homepage = React.createClass({

  render:function(){
    return(

      <div className='container-fluid Homepage'>
        
        <Slideshow/>
        <Information/>
        
      </div>
    )}
});


module.exports = Homepage;