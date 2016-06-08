
import React from 'react'




const BeverageMenu = React.createClass({

  render:function(){
    return(

      <div className='container-fluid col-sm-10 col-lg-8 col-sm-push-1 col-lg-push-2 Card'>
       <h3 className='text-center'>Beverages</h3>
        
        <h4 className='text-center'>Cocktails $7.50</h4>
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Mimosa</b></p>
            </div>    
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Bloody Mary</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Screwdriver</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem2'>
                <p className='itemName text-center'><b>Daiquiri</b></p>
                <p className='itemDescription text-center'>Mango, Pina Colada, and Strawberry</p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem2'>
                <p className='itemName text-center'><b>Margaritas</b></p>
                <p className='itemDescription text-center'>Lime, Mango, and Strawberry</p>
            </div>
         <div id='special' className='col-xs-12  col-sm-6 drinkMenuItem2'></div>   
          
         <h4 className='text-center'>Beers $6.00</h4> 
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Blue Moon</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Bud Light</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Budweiser</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Coors Light</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Corona</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Dos Equis</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Heineken</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Modelo</b></p>
            </div>
      
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Pacifico</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Shock Top</b></p>
            </div>
            
            <div className='col-xs-12 col-sm-6 drinkMenuItem'>
                <p className='itemName text-center'><b>Stella</b></p>
            </div>
            <div className='col-xs-12 col-sm-6 drinkMenuItem'></div>
         <br/>   
         
            <div className='col-xs-12 drinkMenuItem2'>
                <h4 className='text-center'>Cold Drinks $3.00</h4> 
                <p className='text-center itemDescription'><b>Coke, Diet Coke, Sprite, Lemonade, Cranberry Juice, Gingerale, Bottled Water, Pelligrino, Orange Juice</b></p>
            </div>
         <br/>    
         
            <div className='col-xs-12 drinkMenuItem2'>
                <h4 className='text-center'>Iced Tea $3.00</h4> 
                <p className='text-center itemDescription'><b>Unsweetened Black Tea, Raspberry Iced Tea, Green Iced Tea</b></p>
            </div>
         <br/>  
         
            <div className='col-xs-12 drinkMenuItem2'>
                <h4 className='text-center'>Hot Drinks $2.75</h4> 
                <p className='text-center itemDescription'><b>Coffee, Tea</b></p>
            </div>
         <br/>
         
            <div className='col-xs-12 drinkMenuItem2'>
                <h4 className='text-center'>Specialty Hot Drinks $5.00</h4> 
                <p className='text-center itemDescription'><b>Espresso, Turkish Coffee, Cappuccino, Latte, Hot Chocolate</b></p>
            </div>
      </div>
    )}
});


module.exports = BeverageMenu;