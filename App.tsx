import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './store';
import Welcome from './pages/Welcome';
import { ProfileSetup, EmailConfirmation } from './pages/Auth';
import Home from './pages/Home';
import RestaurantMenu from './pages/RestaurantMenu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderTracking from './pages/OrderTracking';
import Profile from './pages/Profile';
import { BottomNav } from './components/BottomNav';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="font-display text-text-main dark:text-text-light antialiased">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/verify-email" element={<EmailConfirmation />} />
            <Route path="/home" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;