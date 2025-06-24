export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  colors?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop&crop=center",
    productCount: 124,
  },
  {
    id: "fashion",
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
    productCount: 89,
  },
  {
    id: "home",
    name: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
    productCount: 156,
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    productCount: 73,
  },
  {
    id: "beauty",
    name: "Beauty & Health",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
    productCount: 92,
  },
  {
    id: "books",
    name: "Books & Media",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
    productCount: 45,
  },
];

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description:
      "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center",
    category: "Electronics",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    badge: "Best Seller",
    colors: ["#000000", "#ffffff", "#ff6b6b"],
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitor and GPS",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center",
    category: "Electronics",
    rating: 4.6,
    reviews: 189,
    inStock: true,
    colors: ["#000000", "#007AFF", "#FF3B30"],
  },
  {
    id: "3",
    name: "Minimalist Backpack",
    description: "Durable and stylish backpack perfect for daily commute",
    price: 89.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center",
    category: "Fashion",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    badge: "Sale",
    colors: ["#000000", "#8B4513", "#2F4F4F"],
  },
  {
    id: "4",
    name: "Organic Coffee Beans",
    description: "Premium single-origin coffee beans, ethically sourced",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop&crop=center",
    category: "Food & Beverage",
    rating: 4.9,
    reviews: 312,
    inStock: true,
    badge: "Organic",
  },
  {
    id: "5",
    name: "Yoga Mat Set",
    description: "Eco-friendly yoga mat with carrying strap and blocks",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop&crop=center",
    category: "Sports & Outdoors",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    colors: ["#FF69B4", "#32CD32", "#6A5ACD"],
  },
  {
    id: "6",
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound quality",
    price: 129.99,
    originalPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop&crop=center",
    category: "Electronics",
    rating: 4.4,
    reviews: 267,
    inStock: true,
    badge: "New",
    colors: ["#000000", "#ffffff", "#4169E1"],
  },
];

export const products: Product[] = [
  ...featuredProducts,
  {
    id: "7",
    name: "Designer Sunglasses",
    description: "UV protection designer sunglasses with polarized lenses",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop&crop=center",
    category: "Fashion",
    rating: 4.6,
    reviews: 89,
    inStock: true,
  },
  {
    id: "8",
    name: "Ceramic Plant Pot",
    description: "Handcrafted ceramic planter perfect for indoor plants",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop&crop=center",
    category: "Home & Garden",
    rating: 4.7,
    reviews: 45,
    inStock: true,
    colors: ["#F5DEB3", "#D2691E", "#228B22"],
  },
  {
    id: "9",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with precision tracking",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop&crop=center",
    category: "Electronics",
    rating: 4.3,
    reviews: 167,
    inStock: false,
  },
  {
    id: "10",
    name: "Skincare Set",
    description: "Complete skincare routine with natural ingredients",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop&crop=center",
    category: "Beauty & Health",
    rating: 4.8,
    reviews: 203,
    inStock: true,
    badge: "Limited",
  },
];
