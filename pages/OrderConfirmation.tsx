import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalAmount = location.state?.total || 0;

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between">
        <h2 className="text-text-main dark:text-text-light text-lg font-bold leading-tight flex-1 text-center">Prasath Food Delivery</h2>
      </div>
      <main className="flex flex-1 flex-col px-4 pt-12 pb-6 items-center">
        <div className="flex justify-center items-center mb-8 animate-bounce">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/20">
            <span className="material-symbols-outlined text-primary text-7xl">check_circle</span>
          </div>
        </div>
        <h1 className="text-text-main dark:text-text-light text-3xl font-bold text-center mb-2">Order Placed!</h1>
        <p className="text-text-muted dark:text-gray-400 text-base font-normal text-center mb-10 max-w-xs">Your order has been successfully placed and is being prepared.</p>
        
        <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between gap-6 py-3">
            <p className="text-text-muted text-sm">Order ID</p>
            <p className="text-text-main dark:text-text-light text-sm font-bold">SYX8-2391</p>
          </div>
          <div className="border-t border-dashed border-gray-200 dark:border-gray-700 my-1"></div>
          <div className="flex justify-between gap-6 py-3">
            <p className="text-text-muted text-sm">Arriving In</p>
            <p className="text-text-main dark:text-text-light text-sm font-bold">35-45 min</p>
          </div>
          <div className="border-t border-dashed border-gray-200 dark:border-gray-700 my-1"></div>
          <div className="flex justify-between gap-6 py-3">
            <p className="text-text-muted text-sm">Total Paid</p>
            <p className="text-text-main dark:text-text-light text-sm font-bold">₹{totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </main>
      
      <div className="p-4 space-y-3 bg-background-light dark:bg-background-dark">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-primary/30 bg-primary/5 dark:bg-primary/10 px-6 py-4 text-center text-base font-bold text-text-main dark:text-text-light">
          <span>Order ID: SYX8-2391</span>
          <span className="material-symbols-outlined text-lg">content_copy</span>
        </button>
        <button onClick={() => navigate('/track-order')} className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-center text-base font-bold text-white shadow-lg shadow-primary/30">
          Track Your Order
        </button>
        <button onClick={() => navigate('/home')} className="flex w-full items-center justify-center rounded-xl bg-transparent px-6 py-4 text-center text-base font-bold text-primary hover:bg-primary/5">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;