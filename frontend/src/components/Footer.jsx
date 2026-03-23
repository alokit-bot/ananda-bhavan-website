import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">{restaurantInfo.name}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Experience the authentic taste of South Indian vegetarian cuisine in the heart of Little India.
            </p>
            <div className="flex gap-1 items-center">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-orange-500 text-lg">★</span>
              ))}
              <span className="text-gray-300 ml-2">{restaurantInfo.rating} rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Menu', id: 'menu' },
                { label: 'About Us', id: 'about' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <a
                  href={restaurantInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  {restaurantInfo.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Opening Hours</h4>
            <p className="text-gray-300 mb-2 font-semibold">{restaurantInfo.hours}</p>
            <p className="text-gray-400 text-sm">Open every day</p>
            <div className="mt-6">
              <a
                href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                className="inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Call to Order
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with ♥ in Little India, Singapore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
