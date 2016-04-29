import React from 'react'




const Information = React.createClass({

  render:function(){
    return(

      <div className='container-fluid col-sm-10 col-sm-push-1 col-lg-8 col-lg-push-2 Card'>
        <p className='text-center'>A Waterfront Restaurant serving Mediterranean Specialties</p>
        <p className='text-center'>Located in Shoreline Village at 429-F Shoreline Village Drive Long Beach, CA 90802</p> 
        <p className='text-center'>562-435-7100</p>
        <p className='text-center'>Open From 7:30am - 9:00pm Everyday</p>
      </div>
    )}
});


module.exports = Information;