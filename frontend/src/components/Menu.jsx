import React from 'react';
import { Card } from './ui/card';
import { menuCategories } from '../mock';

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our wide variety of authentic South Indian vegetarian dishes, 
            each prepared with traditional recipes and the finest ingredients.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, index) => (
            <div
              key={category.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image - alternating sides */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-white/90">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-none"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-block px-4 py-2 bg-orange-600 text-white font-bold rounded-lg">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-white/80 backdrop-blur-sm border-none shadow-xl">
            <p className="text-xl text-gray-700 mb-4">
              Prices are indicative and may vary. Please call us for current pricing and availability.
            </p>
            <p className="text-lg font-semibold text-orange-600">
              All prices in Singapore Dollars (SGD)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Menu;
