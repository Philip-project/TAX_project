import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Shield className="mr-2" size={16} />
              Trusted CPA Experts
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Financial 
              <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Excellence</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Delivered</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Strategic tax planning, comprehensive accounting, and CFO services that drive business growth and financial success.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
              <Link to="/booking">
              <Button 
  size="lg"
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 group"
>
  Get Started Today
  <ArrowRight 
    className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" 
    size={20} 
  />
</Button>

              </Link>
              <Link to="/services">
              <Button 
  size="lg"
  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 group"
>
  Explore Services
  <ArrowRight 
    className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" 
    size={20} 
  />
</Button>




              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl"></div>
              <div className="relative">
                <h3 className="font-heading font-semibold text-2xl text-white mb-6">
                  Transform Your Financial Future
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center text-slate-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">IRS Protection</h4>
                      <p className="text-sm text-slate-400">Expert audit defense and compliance</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <Calculator size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Strategic Planning</h4>
                      <p className="text-sm text-slate-400">Maximize savings and growth</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Growth</h4>
                      <p className="text-sm text-slate-400">CFO services for scaling up</p>
                    </div>
                  </div>
                </div>
                <Link to="/booking" className="w-full">
                  <Button className="w-full mt-8 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
