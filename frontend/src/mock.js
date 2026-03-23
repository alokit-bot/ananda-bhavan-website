// Mock data for Ananda Bhavan Vegetarian Restaurant

export const restaurantInfo = {
  name: "Ananda Bhavan Vegetarian",
  tagline: "Authentic South Indian Vegetarian Cuisine",
  description: "A beloved Little India institution serving traditional South Indian vegetarian delights since generations.",
  phone: "+65 6291 1943",
  address: "663 Buffalo Rd, #01-10, Singapore 210663",
  location: "Little India district, near Little India MRT",
  hours: "Open daily from 7:30 AM",
  rating: 4.0,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=663+Buffalo+Rd+Singapore+210663"
};

export const menuCategories = [
  {
    id: 1,
    name: "Dosa Varieties",
    description: "Crispy, golden crepes made from fermented rice and lentil batter",
    items: [
      { name: "Masala Dosa", price: "from $4.50", description: "Classic dosa filled with spiced potato masala" },
      { name: "Paper Dosa", price: "from $5.00", description: "Extra thin and crispy, served plain" },
      { name: "Rava Dosa", price: "from $4.80", description: "Crispy semolina dosa with onions and chilies" },
      { name: "Onion Dosa", price: "from $4.20", description: "Dosa topped with caramelized onions" }
    ],
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80"
  },
  {
    id: 2,
    name: "Thali Meals",
    description: "Complete traditional meals served on a platter",
    items: [
      { name: "South Indian Thali", price: "from $8.50", description: "Rice, sambar, rasam, vegetables, papadam, pickle" },
      { name: "North Indian Thali", price: "from $9.00", description: "Roti, dal, paneer curry, vegetable curry, raita" }
    ],
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80"
  },
  {
    id: 3,
    name: "Idli & Vada",
    description: "Steamed rice cakes and crispy lentil fritters",
    items: [
      { name: "Idli (2 pcs)", price: "from $3.00", description: "Soft steamed rice cakes with sambar and chutney" },
      { name: "Medu Vada (2 pcs)", price: "from $3.50", description: "Crispy lentil donuts served with sambar" },
      { name: "Idli Vada Combo", price: "from $4.50", description: "Perfect combination of both" }
    ],
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80"
  },
  {
    id: 4,
    name: "Biryani & Rice",
    description: "Fragrant rice dishes with aromatic spices",
    items: [
      { name: "Vegetable Biryani", price: "from $7.50", description: "Basmati rice with mixed vegetables and spices" },
      { name: "Paneer Biryani", price: "from $8.50", description: "Fragrant rice with cottage cheese" },
      { name: "Curd Rice", price: "from $4.00", description: "Cooling yogurt rice with tempering" }
    ],
    image: "https://images.unsplash.com/photo-1563379091339-03b47dad9b14?w=800&q=80"
  },
  {
    id: 5,
    name: "Sweets & Snacks",
    description: "Traditional Indian desserts and savory snacks",
    items: [
      { name: "Gulab Jamun", price: "from $2.50", description: "Sweet milk dumplings in rose syrup" },
      { name: "Jalebi", price: "from $3.00", description: "Crispy sweet spirals in sugar syrup" },
      { name: "Samosa (2 pcs)", price: "from $3.50", description: "Crispy pastry filled with spiced potatoes" },
      { name: "Pakora", price: "from $4.00", description: "Mixed vegetable fritters" }
    ],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
  },
  {
    id: 6,
    name: "Beverages",
    description: "Traditional Indian drinks to complement your meal",
    items: [
      { name: "Filter Coffee", price: "from $2.00", description: "Traditional South Indian filter coffee" },
      { name: "Masala Chai", price: "from $2.50", description: "Spiced Indian tea" },
      { name: "Sweet Lassi", price: "from $3.50", description: "Yogurt-based sweet drink" },
      { name: "Mango Lassi", price: "from $4.00", description: "Creamy mango yogurt drink" }
    ],
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&q=80",
    alt: "Crispy Masala Dosa"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
    alt: "South Indian Thali"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=80",
    alt: "Idli and Vada"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1563379091339-03b47dad9b14?w=800&q=80",
    alt: "Vegetable Biryani"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    alt: "Indian Sweets"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    alt: "Traditional Filter Coffee"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "The most authentic South Indian food I've had outside of India! The dosas are perfectly crispy and the filter coffee is exactly how my grandmother used to make it.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 4,
    text: "Great value for money and the thali meals are very filling. The staff is friendly and the atmosphere is warm and welcoming. A must-visit in Little India!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Sarah Tan",
    rating: 5,
    text: "I'm not even vegetarian but I keep coming back! The flavors are incredible and everything tastes so fresh. The masala dosa is my absolute favorite.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Mohammed Ali",
    rating: 4,
    text: "Been coming here for years with my family. Consistent quality, generous portions, and the sweets are divine. The gulab jamun melts in your mouth!",
    date: "1 week ago"
  }
];
