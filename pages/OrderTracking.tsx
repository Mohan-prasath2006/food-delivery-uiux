import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderTracking = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center p-4">
        <button onClick={() => navigate('/home')} className="flex size-10 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-sm text-text-main dark:text-text-light">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold text-slate-gray dark:text-light-cream drop-shadow-md">Track Your Order</h2>
        <div className="size-10"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCh_oTWFaTp8Njvu4kLz2W9xzrOQoUOKb2qR-TFdY-TgApu8GsOvuJTHrRqTH1Aj9yuvIWosEglci7uKUqnMLzgC7cxbms8QJz8QF2y2TaITT3cSjyOsCrJsaRTqPmdnhs11GdO8A6P-LLQoigMonGlS6QOb9FVKJuSZOdX0AjBcPceyinxUzyWlMevkPkeRFnNmBI3G9rGSjG-xv5kNSqjvQpsaccb2-gNKFBLdyLkcmEZVQmi2rYcuK8PAetmLPMaklGtfRHa0ehe")' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                     <span className="material-symbols-outlined text-primary text-5xl drop-shadow-xl animate-bounce">location_on</span>
                     <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/30 rounded-full blur-[2px]"></div>
                </div>
            </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end">
         <div className="bg-background-light dark:bg-background-dark rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-6 pb-8">
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
            
            <h1 className="text-3xl font-bold text-center text-text-main dark:text-text-light mb-1">Arrives in 12 mins</h1>
            <p className="text-center text-rich-green font-semibold mb-6">Your order is on the way!</p>

            <div className="flex items-center gap-4 bg-light-cream/50 dark:bg-slate-gray/20 p-4 rounded-2xl mb-8">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8UjlgVSL-YYLyKMV-6fKzs2GZMeYWKt3SVl9yPC_HVa7FZGupuHV8gG8XIDuENnoMZJqEdgQwsMVo7LKxat2TyDfi_W9ebraMQUY99wtCezggTE8By5cYp1h05isEBCkZok0fdxM18AXrDlH8CVArDZ7bDbLMZTG1wVh-dM9KTA0IBNn-F_4XUtT_9RjRiFxeFYU_wqLSYRt7ebPjLqLbSBVK6GIvyrm41LzriDi5pYvREbSGsL6CXnsb3HzUqNdUQnGBt039vtZ3" className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-600" alt="Delivery Agent" />
                <div className="flex-1">
                    <p className="font-bold text-text-main dark:text-text-light">Kumar R.</p>
                    <div className="flex items-center text-sm text-text-muted">
                        <span className="material-symbols-outlined text-turmeric fill-1 text-sm mr-1">star</span>
                        <span className="font-bold text-text-main dark:text-text-light">4.8</span>
                        <span className="mx-2">•</span>
                        <span>TN 38 CX 1234</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="size-12 rounded-full bg-rich-green/10 flex items-center justify-center text-rich-green hover:bg-rich-green hover:text-white transition-colors">
                        <span className="material-symbols-outlined">call</span>
                    </button>
                     <button className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-text-main dark:text-text-light hover:bg-gray-200">
                        <span className="material-symbols-outlined">chat</span>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between px-2">
                <div className="flex flex-col items-center gap-2">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-sm">receipt_long</span>
                    </div>
                    <span className="text-xs font-medium text-text-main dark:text-text-light">Placed</span>
                </div>
                <div className="h-0.5 flex-1 bg-primary mx-2"></div>
                <div className="flex flex-col items-center gap-2">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-sm">soup_kitchen</span>
                    </div>
                    <span className="text-xs font-medium text-text-main dark:text-text-light">Preparing</span>
                </div>
                <div className="h-0.5 flex-1 bg-primary mx-2"></div>
                <div className="flex flex-col items-center gap-2">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-primary/20">
                        <span className="material-symbols-outlined text-sm">two_wheeler</span>
                    </div>
                    <span className="text-xs font-bold text-primary">On the Way</span>
                </div>
                 <div className="h-0.5 flex-1 bg-gray-200 dark:bg-gray-700 mx-2"></div>
                 <div className="flex flex-col items-center gap-2 opacity-50">
                    <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">home</span>
                    </div>
                    <span className="text-xs font-medium text-text-muted">Delivered</span>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default OrderTracking;