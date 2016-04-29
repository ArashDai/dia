import React from 'react'
import { Router, Route, Indexroute, Link, browserHistory } from 'react-router'



const EntreeMenu = React.createClass({

  render:function(){
    return(
      <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
        <h3 className='text-center'>Entrees</h3>
      
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Wild Caught Alaskan Salmon Platter</b></p>
                <p className='itemDescription text-center'> Marinated in Olive Oil and Herbs, Grilled or Pan Fried, Served with Basmati Rice, Salad and Grilled Pita Bread </p>
                <p className='itemPrice text-center'>$17.50</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Beef Kebab Platter</b></p>
                <p className='itemDescription text-center'>Grilled Mediterranean Style Beef, Served with Salad Basmati Rice and Grilled Pita Bread </p>
                <p className='itemPrice text-center'>$17.50</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Kofta Kebab Platter</b></p>
                <p className='itemDescription text-center'>Marinated Ground Beef with Basmati Rice Pilaf, Salad and Grilled Pita Bread</p>
                <p className='itemPrice text-center'>$16.00</p>
        </div>    
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Chicken Kebab Platter</b></p>
                <p className='itemDescription text-center'>Mediterranean Style Marinated Chicken Breast Grilled and Chopped, Served with Salad, Basmati Rice and Pita Bread</p>
                <p className='itemPrice text-center'>$16.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Gyro Platter</b></p>
                <p className='itemDescription text-center'>Tender Beef and Lamb Gyro Meat on a bed of Basmati Rice with Salad, Grilled Pita Bread and Tzatziki Sauce</p>
                <p className='itemPrice text-center'>$15.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Falafel Platter</b></p>
                <p className='itemDescription text-center'>Fried Chickpea and Fava Marinated Vegetarian Balls, Served with Salad, Tahini Sauce or Hummus and Grilled Pita Bread</p>
                <p className='itemPrice text-center'>$14.50</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Vegetarian Dolmas Platter</b></p>
                <p className='itemDescription text-center'>Grape Leaves stuffed with Marinated Rice, Served with Salad, Tzatziki Sauce, and Grilled Pita Bread</p>
                <p className='itemPrice text-center'>$12.50</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Gyro Pita Wrap</b></p>
                <p className='itemDescription text-center'>Warm Gyro Meat, Wrapped in Grilled Pita Bread with Lettuce, Tomato, Tzatziki Sauce, Topped with Feta Cheese</p>
                <p className='itemPrice text-center'>$10.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Falafel Pita Wrap</b></p>
                <p className='itemDescription text-center'>Fried Marinated Chickpea and Fava Bean Ball, Warpped in Grilled Pita Bread with Lettuce, Tomato, and Tahini Sauce</p>
                <p className='itemPrice text-center'>$10.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Kofta Kebab Pita Wrap</b></p>
                <p className='itemDescription text-center'>Marinated Ground Beef Wrapped in Grilled Pita Bread with Lettuce, Tomato and Tzatziki Sauce</p>
                <p className='itemPrice text-center'>$10.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Chicken Kebab Wrap</b></p>
                <p className='itemDescription text-center'>Marinated Chicken Breast Kebab Wrapped in Grilled Pita Bread, with Lettuce, Tomato, and Tzatziki Sauce</p>
                <p className='itemPrice text-center'>$10.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Hamburger</b></p>
                <p className='itemDescription text-center'>1/2lb Beef Hamburger and French Fries, Thousand Island Dressing, Lettuce, Tomato, and Pickles</p>
                <p className='itemPrice text-center'>$11.00</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Cheeseburger</b></p>
                <p className='itemDescription text-center'>1/2lb Beef Hamburger with Cheese and French Fries, Thousand Island Dressing, Lettuce, Tomato, and Pickles </p>
                <p className='itemPrice text-center'>$12.50</p>
        </div>
 
      </div>
    )}
});


module.exports = EntreeMenu;