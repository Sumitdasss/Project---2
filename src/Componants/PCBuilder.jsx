import { useDispatch, useSelector } from 'react-redux';
import { selectBuild, setCategory,selectBuildTotalPrice } from '../features/counter/counterSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Data3 } from '../Data/Datatwo';
 const uniqueComponents = [...new Map(Data3.map(item => [item.category, item])).values()];
const PCBuilder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const build = useSelector(selectBuild); 
  useState(Data3);
  const totalPrice = useSelector(selectBuildTotalPrice);
const handleChoose = (category) => {
   
    dispatch(setCategory(category));
   
    navigate('/select-product');
  }
  return (
    <div className="max-w-4xl p-10 mx-auto">
        <div className="flex justify-between ">
      <h1 className="mb-6 text-2xl font-bold dark:text-white">PC Builder</h1>
      <h2 className="mb-6 text-xl font-bold dark:text-white">Total Price: {totalPrice} TK</h2>
      </div>
      <div className="space-y-4">
        {uniqueComponents.map((comp, index) => {
        
          const selectedItem = build[comp.category];

          return (
            <div key={index} className="flex items-center justify-between p-4 border rounded dark:bg-zinc-900">
              <div className="flex items-center gap-4">
              
                {selectedItem ? (
                  <img src={selectedItem.images[0]} alt="" className="object-contain w-12 h-12" />
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded">?</div>
                )}
                
                <div>
                  <p className="font-bold capitalize dark:text-white">{comp.category}</p>
          
                  {selectedItem && (
                    <div className="text-sm">
                      <p className="text-gray-600 dark:text-gray-300">{selectedItem.title}</p>
                      <p className="font-bold text-red-500">{selectedItem.price} TK</p>
                    </div>
                  )}
                </div>
              </div>

              <button 
                onClick={() => handleChoose(comp.category)}
                className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                {selectedItem ? "Change" : "Choose"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PCBuilder;