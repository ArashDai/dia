import React from 'react'




const KidsMenu = React.createClass({

  render:function(){
    return(

      <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
        <h3 className='text-center'>Kid's Menu</h3>
        
        <div className='col-xs-12 col-sm-6'>
            <p className='itemName text-center'><b>Grilled Cheese Sandwich</b></p>
            <p className='itemDescription'></p>
            <p className='itemPrice text-center'>$5.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6'>
            <p className='itemName text-center'><b>Peanut Butter and Jelly Sandwich</b></p>
            <p className='itemDescription'></p>
            <p className='itemPrice text-center'>$5.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6'>
            <p className='itemName text-center'><b>Macaroni and Cheese</b></p>
            <p className='itemDescription'></p>
            <p className='itemPrice text-center'>$5.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6'>
            <p className='itemName text-center'><b>Two Pancakes</b></p>
            <p className='itemDescription'></p>
            <p className='itemPrice text-center'>$5.99</p>
        </div>
        
      </div>
    )}
});


module.exports = KidsMenu;