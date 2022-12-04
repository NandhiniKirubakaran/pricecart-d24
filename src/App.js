import './App.css';
import { faCoffee, faxmark } from '@fortawesome/free-solid-svg-icons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState } from "react";



function App() {
  return (
    <div className="App">
      
        <HomePage />
        
    </div>
  );
}


function HomePage(){

  return(
    <div>
      <ShopPage />
      <CardAll />
      <Footer />
    </div>
  );
}


function CardAll(){
  const list = [{
    value: 450,
    value1: 300,
    product: "Fancy Product",
    dollar: "$40.00 - ",
    dollar1: "$80.00",
    icon: "Sale",
    add: "view",
    star: "hide"
  },
  {
    value: 450,
    value1: 300,
    product: "Special Item",
    dollar: "$20.00 - ",
    dollar1: "$18.00",
    icon: "display",
    add: "cart",
    star: "display"
  },
  {
    value: 450,
    value1: 300,
    product: "Sale Item",
    dollar: "$50.00 - ",
    dollar1: "$25.00",
    icon: "display",
    add: "cart",
    star: "hide"
  },
  {
    value: 450,
    value1: 300,
    product: "Popular Item",
    dollar: "$40.00",
    dollar1: "empty",
    icon: "Sale",
    add: "cart",
    star: "display"
  },
  {
    value: 450,
    value1: 300,
    product: "Sale Item",
    dollar: "$50.00 - ",
    dollar1: "$25.00",
    icon: "display",
    add: "cart",
    star: "hide"
  },
  {
    value: 450,
    value1: 300,
    product: "Fancy Product",
    dollar: "$120.00 - ",
    dollar1: "$280.00",
    icon: "Sale",
    add: "view",
    star: "hide"
  },
  {
    value: 450,
    value1: 300,
    product: "Special Item",
    dollar: "$20.00 - ",
    dollar1: "$18.00",
    icon: "display",
    add: "cart",
    star: "display"
  },
  {
    value: 450,
    value1: 300,
    product: "Popular Item",
    dollar: "$40.00",
    dollar1: "empty",
    icon: "Sale",
    add: "cart",
    star: "display"
  },
];
  return(
    <div className='list-cards'>
      {list.map((mv) => (
        <CardList cardlist={mv} />
      ))}
    </div>
  );
}

function Footer(){
  return(
    <div className='footer-section'>
        <p className='footer'>Copyright © Your Website 2022</p>
    </div>
  );
}


// ------------------------------------------------s
function CardList( {cardlist} ){

  return(
    
      <div className='list-body'>
        <Card className='cardlist-header'>
          <CardMedia className='cardmedia'>
             {cardlist.icon == "display" ? <button className='sale-button' >Sale</button> : null}
            <p className='para'>{cardlist.value}  {cardlist.value1}</p>
          </CardMedia>
          <CardContent className='cardcontent'>
          <p className='pro'>{cardlist.product}</p>
          { cardlist.star == "display" ? <p className='star-icon'>⭐⭐⭐⭐⭐</p> : null }
          <p className='value'>{cardlist.dollar}  {cardlist.dollar1 == "empty" ? null : cardlist.dollar1}</p>
          </CardContent>
          <CardActions className='cardactions'>
           {cardlist.add == "cart" ? <button className='card-action'>Add to cart</button> : <button className='view-option'>View options</button>}
          </CardActions>
        </Card>
      </div>
  );
}


// --------------------------------
function ShopPage(){

  return(
    <div>
      <div className='list'>
        <p className='heading'>Start Bootstrap</p>
        <nav className='shop-page-navbar'>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            </nav>
            <button className='add-cart'><ShoppingCartIcon/> Cart</button>
      </div>
      <div className='shop-style'>
              <p>Shop in style</p>
              <p className='text'>With this shop hompeage template</p>
            </div>
    </div>
  );
}

export default App;
