import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const BasketProduct = () => {
  const { products } = useSelector((store) => store.basket);

  return (
    <div>
    <div>
      {products.map((item,i)=>
      <Product 
       key={new Date().getTime + Math.random()}
       name={item.name}
       price={item.price}
       image={item.image}
       amount={item.amount}
      />
      )}
    </div>    
    </div>
  );
};

export default BasketProduct;
