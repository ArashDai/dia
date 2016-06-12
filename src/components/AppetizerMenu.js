import React from 'react'




const AppetizerMenu = React.createClass({

  render:function(){
    return(

      <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
      <h1 className='text-center'id='menuHeaderTwo'>Menu</h1>
      <h3 className='text-center'>Appetizers</h3>
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Dolmas</b></p>
            <p className='itemDescription text-center'>Grape Leaves Stuffed with Marinated Rice, Served with Garlic Greek Yogurt Sauce </p>
            <p className='itemPrice text-center'>$6.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Mediterranean Veggie</b></p>
            <p className='itemDescription text-center'>Sliced Tomatoes, Persian Cucumbers, Bulgarian Feta Cheese and Olives </p>
            <p className='itemPrice text-center'>$7.50</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b> Hummus and Grilled Pita Bread</b></p>
            <p className='itemDescription text-center'>Our Special House Made Hummus, Topped with Olive Oil and Basil </p>
            <p className='itemPrice text-center'>$6.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Spinach Dip </b></p>
            <p className='itemDescription text-center'>Our Special House Made Spinach Dip </p>
            <p className='itemPrice text-center'>$6.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b> Avocado Dip</b></p>
            <p className='itemDescription text-center'>Our Special House Made Avocado Dip </p>
            <p className='itemPrice text-center'>$7.50</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b> Greek Yogurt</b></p>
            <p className='itemDescription text-center'>Choice of Walnut or Honey, Almond and Honey or Fruit and Honey</p>
            <p className='itemPrice text-center'>$6.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Tzatziki</b></p>
            <p className='itemDescription text-center'>Greek Yogurt, Cucumber, Garlic, Topped with Cold Pressed Oil and Dried Dill</p>
            <p className='itemPrice text-center'>$6.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Falafel</b></p>
            <p className='itemDescription text-center'>Fried Patties made from Ground Marinated Chickpeas and Fava Beans, Served with Tahini Sauce and a Side of Salad</p>
            <p className='itemPrice text-center'>$6.00</p>
        </div>
        
        
      </div>
    )}
});


module.exports = AppetizerMenu;