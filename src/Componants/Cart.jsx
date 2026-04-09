



import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct"; 
import { selectTotalPrice } from "../features/counter/counterSlice"; 

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items); 
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div id="cart-part">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between mt-[100px]">
          <div>
            <div className="w-[952px] pb-[30px] bg-[#F6F6F7]">
             
              <div className="flex h-[61px] items-center border-b-3 border-black/50">
                <p className="text-[18px] text-[#74787C] font-semibold pl-[200px]">Products</p>
                <p className="text-[18px] text-[#74787C] font-semibold pl-[250px]">Price</p>
                <p className="text-[18px] text-[#74787C] font-semibold pl-[110px]">Quantity</p>
                <p className="text-[18px] text-[#74787C] font-semibold pl-[65px]">SubTotal</p>
              </div>

              
              <div className="cart-content">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <CartProduct key={item.id} Product={item} />
                  ))
                ) : (
                  <p className="py-10 font-bold text-center">Your cart is empty!</p>
                )}
              </div>

            
              <div className="flex mt-[30px]">
                <div className="ml-[30px]">
                  <input type="text" placeholder="Coupon Code" className="w-[296px] h-[61px] rounded-lg bg-white border-3 border-black/50 focus:outline-none pl-[15px]" />
                  <button className="px-7.5 py-4 bg-white border-3 font-semibold rounded-lg border-black/50 text-[#222222] uppercase">Apply Coupon</button>
                  <Link to="/shop" className="px-7.5 py-4 bg-red-500 font-semibold rounded-lg text-white uppercase ml-[205px]">Update Cart</Link>
                </div>
              </div>
            </div>
          </div>

       
          <div className="w-[450px] bg-[#F9F9F9] p-8 border border-gray-100 rounded-sm">
            <div className="flex justify-between">
            <h2 className="text-[22px] font-bold text-[#222222] mb-6 pb-4 border-b border-gray-200">Cart Totals</h2>
            <h2 className="text-[22px] font-bold text-[#222222] mb-6 pb-4 border-b border-gray-200">Cart Totals</h2>
            </div>
            <div className="py-8 border-b border-gray-200">
              <div className="flex justify-between mb-4">
                <span className="text-[16px] text-[#74787C] font-medium">Shipping</span>
                <div className="space-y-3 text-right">
                  <label className="flex items-center justify-end gap-3 cursor-pointer">
                    <span>Free Shipping</span>
                    <input type="radio" name="shipping" defaultChecked className="w-4 h-4 accent-black" />
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between py-8">
                <span className="text-[16px] text-[#74787C] font-medium">Total</span>
                <span className="text-[22px] font-bold text-[#222222]">${totalPrice}</span>
              </div>
              <button className="w-full bg-[#EF4444] text-white py-4 font-bold uppercase rounded-md hover:bg-[#D93636] transition-all">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;