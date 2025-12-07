import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from '../types';

const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Anjappar Chettinad',
    cuisine: 'Chettinad, Biryani',
    rating: 4.7,
    time: '25-30 min',
    distance: '2.5 km',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzKoCytvYlfl_tTfGQc_3syMAwoKR1eyU6gUlzGjQ6nW_9hQUgxklXPpoonwV3q5fl4L9k6cFMKLRKcmc7hgAnJEW_t48ie30-7o2iPhjjz9Ai5gNt3Wr6ucaMnXWRkj0Q5HhtJR4KDMmtuaesWPm68zQgWRd3uy0pim1WDQU81ZFzonHjmqYIHghSbVVnMpGh9j6kd4fUcXP1smzjWNfumkWYUeR8sqCw_pK9nLXMeNAMwgD7kCHilD9lkkFPGbKi1FD7yHRbghAN',
    discount: '20% OFF',
    items: []
  },
  {
    id: '2',
    name: 'Saravana Bhavan',
    cuisine: 'South Indian, Dosa',
    rating: 4.5,
    time: '20-25 min',
    distance: '1.8 km',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBelfAySMJOS2qRRQjLOFjKQj5NznmQqSFI48v8DhSbUtGazKjzhCxLNiRaVuZ-LDYy-yXl_-R-fMklfJjikccBnuXAAWuaw8ldaW6P2C6_w3qPMaWc4oxIXEiYBUw5IG5oSseqFe_RUCkfW0AK6xSfRqn0Xc5H5x_Ii1nCTUD4_VT8drVgVMIx5IE3qpPMnLBAdLN1CFA0ocBJ2N3ZURvkOljKUPJ88u6K9K5ebSQCTFvKzOFjyZXGvx8suQe_WHEwC_f0b3sYCv7',
    items: []
  },
  {
    id: '3',
    name: 'Sree Gupta Bhavan',
    cuisine: 'Andhra, Biryani',
    rating: 4.6,
    time: '30-35 min',
    distance: '3.2 km',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1PIOxH2qBjMcjTgSD_AtHqNrCtfwi2pN7q50RopnC6zEnhVsJLlhsffEPjucF_aOSsq7iWdM0eU05G7evEpq57uw1sOLfUuCdcC5p_A1lsf6LSo4CrtzR6Q71PWW2NoxcEWI4npxxoVzU4U73eWS0aSZ_9aXk3MK2FNK8Ct5eMaihe7FbL-KKKJWwEPWD3nlMvjfTsAp7PWGuCvOYceTBdPdKy8zTnyiTrzET14bLznsDmA4t7qrNaFY-ca-RQRpT_xl46lBbbQA_',
    discount: '15% OFF',
    items: []
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 p-4 backdrop-blur-md shadow-sm">
        <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-text-light">
          <span className="material-symbols-outlined text-xl">menu</span>
        </button>
        <div className="flex flex-col items-center">
            <h1 className="text-text-main dark:text-text-light text-sm font-bold uppercase tracking-wider text-primary">Delivering to</h1>
            <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-text-main dark:text-text-light font-bold truncate max-w-[150px]">Home - 123 Street</span>
                <span className="material-symbols-outlined text-primary text-lg">expand_more</span>
            </div>
        </div>
        <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-surface-dark shadow-sm text-text-main dark:text-text-light">
          <span className="material-symbols-outlined text-xl">map</span>
        </button>
      </header>

      <div className="px-4 py-3 sticky top-[72px] z-10 bg-background-light dark:bg-background-dark">
        <label className="flex items-center h-12 w-full rounded-xl bg-white dark:bg-surface-dark shadow-sm overflow-hidden px-4 gap-3 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <span className="material-symbols-outlined text-text-muted text-2xl">search</span>
            <input 
              className="flex-1 bg-transparent border-none p-0 text-text-main dark:text-text-light placeholder:text-text-muted focus:ring-0" 
              placeholder="Search for restaurants or dishes" 
            />
        </label>
      </div>

      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar pb-4">
        <button className="flex h-9 shrink-0 items-center gap-2 rounded-full bg-primary px-4 text-white shadow-md">
          <span className="material-symbols-outlined text-lg">tune</span>
          <span className="text-sm font-medium">Filters</span>
        </button>
        {['Sort by Rating', 'Fastest Delivery', 'Pure Veg', 'Dosa'].map((label) => (
            <button key={label} className="flex h-9 shrink-0 items-center rounded-full bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-700 px-4 shadow-sm active:bg-gray-50 dark:active:bg-gray-800">
                <span className="text-text-main dark:text-text-light text-sm font-medium">{label}</span>
            </button>
        ))}
      </div>

      <main className="flex flex-col gap-6 px-4">
        {restaurants.map((restaurant) => (
          <div 
            key={restaurant.id} 
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            className="group flex flex-col rounded-2xl bg-white dark:bg-surface-dark shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img src={restaurant.image} alt={restaurant.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <button className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
                <span className="material-symbols-outlined text-lg">favorite_border</span>
              </button>
              {restaurant.discount && (
                  <div className="absolute bottom-3 left-3 bg-primary px-2 py-1 rounded-lg shadow-md">
                      <p className="text-white text-[10px] font-bold uppercase tracking-wider">{restaurant.discount}</p>
                  </div>
              )}
            </div>
            <div className="flex flex-col gap-1 p-4">
              <div className="flex justify-between items-start">
                  <h3 className="text-text-main dark:text-text-light text-lg font-bold leading-tight">{restaurant.name}</h3>
                  <div className="flex items-center gap-1 rounded-md bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5">
                    <span className="text-xs font-bold text-green-700 dark:text-green-400">{restaurant.rating}</span>
                    <span className="material-symbols-outlined text-[10px] text-green-700 dark:text-green-400">star</span>
                  </div>
              </div>
              <p className="text-text-muted dark:text-text-muted/80 text-sm font-normal">{restaurant.cuisine}</p>
              <div className="flex items-center gap-2 text-text-muted text-sm mt-1">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span>{restaurant.time}</span>
                <span className="mx-1">•</span>
                <span>{restaurant.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;