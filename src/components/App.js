// import logo from '../logo.svg';
import React from 'react'
import '../App.css';
import {useState} from 'react'
import logo from '../assets/feuille.png'
import Banner from './banner'
import Cart from './cart'
import ShoppingList from './shoppingList'
// import QuestionForm from './questionform'
import Footer from './footer'

const App =()=>{
  const [cart, updateCart]= useState([])
  return (
    <div>
        <Banner>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <div className='lmj-layout-inner'>
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        <Footer />
    </div>
)
}

export default App