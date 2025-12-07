export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  time: string;
  distance: string;
  image: string;
  discount?: string;
  items: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}