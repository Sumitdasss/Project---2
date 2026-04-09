import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredProducts, selectCategory, addToBuild } from '../features/counter/counterSlice';
import {Data3 } from '../Data/Datatwo';
import { useNavigate } from 'react-router-dom';

const SelectProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentCategory = useSelector(selectCategory);
  const filteredItems = useSelector((state) => selectFilteredProducts(state, Data3));

  const handleSelect = (item) => {
    dispatch(addToBuild(item));
    navigate('/pc-builder'); 
  };

  return (
    <div className="max-w-6xl p-10 mx-auto">
      <h2 className="mb-6 text-2xl font-bold capitalize dark:text-white">
        Select {currentCategory}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 border rounded shadow-md dark:bg-zinc-900">
            <img src={item.images[0]} alt="" className="h-40 mx-auto" />
            <h3 className="mt-4 font-bold dark:text-white">{item.title}</h3>
            <p className="font-bold text-red-500">{item.price} TK</p>
            <button 
              onClick={() => handleSelect(item)}
              className="w-full py-2 mt-4 text-white bg-black rounded dark:bg-zinc-700"
            >
              Add to Build
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectProductPage;