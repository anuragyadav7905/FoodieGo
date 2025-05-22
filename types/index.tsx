export interface Restaurant {
  id: string;
  name: string;
  image: string;
  coverImage: string;
  cuisine: string[];
  rating: number;
  reviewCount: string;
  deliveryTime: string;
  deliveryFee: number;
  isOpen: boolean;
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Promotion {
  id: string;
  title: string;
  discount: string;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  restaurantName: string;
}

export interface Order {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  date: string;
  status: 'delivered' | 'in-progress' | 'cancelled';
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}