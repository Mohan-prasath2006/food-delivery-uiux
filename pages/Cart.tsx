import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../store';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, cartTotal } = useApp();

  const taxes = cartTotal * 0.05;
  const deliveryFee = 30;
  const grandTotal = cartTotal + taxes + deliveryFee;

  if (cart.length === 0) {
      return (
        <div className="flex flex-col h-screen items-center justify-center bg-background-light dark:bg-background-dark p-4">
            <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">shopping_cart_off</span>
            <h2 className="text-xl font-bold text-text-main dark:text-text-light mb-2">Your cart is empty</h2>
            <p className="text-text-muted text-center mb-8">Looks like you haven't added anything to your cart yet.</p>
            <button onClick={() => navigate('/home')} className="bg-primary text-white px-8 py-3 rounded-full font-bold">Browse Restaurants</button>
        </div>
      )
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-10 flex items-center border-b border-gray-200 dark:border-gray-800 bg-background-light/95 dark:bg-background-dark/95 p-4 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center text-text-main dark:text-text-light">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-text-main dark:text-text-light">Order Review</h1>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 pb-32 overflow-y-auto">
        <div className="px-4 pt-6">
          <h2 className="text-xl font-bold text-text-main dark:text-text-light">Your Order</h2>
        </div>

        <div className="mt-4 flex flex-col gap-px bg-gray-100 dark:bg-gray-800/50">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4">
              <img src={item.image} alt={item.name} className="aspect-square w-20 shrink-0 rounded-lg object-cover bg-gray-200" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                     <p className="font-semibold text-text-main dark:text-text-light truncate pr-2">{item.name}</p>
                </div>
                <p className="mt-1 text-sm text-text-muted">₹{item.price}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3 bg-background-light dark:bg-background-dark rounded-lg px-2 py-1 border border-gray-200 dark:border-gray-700">
                <button onClick={() => updateQuantity(item.id, -1)} className="flex items-center justify-center text-primary font-bold w-6">-</button>
                <span className="text-sm font-bold text-text-main dark:text-text-light w-4 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="flex items-center justify-center text-primary font-bold w-6">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 px-4">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-dashed border-primary/20 flex items-center justify-center gap-2 cursor-pointer" onClick={() => navigate('/home')}>
                <span className="material-symbols-outlined text-primary">add_circle</span>
                <span className="text-primary font-bold text-sm">Add more items</span>
            </div>
        </div>

        <div className="mt-6 px-4">
          <h2 className="text-xl font-bold text-text-main dark:text-text-light mb-4">Bill Details</h2>
          <div className="space-y-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm">
            <div className="flex justify-between text-text-main dark:text-text-light text-sm">
              <p>Item Total</p>
              <p className="font-medium">₹{cartTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-text-muted text-sm">
              <p>Government Taxes (5%)</p>
              <p className="font-medium">₹{taxes.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-text-muted text-sm">
              <p>Delivery Partner Fee</p>
              <p className="font-medium">₹{deliveryFee.toFixed(2)}</p>
            </div>
            <div className="my-3 border-t border-dashed border-gray-200 dark:border-gray-700"></div>
            <div className="flex items-center justify-between text-text-main dark:text-text-light">
              <p className="text-lg font-bold">Grand Total</p>
              <p className="text-lg font-bold">₹{grandTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-10 border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-4">
        <button 
            onClick={() => navigate('/checkout')}
            className="flex w-full cursor-pointer items-center justify-between rounded-xl bg-primary px-6 py-4 text-white shadow-lg shadow-primary/30"
        >
            <div className="flex flex-col items-start">
                <span className="text-xs font-medium opacity-80">TOTAL</span>
                <span className="text-lg font-bold">₹{grandTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-bold">Proceed to Checkout</span>
                <span className="material-symbols-outlined">arrow_forward</span>
            </div>
        </button>
      </footer>
    </div>
  );
};

export default Cart;