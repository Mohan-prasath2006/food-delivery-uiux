import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../store';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartTotal, clearCart } = useApp();
  
  const grandTotal = cartTotal + (cartTotal * 0.05) + 30;

  const handlePay = () => {
    // Simulate payment processing
    setTimeout(() => {
        clearCart();
        navigate('/order-confirmation', { state: { total: grandTotal } });
    }, 1000);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="text-text-main dark:text-text-light flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-text-main dark:text-text-light text-lg font-bold leading-tight flex-1 text-center">Payment & Address</h2>
        <div className="size-12 shrink-0"></div>
      </div>
      
      <div className="flex-grow pb-32">
        <div className="flex items-center gap-2 px-4 pb-2 pt-6">
          <span className="material-symbols-outlined text-text-main dark:text-text-light">location_on</span>
          <h3 className="text-text-main dark:text-text-light text-lg font-bold">Delivery Address</h3>
        </div>
        
        <div className="px-4 py-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 dark:bg-primary/20 p-3.5 text-base font-semibold text-primary">
            <span className="material-symbols-outlined">my_location</span>
            Use Current Location
          </button>
        </div>
        
        <div className="space-y-4 px-4 py-2">
            <input className="w-full h-14 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4 text-text-main dark:text-text-light focus:border-primary focus:ring-primary" placeholder="Enter your street address" />
            <input className="w-full h-14 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4 text-text-main dark:text-text-light focus:border-primary focus:ring-primary" placeholder="Building / Apartment Name" />
            <div className="flex gap-4">
                <input className="flex-1 h-14 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4 text-text-main dark:text-text-light focus:border-primary focus:ring-primary" placeholder="City" />
                <input className="flex-1 h-14 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-4 text-text-main dark:text-text-light focus:border-primary focus:ring-primary" placeholder="Pin Code" />
            </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3 mt-2">
          <p className="text-text-main dark:text-text-light text-base font-medium">Save this address</p>
          <div className="relative inline-flex cursor-pointer items-center">
             <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </div>
        </div>

        <div className="mx-4 my-6 h-px bg-gray-200 dark:bg-gray-800"></div>

        <div>
          <div className="flex items-center gap-2 px-4 pb-2">
            <span className="material-symbols-outlined text-text-main dark:text-text-light">wallet</span>
            <h3 className="text-text-main dark:text-text-light text-lg font-bold">Payment Method</h3>
          </div>
          <div className="space-y-4 p-4">
            <label className="flex cursor-pointer items-center justify-between rounded-lg border border-primary bg-primary/10 dark:bg-primary/20 p-4 transition-all">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">credit_card</span>
                <span className="font-semibold text-primary">Credit/Debit Card</span>
              </div>
              <div className="flex size-5 items-center justify-center rounded-full border-2 border-primary">
                <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
              </div>
            </label>
            <label className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark p-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-text-main dark:text-text-light">payments</span>
                <span className="font-medium text-text-main dark:text-text-light">UPI</span>
              </div>
              <div className="flex size-5 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
            </label>
             <label className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark p-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-text-main dark:text-text-light">account_balance</span>
                <span className="font-medium text-text-main dark:text-text-light">Cash on Delivery</span>
              </div>
              <div className="flex size-5 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-background-light dark:bg-background-dark p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] border-t border-gray-100 dark:border-gray-800">
        <button onClick={handlePay} className="flex h-14 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
          <span>Confirm Order & Pay ₹{grandTotal.toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
};

export default Checkout;