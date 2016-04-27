import React from 'react'



const Slideshow = React.createClass({

  render:function(){
    return(

     // <div className='container-fluid'>
        
        <div id="carousel-id" className="carousel slide container-fluid" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-id" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-id" data-slide-to="1" className=""></li>
                <li data-target="#carousel-id" data-slide-to="2" className=""></li>
            </ol>
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
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                           
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img className='carouselImg' alt="Third slide" src="./assets/sunsetlighthouse.jpg"/>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>One more for good measure.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#carousel-id" data-slide="prev"></a>
            <a className="right carousel-control" href="#carousel-id" data-slide="next"></a>
        </div>
      
        
    //  </div>
    )}
});


module.exports = Slideshow;