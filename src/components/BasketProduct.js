import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const BasketProduct = () => {
  const { products, total, amount } = useSelector((store) => store.basket);

  return (
    <div className="max-w-4xl mx-auto py-4">
      {amount > 1 ? (
        <div>
          {products.map((item, i) => (
            <Product
              key={new Date().getTime + Math.random()}
              name={item.name}
              price={item.price}
              image={item.image}
              amount={item.amount}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-medium text-red-600">No Products</h1>
        </div>
      )}

      <div className="flex flex-row items-center justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        {amount > 1 ? (
          <p className="text-2xl font-medium">$ {total.toFixed(2)}</p>
        ) : (
          <p className="text-2xl font-medium text-center">
            Your Basket Is Empty :)
          </p>
        )}
      </div>
    </div>
  );
};

export default BasketProduct;
