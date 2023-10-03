import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';


// Global Constants
const products = [
  { title: 'Cabbage', id: 1 , isFruit: false},
  { title: 'Garlic', id: 2 , isFruit: false},
  { title: 'Apple', id: 3 , isFruit: true},
];


export default function App() {
  
  const[bigCount, setBigCount] = useState(3);

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  function handleClick1() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount2(count2 + 1);
  }
  function resetCounts() {
    setCount(0);
    setCount2(0);
  }

  function makeAlert() {
    alert("clicked!");
  }

  function changeColorOnClick() {

  }

  const listProducts = products.map((product) =>
    <li 
      key={product.id} 
      style={{color: product.isFruit ? 'red' : 'yellow'}}>
      {product.title}
    </li>
  );

  return (
    <div className="App">
      <button onClick={() => alert("clicked :)")}>Alert Test!</button>
      <button onClick={() => alert("clicked :)")}>Alert Test 2 (by fn)</button>
      <br/>
      <br/>
      <br/>
      <button onClick={() => setBigCount(xyz => xyz-1)}>-</button>
      <h1>{"Count: " + bigCount}</h1>
      <button onClick={() => setBigCount(xyz => xyz+1)}>+</button>
      <br/>
      <br/>
      <br/>
      <Button1 onClick={resetCounts}/>
      <Button2 count={count} onClick={handleClick1}/>
      <Button2 count={count2} onClick={handleClick2}/>
      <br/>
      <br/>
      <br/>
      <a className="avatar" href="https://www.google.com">Link to google.com</a>
      <br/>
      <br/>
      <ul>{listProducts}</ul>
      <br/>
      <br/>
      <Button3 onclick={changeColorOnClick}/>




    </div>
  );
}


function Button1({onClick}) {

  return(
    <button onClick={onClick}>Button1</button>
  )
}

function Button2({count, onClick}) {
  return(
    <button onClick={onClick}>Button2: Clicked {count} times!</button>
  )
}

function Button3({onClick}) {
  return(
    <button onClick={onClick}>Button3</button>
  )
}




