import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit <span className="text-orange-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Come experience authentic South Indian vegetarian cuisine in the heart of Little India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            {/* Phone */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-orange-50 to-amber-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <a
                    href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                    className="text-2xl font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200"
                  >
                    {restaurantInfo.phone}
                  </a>
                  <p className="text-gray-600 mt-2">Call to place your order or make a reservation</p>
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {restaurantInfo.address}
                  </p>
                  <p className="text-gray-600 mb-3">{restaurantInfo.location}</p>
                  <a
                    href={restaurantInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                  <p className="text-lg font-semibold text-gray-800">{restaurantInfo.hours}</p>
                  <p className="text-gray-600 mt-2">We're open every day to serve you!</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7598764!2d103.85283!3d1.31234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19bc7000005d%3A0x1!2s663%20Buffalo%20Rd%2C%20Singapore%20210663!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ananda Bhavan Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
