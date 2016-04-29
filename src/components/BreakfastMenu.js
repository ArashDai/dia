import React from 'react'



const BreakfastMenu = React.createClass({

  render:function(){
    return(
      <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
        <h3 className='text-center'>Breakfast</h3>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>The Classic</b></p>
            <p className='itemDescription text-center'>Two Eggs any style, Choice of Sausage, Bacon, or Ham, Served with Hashbrowns and Toast </p>
            <p className='itemPrice text-center'>$9.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Omelette</b></p>
            <p className='itemDescription text-center'>Choice of Sausage, Bacon, or Ham, with Green Onions, Cheddar Cheese and Toast</p>
            <p className='itemPrice text-center'>$12.99</p>
        </div>
        
        <div id="bigItem" className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Veggie Omelette</b></p>
            <p className='itemDescription text-center'>Choice of Three Vegetables: Mushrooms, Bell Pepper, Tomato, Green Onion, and Spinach, Served with Cheddar Cheese and toast</p>
            <p className='itemPrice text-center'>$12.99</p>
        </div>
        
        <div id="bigItem" className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Mediterranean Style Breakfast</b></p>
            <p className='itemDescription text-center'>1. Scrambled Eggs, Sliced Persian Cucumber, Tomato, Olives, Feta Cheese, and Grapes. Served with Hummus Dip and Grilled Pita Bread</p>
            <p className='itemDescription text-center'>2. Scrambled Eggs with side of Gyro Meat, Served with Feta Cheese, Olives and Grilled Pita Bread</p>
            <p className='itemPrice text-center'>$12.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Breakfast Burrito</b></p>
            <p className='itemDescription text-center'>Scrambled Eggs, Choice of Bacon, Sausage, Ham, Pastrami, Turkey, Gyro Meat, or Potato, Topped with Pepper Jack Cheese, Wrapped in a Warm Flour Tortilla</p>
            <p className='itemPrice text-center'>$9.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Breakfast Panini</b></p>
            <p className='itemDescription text-center'>Scrambled Eggs, Provolone Cheese, with Choice of Ham, Bacon, Pastrami, Or Gyro Meat, on Toasted or Grilled Italian Panini Bread</p>
            <p className='itemPrice text-center'>$9.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Veggie Panini</b></p>
            <p className='itemDescription text-center'>Scrambled Eggs, Cheese, Tomato, on Toasted or Grilled Italian Panini Bread</p>
            <p className='itemDescription text-center'>Elvis' Favorite Peanut Butter, Banana, and Honey, on Toasted or Grilled Italian Panini Bread</p>
            <p className='itemPrice text-center'>$9.99</p>
        </div>
        
         <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Croissant Sandwich</b></p>
            <p className='itemDescription text-center'>Eggs Served with Boar's Head Black Forest Ham and Provolone Cheese in a Buttery Toasted Croissant</p>
            <p className='itemPrice text-center'>$9.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Pancake Platter</b></p>
            <p className='itemDescription text-center'>Three Buttermilk Pancakes Topped with Honey, or Maple Syrup and Choice of Walnut, Strawberry or Banana</p>
            <p className='itemPrice text-center'>$9.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Waffle</b></p>
            <p className='itemDescription text-center'>Buttermilk Waffle Topped with Whipped Cream and Jam or Chocolate Syrup</p>
            <p className='itemDescription text-center'>Add Fruit Topping for $1.50</p>
            <p className='itemPrice text-center'>$9.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Shepards Breakfast</b></p>
            <p className='itemDescription text-center'>Bowl of Fresh Organic Greek Yogurt Topped with Honey, a Choice of Walnuts, Almonds, Raisins, Strawberry, Banana, Grapes, or Blueberry </p>
            <p className='itemPrice text-center'>$7.99</p>
        </div>
        
        <div className='col-xs-12 col-sm-6 menuItem'>
            <p className='itemName text-center'><b>Toasted Bagel</b></p>
            <p className='itemDescription text-center'>With Cream Cheese $4.50</p>
            <p className='itemDescription text-center'>With Hummus and Tomato $5.50</p>
            <p className='itemDescription text-center'>With Guacamole $6.50</p>
        </div>
        
        <p className='text-center'>*Add Avocado or Any Other Extras for $1.50 per item</p>
      </div>
    )}
});


module.exports = BreakfastMenu;