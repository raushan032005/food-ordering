export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burgers', icon: '🍔' },
  { id: 'indian', name: 'Indian', icon: '🍛' },
  { id: 'chinese', name: 'Chinese', icon: '🥡' },
  { id: 'dessert', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' }
];

export const foodItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Fresh tomato sauce, mozzarella cheese, and fresh basil leaves',
    price: 299,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    rating: 4.5,
    featured: true
  },
  {
    id: 2,
    name: 'Chicken Tikka Pizza',
    description: 'Spicy chicken tikka, onions, peppers, and cheese',
    price: 399,
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'pizza',
    rating: 4.7,
    featured: true
  },
  {
    id: 3,
    name: 'Classic Burger',
    description: 'Beef patty, lettuce, tomato, cheese, and special sauce',
    price: 199,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burger',
    rating: 4.3,
    featured: false
  },
  {
    id: 4,
    name: 'Chicken Burger',
    description: 'Grilled chicken breast, lettuce, tomato, and mayo',
    price: 179,
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'burger',
    rating: 4.4,
    featured: false
  },
  {
    id: 5,
    name: 'Butter Chicken',
    description: 'Tender chicken in rich, creamy tomato-based curry',
    price: 249,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'indian',
    rating: 4.8,
    featured: true
  },
  {
    id: 6,
    name: 'Biryani',
    description: 'Fragrant basmati rice with spiced chicken and herbs',
    price: 279,
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'indian',
    rating: 4.6,
    featured: true
  },
  {
    id: 7,
    name: 'Hakka Noodles',
    description: 'Stir-fried noodles with vegetables and soy sauce',
    price: 159,
    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chinese',
    rating: 4.2,
    featured: false
  },
  {
    id: 8,
    name: 'Manchurian',
    description: 'Deep-fried vegetables in sweet and sour sauce',
    price: 189,
    image: 'https://images.pexels.com/photos/1865131/pexels-photo-1865131.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chinese',
    rating: 4.1,
    featured: false
  },
  {
    id: 9,
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with chocolate frosting',
    price: 149,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'dessert',
    rating: 4.7,
    featured: false
  },
  {
    id: 10,
    name: 'Mango Smoothie',
    description: 'Fresh mango blended with yogurt and honey',
    price: 89,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'beverages',
    rating: 4.4,
    featured: false
  }
];

export const whyCraveMania = [
  {
    id: 1,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest, locally sourced ingredients to ensure quality and taste.',
    icon: '🌱'
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description: 'Get your food delivered hot and fresh within 30 minutes or less.',
    icon: '🚚'
  },
  {
    id: 3,
    title: 'Expert Chefs',
    description: 'Our experienced chefs prepare each dish with love and attention to detail.',
    icon: '👨‍🍳'
  },
  {
    id: 4,
    title: '24/7 Service',
    description: 'Order anytime, anywhere. We are available round the clock for your convenience.',
    icon: '🕒'
  }
];