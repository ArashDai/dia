
import React from 'react'




const SandwichMenu = React.createClass({

  render:function(){
    return(
      <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
        <h3 className='text-center'>Sandwiches</h3>
        
        <div className='col-xs-12 col-sm-6 menuItem2'>
                <p className='itemName text-center'><b>Panini Sandwiches</b></p>
                <p className='itemDescription text-center'>Tuna Melt with Cheese, Tomato, and Mayo</p>
                <p className='itemDescription text-center'>Pastrami with Cheese, Deli Mustard, and Pickle on the side</p>
                <p className='itemDescription text-center'>Chicken with Cheese, Tomato, Bell Pepper, Red Onion, Deli Mustard and Mayo</p>
                <p className='itemPrice text-center'>$10.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem2'>
                <p className='itemName text-center'><b>Wrapped Sandwiches</b></p>
                <p className='itemDescription text-center'>Served with Cheese, Tomato, Lettuce, Mustard, and Mayo, on Italian Flat Bread</p>
                <p className='itemDescription text-center'>Choice of Meat: Turkey, Roast Beef, and Chicken</p>
                <p className='itemPrice text-center'>$10.00</p>
        </div>
        
        <div id='coldCut' className='col-xs-12 col-sm-6 menuItem2'>
                <p className='itemName text-center'><b>Cold Cut Style Sandwiches</b></p>
                <p className='itemDescription text-center'>Served with Cheese, Lettuce, Tomato, Deli Mustard, and Mayo on Whole Wheat or White Roll</p>
                <p className='itemDescription text-center'>Choice of Meat: Ham, Italian Combo, Turkey, Chicken, and Roast Beef</p>
                <p className='itemPrice text-center'>$10.00</p>
        </div>

      </div>
    )}
});


module.exports = SandwichMenu;