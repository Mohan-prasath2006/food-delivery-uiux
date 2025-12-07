import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  // Don't show on welcome, auth, or full-screen flow pages
  const hiddenPaths = ['/', '/profile-setup', '/verify-email', '/checkout', '/order-confirmation', '/track-order'];
  if (hiddenPaths.includes(currentPath)) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-black/10 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
      <div className="flex h-16 items-stretch justify-around">
        <Link to="/home" className={`flex flex-1 flex-col items-center justify-center gap-1 ${isActive('/home') ? 'text-primary' : 'text-text-muted dark:text-text-light/60'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/home') ? "'FILL' 1" : "'FILL' 0" }}>home</span>
          <p className={`text-xs ${isActive('/home') ? 'font-bold' : 'font-medium'}`}>Home</p>
        </Link>
        <Link to="/home" className="flex flex-1 flex-col items-center justify-center gap-1 text-text-muted dark:text-text-light/60">
          <span className="material-symbols-outlined">search</span>
          <p className="text-xs font-medium">Search</p>
        </Link>
        <Link to="/cart" className={`flex flex-1 flex-col items-center justify-center gap-1 ${isActive('/cart') ? 'text-primary' : 'text-text-muted dark:text-text-light/60'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/cart') ? "'FILL' 1" : "'FILL' 0" }}>receipt_long</span>
          <p className={`text-xs ${isActive('/cart') ? 'font-bold' : 'font-medium'}`}>Cart</p>
        </Link>
        <Link to="/profile" className={`flex flex-1 flex-col items-center justify-center gap-1 ${isActive('/profile') ? 'text-primary' : 'text-text-muted dark:text-text-light/60'}`}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive('/profile') ? "'FILL' 1" : "'FILL' 0" }}>person</span>
          <p className={`text-xs ${isActive('/profile') ? 'font-bold' : 'font-medium'}`}>Profile</p>
        </Link>
      </div>
    </nav>
  );
};