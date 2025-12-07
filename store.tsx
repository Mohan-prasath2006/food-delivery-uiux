import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { CartItem, MenuItem, UserProfile } from './types';

interface AppContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
  user: UserProfile;
  setUser: (user: UserProfile) => void;
}

const defaultUser: UserProfile = {
  name: "Aisha Kumar",
  email: "aisha.k@email.com",
  phone: "+91 98765 43210",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPqSx6mMZ0wVYlXgoal7uPN1909LWqi_6TOYFfDmOPV2V0vQylszKwg6i5bGf4E1E0BkL5lADvcLKIPJV01KV9hPGOO9BBpP_AZTVwGtok-avlGxJ6pO4FQQJxjzt4QU7uuCg8LWcqVtOKrGtWL3gd1AcrzMw8_fzoxoyBmwyBSL_fvE-IeXwmYgPSULEpdoZC10MbwA7JiQf7v1Z28xd_a9ue-wzDEOi8BTu0n5Q10OLK9rildyJktjvzaerwsPdRgLy5k9EjB5lG"
};

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children?: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<UserProfile>(defaultUser);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  const clearCart = () => setCart([]);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const cartItemCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};