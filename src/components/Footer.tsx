
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
            <img 
                src="/lovable-uploads/bce15a11-fe78-49dc-8d44-1339cd299a99.png" 
                alt="ProTax by KC Associates Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="font-heading font-bold text-xl">ProTax by KC</h3>
                <p className="text-sm text-gray-300">Associates</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Expert tax and accounting services for businesses and individuals in Kansas City.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services#tax" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Tax Services</Link></li>
              <li><Link to="/services#accounting" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Accounting Services</Link></li>
              <li><Link to="/services#business-consulting" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Business Consulting</Link></li>
              <li><Link to="/services#external-cfo" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>CFO Services</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Payroll Support</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-secondary-400" />
                <span>123 Main Street<br />Kansas City, MO 64111</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-secondary-400" />
                <span>(475) 529-6839</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-secondary-400" />
                <span>protaxbykc@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ProTax by KC Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
