export const restaurants = [
  {
    id: '1',
    name: 'The Italian Kitchen',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    coverImage: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    cuisine: ['Italian', 'Mediterranean', 'European'],
    rating: 4.8,
    reviewCount: '2.5k',
    deliveryTime: '25-35',
    deliveryFee: 0,
    isOpen: true,
    menu: [
      {
        id: '101',
        name: 'Margherita Pizza',
        description: 'Fresh mozzarella, tomatoes, basil on a thin crust',
        price: 14.99,
        image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
        category: 'Pizza'
      },
      {
        id: '102',
        name: 'Spaghetti Bolognese',
        description: 'Homemade meat sauce, parmesan cheese',
        price: 16.99,
        image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
        category: 'Pasta'
      },
      {
        id: '103',
        name: 'Mediterranean Salad',
        description: 'Mixed greens, feta cheese, olives, tomatoes',
        price: 12.99,
        image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg',
        category: 'Salads'
      },
      {
        id: '104',
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee, mascarpone',
        price: 8.99,
        image: 'https://images.pexels.com/photos/6958070/pexels-photo-6958070.jpeg',
        category: 'Desserts'
      }
    ]
  },
  {
    id: '2',
    name: 'Burger House',
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    coverImage: 'https://images.pexels.com/photos/1841108/pexels-photo-1841108.jpeg',
    cuisine: ['American', 'Burgers', 'Fast Food'],
    rating: 4.6,
    reviewCount: '1.8k',
    deliveryTime: '20-30',
    deliveryFee: 2.99,
    isOpen: true,
    menu: [
      {
        id: '201',
        name: 'Classic Cheeseburger',
        description: 'Beef patty, cheddar cheese, lettuce, tomato, special sauce',
        price: 12.99,
        image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
        category: 'Burgers'
      },
      {
        id: '202',
        name: 'Loaded Fries',
        description: 'Crispy fries topped with cheese, bacon, scallions',
        price: 8.99,
        image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg',
        category: 'Sides'
      },
      {
        id: '203',
        name: 'Chicken Wings',
        description: 'Spicy buffalo wings with blue cheese dip',
        price: 14.99,
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
        category: 'Appetizers'
      }
    ]
  },
  {
    id: '3',
    name: 'Sushi Master',
    image: 'https://images.pexels.com/photos/1028429/pexels-photo-1028429.jpeg',
    coverImage: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    rating: 4.9,
    reviewCount: '3.2k',
    deliveryTime: '30-40',
    deliveryFee: 3.99,
    isOpen: false,
    menu: [
      {
        id: '301',
        name: 'California Roll',
        description: 'Crab, avocado, cucumber, tobiko',
        price: 12.99,
        image: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg',
        category: 'Rolls'
      },
      {
        id: '302',
        name: 'Salmon Nigiri',
        description: 'Fresh salmon on seasoned rice',
        price: 14.99,
        image: 'https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg',
        category: 'Nigiri'
      },
      {
        id: '303',
        name: 'Miso Soup',
        description: 'Traditional Japanese soup with tofu and seaweed',
        price: 4.99,
        image: 'https://images.pexels.com/photos/6249543/pexels-photo-6249543.jpeg',
        category: 'Soups'
      }
    ]
  }
];

export const categories = [
  {
    id: '1',
    name: 'Pizza',
    icon: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg'
  },
  {
    id: '2',
    name: 'Burgers',
    icon: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'
  },
  {
    id: '3',
    name: 'Sushi',
    icon: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg'
  },
  {
    id: '4',
    name: 'Healthy',
    icon: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg'
  },
  {
    id: '5',
    name: 'Desserts',
    icon: 'https://images.pexels.com/photos/6958070/pexels-photo-6958070.jpeg'
  }
];

export const promotions = [
  {
    id: '1',
    title: 'Order one get one free',
    discount: '2 for 1',
    imageUrl: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg'
  },
  {
    id: '2',
    title: 'Free delivery on your first 3 orders',
    discount: 'Free Delivery',
    imageUrl: 'https://images.pexels.com/photos/1088179/pexels-photo-1088179.jpeg'
  },
  {
    id: '3',
    title: 'Discover new restaurants with 20% off',
    discount: '20% OFF',
    imageUrl: 'https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg'
  }
];

export const cuisines = [
  'Italian', 'American', 'Japanese', 'Chinese', 'Indian', 
  'Mexican', 'Thai', 'Mediterranean', 'Fast Food', 'Healthy'
];

export const cartItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    price: 14.99,
    quantity: 1,
    imageUrl: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
    restaurantName: 'The Italian Kitchen'
  },
  {
    id: '2',
    name: 'Classic Cheeseburger',
    price: 12.99,
    quantity: 2,
    imageUrl: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
    restaurantName: 'Burger House'
  }
];

export const orders = [
  {
    id: '1',
    restaurantName: 'The Italian Kitchen',
    restaurantImage: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    date: 'May 15, 2025 • 7:30 PM',
    status: 'delivered',
    total: 45.97,
    items: [
      { name: 'Margherita Pizza', quantity: 1, price: 14.99 },
      { name: 'Spaghetti Bolognese', quantity: 1, price: 16.99 },
      { name: 'Tiramisu', quantity: 1, price: 8.99 }
    ]
  },
  {
    id: '2',
    restaurantName: 'Burger House',
    restaurantImage: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    date: 'May 12, 2025 • 1:15 PM',
    status: 'in-progress',
    total: 34.97,
    items: [
      { name: 'Classic Cheeseburger', quantity: 2, price: 25.98 },
      { name: 'Loaded Fries', quantity: 1, price: 8.99 }
    ]
  },
  {
    id: '3',
    restaurantName: 'Sushi Master',
    restaurantImage: 'https://images.pexels.com/photos/1028429/pexels-photo-1028429.jpeg',
    date: 'May 5, 2025 • 8:20 PM',
    status: 'cancelled',
    total: 32.97,
    items: [
      { name: 'California Roll', quantity: 1, price: 12.99 },
      { name: 'Salmon Nigiri', quantity: 1, price: 14.99 },
      { name: 'Miso Soup', quantity: 1, price: 4.99 }
    ]
  }
];