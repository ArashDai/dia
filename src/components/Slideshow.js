import React from 'react'



const Slideshow = React.createClass({

  render:function(){
    return(     
        <div id="carousel-id" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active">
                    <img className='carouselImg' alt="First slide" src="./assets/sunnylighthouse.jpg"/>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Welcome to Cafe Dia</h1>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className='carouselImg' alt="Second slide" src="./assets/patio.jpg"/>
                    <div className="container">
                        
                    </div>
                </div>
                <div className="item">
                    <img className='carouselImg' alt="Third slide" src="./assets/sunsetlighthouse.jpg"/>
                    <div className="container">
                        <div className="carousel-caption">
                            
                        </div>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#carousel-id" data-slide="prev"></a>
            <a className="right carousel-control" href="#carousel-id" data-slide="next"></a>
        </div>
    )}
});


module.exports = Slideshow;