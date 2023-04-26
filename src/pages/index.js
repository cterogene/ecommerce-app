import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../../components';

export default function Home() {
  return (
    <>
    <HeroBanner/>
      <div className="products-heading "> 
        <h2 className=""> Tout bon pwodwi ki sou mache a</h2>
        <p>Atik nou yo disponib, Nou ap livre'w nan 1 a 3 jou !</p>
      </div>

      <div className="products-container">
        {['Product 1', ' Product 2'].map(

        (product) => product)}
      </div>
        
        <FooterBanner/>
    </>
  )
}
