import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="flex-grow flex flex-col justify-between pb-8">
        <div className="flex-1 flex flex-col justify-end">
          <div 
            className="w-full h-[50vh] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden mask-image-gradient-b" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADsY_6qi3KmteFo4x2sCSn5zBrwY5VqzRADedcs5E0dAakIJZoesVV6w1oPwuggZQ6bUf2nPL-p3-baFLoUBYwgpdnzkuomvs7Ip7_ZeTJ4NEvg1YkMnQdcM1MlXxCdgLFNcOjyWvE78mBjnrvhhB543rwBw3mzL3sNtKcJ40QzA3mnvuDIluuXSxq3Uu2C1yIEU2Xs3tLL1ctWSqA4bPlCv9HjFaF0bXcjmqjxc74t6MgwMiyHmxoZeQDjSk71xakktq8QTVlBLGe")' }}
          ></div>
          <div className="px-6">
            <h1 className="text-text-main dark:text-text-light tracking-tight text-4xl font-bold leading-tight text-center pb-3 pt-8">Prasath</h1>
            <p className="text-text-muted dark:text-text-light/80 text-base font-normal leading-normal pb-3 pt-1 text-center">Authentic South Indian Flavors, Delivered.</p>
          </div>
        </div>
        
        <div className="flex-shrink-0 pt-8 pb-safe">
          <div className="flex px-6 py-3 justify-center">
            <button 
              onClick={() => navigate('/profile-setup')}
              className="w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              Create Account
            </button>
          </div>
          
          <div className="relative flex items-center justify-center py-4 px-8">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="flex-shrink mx-4 text-xs font-medium text-gray-500 dark:text-gray-400">Or continue with</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          
          <div className="flex justify-center items-center gap-4 px-4 pt-2">
            {[1, 2, 3].map((_, i) => (
              <button key={i} className="flex items-center justify-center w-14 h-14 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full text-gray-800 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                 <span className="material-symbols-outlined">login</span>
              </button>
            ))}
          </div>
          
          <p onClick={() => navigate('/home')} className="text-text-muted dark:text-primary/80 text-sm font-medium leading-normal pb-3 pt-8 text-center underline cursor-pointer hover:text-primary">
            Already have an account? Sign In
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;