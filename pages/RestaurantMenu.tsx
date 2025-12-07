import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../store';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with a savory spiced potato mash.',
    price: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGVlfGuuym-YQcpSnudTAv7ZDKcmMbuyBC8OgPdqjN_2lB5d_WJ4DvbwW3lzTQMSEkaRbK686ik3P512TuNTHU38HjTra4s88KflWpJ1AEbo-bxkUREMvI3DQc3snahuVxNaUI3cNyZIaT2ZKZhaXv4YgbSkHcADymAeD-juWp1OiFu284cU5MmGt72knl2Tk2Dm2O21Vy80pD5QJRy8PLCngZtVvuR2LaqWAbEgl5J4CNYhPOutPzzY1JagtNmFPU12DL_swNCMEH',
    isVeg: true
  },
  {
    id: 'm2',
    name: 'Ghee Roast Dosa',
    description: 'A plain, crispy dosa roasted to perfection with clarified butter (ghee).',
    price: 130,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7SZxnc9jl7DYXYPVOLjxXSkmptPIrJn1HMYJytprCmzvxloH3120Ntv8ueDa9bvrVHakDZLFUQ9tXSEBPXrjCMoVU3U-w5mTXndTaIhQo7pwynraPeWTN1ykswA5EEbAjtbSw43I_05j2A89gUEIPAUe9EPmVq3-KvD8Hx3mmDxu3TXbu1i3Sfg2fNpM3fhjL-BAk1OO5STi6ULjPwwLbtsDspWMUu4VfJr-k-o0fKWB_IFNqPQIfkrfxllX2K0AiGeKn4aeAH499',
    isVeg: true
  },
  {
    id: 'm3',
    name: 'Idli (2 Pcs)',
    description: 'Steamed savory rice cakes, soft and fluffy, served with sambar and chutney.',
    price: 80,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXD8NgvaVrdrtjmhE4JdyW4BF2NikKEEyfKfQ1YXkT0P4IHdCM6q3rBVfBMwraFswyScbZZRdHpu61isG8rzHNSNdEE9AMykwrXy-08NaPv6cVAJC1YD3zWaJdLZVLKykrvh1y0n_b6-oopoOjrzt5tXsRFoTK4Yxu2GV1QWv-in-lbzsSx6HaIXpxp0aUMSjdozcMoTbIdSXSRVNNtrhr5k-bDYco5Lz2dS6b-uDvPIF_5M15wV2qmZvysFSvLHBSJZ1EihYrP9qE',
    isVeg: true
  }
];

const RestaurantMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart, addToCart, removeFromCart, updateQuantity, cartItemCount } = useApp();

  // In a real app, fetch restaurant by ID
  const restaurantName = "Anjappar Chettinad"; 

  const getQuantity = (id: string) => cart.find(i => i.id === id)?.quantity || 0;

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-30 shadow-sm">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-main dark:text-text-light">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-text-main dark:text-text-light text-lg font-bold leading-tight flex-1 text-center truncate px-2">{restaurantName}</h2>
        <div className="relative size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-text-main dark:text-text-light">search</span>
        </div>
      </div>

      <div className="w-full h-48 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnM8W1vS44NC_WY2gdC_2P6gURKV5T6MIpK18-H5EAOr2CON248_sVExSwFfVcCaIBMmKjXwjcUifLjibNHHmxTzoZBwHlWa919Z5hAsYh7SySqHCRGL2X6Su1v7UHEIx7beM5D7Qtv89FTuBQ7bkLhwPQ_sJzkck37dWfJxxix_-GWB2-bM0n3SqbfwHAHieU7bu1__GwJ0bQpVggXyVHfhk7m_JWWFI4bz52D-FkHcrL-AorAzxdK0WKjmJ1luFpQvyCSBO8GNr-")' }}></div>

      <div className="px-4 pt-4">
        <h1 className="text-text-main dark:text-text-light text-2xl font-bold">{restaurantName}</h1>
        <p className="text-text-muted text-sm mt-1">South Indian • Chettinad • ₹₹</p>
        
        <div className="flex items-center gap-4 mt-3 pb-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-md">
                <span className="text-green-700 dark:text-green-400 font-bold text-sm">4.5</span>
                <span className="material-symbols-outlined text-green-700 dark:text-green-400 text-xs">star</span>
            </div>
            <div className="flex items-center gap-1 text-text-main dark:text-text-light text-sm">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span className="font-semibold">25-30 min</span>
            </div>
        </div>
      </div>

      <div className="sticky top-[72px] z-20 bg-background-light dark:bg-background-dark py-3 overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3 px-4">
          {['Recommended', 'Dosa', 'Idli & Vada', 'Biryani', 'Curries'].map((cat, i) => (
             <button key={cat} className={`rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-surface-dark text-text-main dark:text-text-light border border-gray-200 dark:border-gray-700'}`}>
                {cat}
             </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 p-4">
        <h3 className="text-xl font-bold text-text-main dark:text-text-light">Recommended</h3>
        {menuItems.map((item) => {
            const qty = getQuantity(item.id);
            return (
                <div key={item.id} className="flex gap-4">
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-green-600 text-sm">circle</span>
                             <p className="font-bold text-text-main dark:text-text-light">{item.name}</p>
                        </div>
                        <p className="font-bold text-text-main dark:text-text-light">₹{item.price}</p>
                        <p className="text-text-muted text-sm line-clamp-2">{item.description}</p>
                    </div>
                    <div className="relative flex-shrink-0 w-28 h-24">
                        <img src={item.image} className="w-full h-full object-cover rounded-xl" alt={item.name} />
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-lg rounded-lg bg-white dark:bg-surface-dark min-w-[80px] h-9 flex items-center justify-center border border-gray-100 dark:border-gray-700">
                            {qty === 0 ? (
                                <button onClick={() => addToCart(item)} className="w-full h-full text-primary font-bold text-sm uppercase">Add</button>
                            ) : (
                                <div className="flex items-center justify-between w-full px-2">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="text-text-muted hover:text-primary text-lg font-bold">-</button>
                                    <span className="text-primary font-bold text-sm">{qty}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="text-text-muted hover:text-primary text-lg font-bold">+</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        })}
      </div>

      {cartItemCount > 0 && (
          <div className="fixed bottom-4 left-4 right-4 z-40">
              <button 
                onClick={() => navigate('/cart')}
                className="w-full bg-primary text-white rounded-xl p-4 flex items-center justify-between shadow-xl"
              >
                  <div className="flex flex-col items-start">
                      <span className="font-bold text-sm">{cartItemCount} ITEMS</span>
                      <span className="text-xs opacity-90">Extra charges may apply</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-base">
                      <span>View Cart</span>
                      <span className="material-symbols-outlined">shopping_cart</span>
                  </div>
              </button>
          </div>
      )}
    </div>
  );
};

export default RestaurantMenu;