import React from 'react';
import { Leaf, Heart, Users, Award } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Vegetarian",
      description: "Pure vegetarian cuisine prepared with the finest ingredients and traditional recipes."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is crafted with care, just like home-cooked meals from our family to yours."
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "A warm, welcoming atmosphere perfect for family gatherings and celebrations."
    },
    {
      icon: Award,
      title: "Heritage Recipes",
      description: "Authentic recipes passed down through generations, preserving true South Indian flavors."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Story</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nestled in the heart of Little India, Ananda Bhavan has been a cherished destination for authentic 
            South Indian vegetarian cuisine. Our name means "House of Bliss," and we live up to it by serving 
            delicious, wholesome meals that bring joy to every customer.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h3 className="text-3xl font-bold text-gray-900">Traditional South Indian Vegetarian Cooking</h3>
            <p className="text-gray-600 leading-relaxed">
              At Ananda Bhavan, we take pride in preserving the authentic flavors of South India. Our kitchen 
              uses time-honored cooking techniques and traditional recipes that have been perfected over generations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From our crispy dosas and fluffy idlis to our aromatic biryanis and flavorful thalis, each dish 
              is prepared fresh daily using high-quality ingredients. We believe in serving food that nourishes 
              both body and soul.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a long-time lover of South Indian cuisine or discovering it for the first time, 
              we welcome you to experience the warmth of our hospitality and the richness of our heritage.
            </p>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a0b34b36d5cc?w=800&q=80"
                alt="South Indian cuisine"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-200/50 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-none bg-gradient-to-br from-orange-50 to-amber-50"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
