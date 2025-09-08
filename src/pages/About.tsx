import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Users, Award, CheckCircle, Calendar, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    // Navigate to the booking page with the hash
    navigate('/booking#booking-section');
    
    // Then scroll to the button after a small delay
    setTimeout(() => {
      const element = document.querySelector('#booking-section .flex.justify-center button');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  const handleContactClick = () => {
    // Navigate to the contact page with the hash
    navigate('/contact#contact-form');
    
    // Then scroll to the form after a small delay
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$2M+', label: 'Tax Savings Generated' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We go beyond compliance to provide strategic insights that drive business success and sustainable growth.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our seasoned financial professionals bring over a decade of experience across diverse industries.'
    },
    {
      icon: CheckCircle,
      title: 'Trusted Partnership',
      description: 'We give clients the freedom to focus on their business while we manage financial complexities.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Helping businesses optimize budgets, improve reporting, and make data-driven decisions with confidence.'
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: 'Year-Round Support',
      description: 'We provide continuous support throughout the year, not just during tax season.'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'Our strategies are designed to support and accelerate your business growth.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'We help identify and mitigate financial risks to protect your business.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-5xl mb-6">About ProTax by KC & Associates</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Your trusted partner in financial success. We combine expertise,
                strategy, and personal attention to deliver exceptional results for
                businesses and individuals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 border-0 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-secondary-300 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-primary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg text-justify">
                  ProTax by KC & Associates was founded with a simple mission: to provide
                  expert financial guidance that goes beyond traditional accounting services.
                  We believe that every business and individual deserves access to strategic
                  financial insights that drive real results.
                </p>
                <p className="text-lg text-justify">
                  Our team includes seasoned financial professionals with over a decade of
                  experience in tax filing, tax planning, financial forecasting, cash flow
                  and strategic business analysis across diverse industries. We've helped
                  hundreds of clients navigate complex financial challenges and achieve
                  their goals.
                </p>
                <p className="text-lg text-justify">
                  What sets us apart is our commitment to building lasting relationships.
                  We take the time to understand your unique situation, challenges, and
                  aspirations. This personalized approach allows us to deliver tailored
                  solutions that truly make a difference.
                </p>
              </div>
            </div>
            <div className='mt-11'>
              <img
                src="/lovable-uploads/img1.jpg"
                alt="Professional team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-heading text-4xl font-bold text-primary-900 mb-12 text-center">
      Our Team
    </h2>
    <div className="grid md:grid-cols-2 gap-8">

      {/* Michael's Card */}
      {/* <div className="bg-indigo-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-6 group">
        <div className="flex-shrink-0 w-28 h-28 overflow-hidden rounded-full">
          <img
            src="/lovable-uploads/img2.png"
            alt="Michael – FP&A Expert"
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary-900 mb-2">Michael</h3>
          <p className="text-gray-700 mb-4">
            FP&A professional with over a decade of experience driving financial strategy across startups, growth-stage, and large enterprises in CPG, pharmaceuticals, and market research. 
          </p>
          <h4 className="font-semibold mb-2">Key Strengths:</h4>
          <div className="flex flex-wrap gap-2 mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm">Financial Modeling & Forecasting</span>
            <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm">Technical Proficiency</span>
            <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm">Business Collaboration</span>
            <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm">Emerging Leadership</span>
          </div>
          <p className="text-gray-700">
            His career spans hospitality, advertising, PR, and manufacturing—equipping him with adaptable, results-focused expertise.
          </p>
        </div>
      </div> */}
      {/* Michael's Card - Enhanced */}
<div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col md:flex-row items-start gap-8 group border border-indigo-100 hover:border-indigo-200">
  {/* Image */}
  <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md group-hover:border-indigo-100 transition-all duration-300">
    <img
      src="/lovable-uploads/img2.png"
      alt="Michael – FP&A Expert"
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Content */}
  <div className="flex-1">
    <h3 className="text-2xl font-bold text-indigo-900 mb-2">Michael</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
      Michael is an FP&A professional with over a decade of experience driving financial strategy across startups, growth-stage, and large enterprises in CPG, pharmaceuticals, and market research.
    </p>

    <h4 className="font-bold text-indigo-800 mb-3 text-lg">Key Strengths:</h4>
    
    <ul className="space-y-3 mb-5">
      <li className="flex items-start">
        <span className="bg-indigo-100 text-indigo-900 rounded-full p-1 mr-3 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <span>
          <strong className="text-indigo-800">Financial Modeling & Forecasting:</strong> Built scalable FP&A systems, enhancing accuracy and enabling data-driven decisions.
        </span>
      </li>
      
      <li className="flex items-start">
        <span className="bg-indigo-100 text-indigo-900 rounded-full p-1 mr-3 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <span>
          <strong className="text-indigo-800">Technical Proficiency:</strong> Advanced Excel (VBA, macros), Power BI, Oracle, and Hyperion.
        </span>
      </li>
      
      <li className="flex items-start">
        <span className="bg-indigo-100 text-indigo-900 rounded-full p-1 mr-3 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <span>
          <strong className="text-indigo-800">Business Collaboration:</strong> Partnered cross-functionally to optimize profitability and support executive leadership.
        </span>
      </li>
      
      <li className="flex items-start">
        <span className="bg-indigo-100 text-indigo-900 rounded-full p-1 mr-3 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <span>
          <strong className="text-indigo-800">Emerging Leadership:</strong> Led high-impact initiatives with a focus on mentorship and growth.
        </span>
      </li>
    </ul>

    <p className="text-gray-700 italic border-t border-indigo-100 pt-4">
      His career spans diverse industries, including hospitality, advertising, PR, and manufacturing, equipping him with adaptable, results-focused expertise.
    </p>
  </div>
</div>

      {/* Nikki's Card */}
      {/* <div className="bg-indigo-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-6 group">
        <div className="flex-shrink-0 w-28 h-28 overflow-hidden rounded-full">
          <img
            src="/lovable-uploads/img4.jpg"
            alt="Nicole – Booking & Project Management Expert"
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary-900 mb-2">Nicole</h3>
          <p className="text-gray-700 mb-4">
            Nicole is a seasoned booking and project management expert with over 10 years of experience delivering exceptional customer service across diverse industries. Known for her meticulous organization and client-first approach, she ensures seamless coordination from start to finish.
          </p>
          <h4 className="font-semibold mb-2">What She Brings:</h4>
          <div className="flex flex-wrap gap-2 mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm">Efficient Booking & Scheduling</span>
            <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm">Project Management Excellence</span>
            <span className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm">Client-Centric Mindset</span>
          </div>
          <p className="text-gray-700">
            Whether managing high-profile events or day-to-day operations, Nikki combines sharp attention to detail with a warm, professional touch.
          </p>
        </div>
      </div> */}
      {/* Nicole's Card - Enhanced */}
<div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col md:flex-row items-start gap-8 group border border-indigo-100 hover:border-indigo-200">
  {/* Image */}
  <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-full border-4 border-white shadow-md group-hover:border-indigo-100 transition-all duration-300">
    <img
      src="/lovable-uploads/img4.jpg"
      alt="Nicole – Booking & Project Management Expert"
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Content */}
  <div className="flex-1">
    <h3 className="text-2xl font-bold text-indigo-900 mb-2">Nicole</h3>
    <p className="text-gray-700 mb-4 leading-relaxed">
       Nicole is a seasoned booking and project management expert with over 10 years of experience delivering exceptional customer service across diverse industries. Known for her meticulous organization and client-first approach, she ensures seamless coordination from start to finish.
    </p>

    <h4 className="font-bold text-indigo-800 mb-3 text-lg">What She Brings:</h4>
    
    <ul className="space-y-3 mb-5">
      <li className="flex items-start">
        <span className="bg-indigo-100 text-indigo-900 rounded-full p-1 mr-3 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <span>
          <strong className="text-indigo-800">Efficient Booking & Scheduling:</strong> Streamlines appointments, travel, and logistics with precision.
        </span>
      </li>
      
      <li className="flex items-start">
        <span className="bg-indigo-100 text-indigo-900 rounded-full p-1 mr-3 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <span>
          <strong className="text-indigo-800">Project Management Excellence:</strong> Keeps complex initiatives on track, on time, and within budget.
        </span>
      </li>
      
      <li className="flex items-start">
        <span className="bg-indigo-100 text-indigo-900 rounded-full p-1 mr-3 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </span>
        <span>
          <strong className="text-indigo-800">Client-Centric Mindset:</strong> Builds lasting relationships by anticipating needs and solving problems proactively.
        </span>
      </li>
    </ul>

    <p className="text-gray-700 italic border-t border-indigo-100 pt-4">
      Whether managing high-profile events or day-to-day operations, Nicole combines sharp attention to detail with a warm, professional touch.
    </p>
  </div>
</div>

    </div>
  </div>
</section>








      {/* Our Values */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-primary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-900" size={32} />
                  </div>
                  <h3 className="font-semibold text-xl text-primary-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-primary-900 mb-4">
              Why Choose ProTax by KC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond compliance to provide the strategic insights and clarity
              businesses need to thrive in today's competitive landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-secondary-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-primary-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-r from-primary-900 to-secondary-800 text-white border-0">
            <CardContent className="p-12 text-center">
              <h3 className="font-heading font-bold text-3xl mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                We empower organizations to maximize efficiency and achieve sustainable growth
                by streamlining financial processes, enhancing cross-department collaboration,
                and implementing financial tools. We give our clients the freedom to focus on
                what they do best—running their business—while we manage their financial complexities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl text-primary-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference that strategic financial guidance can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBookClick}
              size="lg" 
              className="bg-primary-900 hover:bg-primary-800 text-white"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              onClick={handleContactClick}
              size="lg" 
              variant="outline" 
              className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
