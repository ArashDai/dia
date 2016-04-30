import React from 'react'



const Slideshow = React.createClass({

  render:function(){
    return(   
      <div id='slideshowPosition' className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
      <a id='Home'></a>    
        <div id="carousel-id" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner ">
                <div className="item active">
                    <img className='carouselImg' alt="First slide" src="./assets/sunnylighthouse.jpg"/>
                    <div className="container">
                        <div className="carousel-caption">
                            <a id='Info'></a>
                            <h1>Welcome to Cafe Dia</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> 
    )}
});


module.exports = Slideshow;