
import React from 'react'




const SaladMenu= React.createClass({

  render:function(){
    return(

      <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
        <h3 className='text-center'>Soup and Salads</h3> 
            <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Mediterranean Salad</b></p>
                <p className='itemDescription text-center'>Romaine Lettuce, Tomatoes, Cucumbers, Red Onion, Feta Cheese and Kalamata Olives</p>
                <p className='itemPrice text-center'>$10.00</p>
            </div>
            
            <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Caesar Salad</b></p>
                <p className='itemDescription text-center'>Lettuce,and Croutons, tossed with Caesar Dressing, Topped with Parmesan Cheese</p>
                <p className='itemPrice text-center'>$10.00</p>
            </div>
            
            <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>House Salad</b></p>
                <p className='itemDescription text-center'>Romaine Lettuce, Tomatoes, Carrots, Cabbage, and Almonds</p>
                <p className='itemPrice text-center'>$10.00</p>
            </div>
            
            <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Clam Chowder in a Bread Bowl</b></p>
                <p className='itemDescription text-center'>A rich cream based soup with a blend of clams, potatoes, and vegetables in a bread bowl.</p>
                <p className='itemPrice text-center'>$8.50</p>
            </div>
            
            <div className='col-xs-12 col-sm-6 menuItem'>
                <p className='itemName text-center'><b>Clam Chowder</b></p>
                <p className='itemDescription text-center'>A rich cream based soup with a blend of clams, potatoes, and vegetables.</p>
                <p className='itemPrice text-center'>$6.00</p>
            </div>
            
            <div className='col-xs-12 col-sm-6'>
                <p className='itemName text-center'><b>Chicken Noodle Soup</b></p>
                <p className='itemDescription text-center'></p>
                <p className='itemPrice text-center'>$6.00</p>
            </div>
       
      </div>
    )}
});


module.exports = SaladMenu;