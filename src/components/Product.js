import React from 'react';
import { useDispatch } from 'react-redux';
import {
  increaseAmount,
  decreseAmount,
  removeItem,
} from '../features/basketSlice';

const Product = ({ name, price, image, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center gap-8 px-6 py-4 ">
      <img
        src={image}
        alt={name + 'glasses'}
        width="80px"
        className="rounded-full"
      />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg tracking-wide">{price.toFixed(2)}</p>
        <button
          className="text-red-500 tracking-wide pt-1 pb-3"
          onClick={() => dispatch(removeItem({ name }))}
        >
          Remove
        </button>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Amount</p>
        <div className="flex flex-row items-center gap-4 text-gray-600">
          <button
            className="text-xl text-white rounded-md bg-orange-800 px-2 py-1 "
            onClick={() => {
              if(amount === 1){
                dispatch(removeItem({ name }));
                return;
              } dispatch(decreseAmount({ name }));
            }}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="text-xl  text-white rounded-md bg-violet-600 px-2 py-1"
            onClick={() => {
              dispatch(increaseAmount({ name }));
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
