import React from 'react'
import Link from 'react-router'



var Navbar = React.createClass({

  render:function(){
    return(
               <nav className="navbar navbar-fixed-top" role="navigation">
                 
                 <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                   </button>
                   <a className="navbar-brand" href="#">Cafe Dia</a>
                 </div>   
                 
                 <div className="collapse navbar-collapse navbar-ex1-collapse">
                   <ul className="nav navbar-nav navbar-right">
                     <li className=""><a href="#">Menu</a></li>
                     <li><a href="#">About</a></li>
                   </ul>
                 </div>
               </nav>

    )}
});


module.exports = Navbar;