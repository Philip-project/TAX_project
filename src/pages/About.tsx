import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Award, CheckCircle, Calendar, TrendingUp, Shield } from 'lucide-react';


// ✅ Reusable TeamCard with dropdown
function TeamCard({ img, name, intro, children }: { img: string; name: string; intro: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-start gap-6 group border border-indigo-100 hover:border-indigo-200 h-full">
      {/* Image */}
      <div className="flex-shrink-0 w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-white shadow-md group-hover:border-indigo-100 transition-all duration-300">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col w-full">
        <h3 className="text-2xl font-bold text-indigo-900 mb-2 text-center">{name}</h3>
        <p className="text-gray-700 mb-4 leading-relaxed text-center">{intro}</p>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-indigo-700 font-semibold flex items-center justify-center gap-2 hover:text-indigo-900 transition"
        >
          {open ? "Read Less ▲" : "Read More ▼"}
        </button>

        {/* Hidden/Shown content */}
        {open && (
          <div className="mt-4 border-t border-indigo-100 pt-4 text-sm text-gray-700 space-y-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

const About = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/booking#booking-section');
    setTimeout(() => {
      const element = document.querySelector('#booking-section .flex.justify-center button');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/contact#contact-form');
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    { icon: Target, title: 'Strategic Focus', description: 'We go beyond compliance to provide strategic insights that drive business success and sustainable growth.' },
    { icon: Users, title: 'Expert Team', description: 'Our seasoned financial professionals bring over a decade of experience across diverse industries.' },
    { icon: CheckCircle, title: 'Trusted Partnership', description: 'We give clients the freedom to focus on their business while we manage financial complexities.' },
    { icon: Award, title: 'Proven Results', description: 'Helping businesses optimize budgets, improve reporting, and make data-driven decisions with confidence.' }
  ];

  const services = [
    { icon: Calendar, title: 'Year-Round Support', description: 'We provide continuous support throughout the year, not just during tax season.' },
    { icon: TrendingUp, title: 'Growth-Oriented', description: 'Our strategies are designed to support and accelerate your business growth.' },
    { icon: Shield, title: 'Risk Management', description: 'We help identify and mitigate financial risks to protect your business.' }
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
      <section className="py-20 bg-primary-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-primary-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg text-justify">
                  ProTax by KC & Associates was founded with a simple mission: to provide
                  expert financial guidance that goes beyond traditional accounting services.
                </p>
                <p className="text-lg text-justify">
                  Our team includes seasoned financial professionals with over a decade of
                  experience in tax filing, tax planning, financial forecasting, and strategic business analysis.
                </p>
                <p className="text-lg text-justify">
                  What sets us apart is our commitment to building lasting relationships.
                  We take the time to understand your unique situation and aspirations.
                </p>
              </div>
            </div>
            <div className="mt-11">
              <img src="/lovable-uploads/img1.webp" alt="Professional team meeting" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
        
      <section>
        <div className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-primary-900 mb-12 text-center">Kelvine Clarke</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">   
            {/* Left Content */}
            <div>
              {/* <h2 className="font-heading text-4xl font-bold text-primary-900 mb-12 text-center">Kelvine Clarke</h2> */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg text-justify">
                  Kelvine Clarke is a results-driven CPA and finance leader with over a decade of experience delivering strategic financial management and operational improvements for organizations, including publicly traded companies.
                </p>
                <p className="text-lg text-justify">
                  His core expertise includes financial analysis, internal and external reporting, ERP system implementation, and complex project management. He is adept at translating technical data into actionable insights for executive leadership and collaborating across all organizational levels to achieve strategic objectives.
                </p>
                <p className="text-lg text-justify">
                  His experience includes serving high-profile clients such as Bloomberg, Spotify, CVS, and Walgreens.
                </p>
              </div>
            </div>
            {/* Right Image */}
            <div className="mt-11">
              <img src="lovable-uploads\img6.webp" alt="Kelvine Clarke" className="rounded-lg shadow-xl" />
            </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Michael */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start gap-8 border border-indigo-100 hover:border-indigo-200 h-full">
              <div className="flex-shrink-0 w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-white shadow-md group-hover:border-indigo-100 transition-all duration-300">
                <img
                  src="/lovable-uploads/img2.webp"
                  alt="Michael – FP&A Expert"
                  className="w-full h-full object-cover rounded-full transform transition duration-500 hover:scale-110 hover:shadow-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-indigo-900 mb-2 text-center">Michael Kilcourse</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-center">
                  Michael Kilcourse is an FP&A professional with over a decade of experience driving financial strategy across startups, growth-stage, and large enterprises.
                </p>
                <h4 className="font-bold text-indigo-800 mb-3 text-lg">Key Strengths:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Financial Modeling & Forecasting:</strong> Built scalable FP&A systems.</li>
                  {/* <li><strong>Technical Proficiency:</strong> Excel, Power BI, Oracle, Hyperion.</li> */}
                  <li><strong>Business Collaboration:</strong> Partnered cross-functionally to optimize profitability.</li>
                  <li><strong>Emerging Leadership:</strong> Led high-impact initiatives with mentorship.</li>
                </ul>
                <p className="italic border-t border-indigo-100 pt-4">
                  His career spans diverse industries, including hospitality, advertising, PR, and manufacturing.
                </p>
              </div>
            </div>
            {/* Nicole */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start gap-8 border border-indigo-100 hover:border-indigo-200 h-full">
              <div className="flex-shrink-0 w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-white shadow-md group-hover:border-indigo-100 transition-all duration-300">
                <img
                  src="/lovable-uploads/img4.webp"
                  alt="Nicole – Booking & Project Management Expert"
                  className="w-full h-full object-cover rounded-full transform transition duration-500 hover:scale-110 hover:shadow-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-indigo-900 mb-2 text-center">Nicole Seymour</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-center">
                  Nicole Seymour is a seasoned booking and project management expert with over 10 years of experience delivering exceptional customer service.
                </p>
                <h4 className="font-bold text-indigo-800 mb-3 text-lg">What She Brings:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Efficient Bookingkeeping & Scheduling:</strong> Streamlines appointments, travel, and logistics.</li>
                  <li><strong>Project Management Excellence:</strong> Keeps complex initiatives on track.</li>
                  <li><strong>Client-Centric Mindset:</strong> Builds lasting relationships by anticipating needs.</li>
                </ul>
                <p className="italic border-t border-indigo-100 pt-4">
                  Whether managing high-profile events or day-to-day operations, Nicole Seymour combines detail with a warm, professional touch.
                </p>
              </div>
            </div>
            {/* Bertony */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start gap-8 border border-indigo-100 hover:border-indigo-200 h-full">
              <div className="flex-shrink-0 w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-white shadow-md group-hover:border-indigo-100 transition-all duration-300">
                <img
                  src="/lovable-uploads/img5.webp"
                  alt="Bertony Jean-Louis – Business Consultant & Strategic Advisor"
                  className="w-full h-full object-cover rounded-full transform transition duration-500 hover:scale-110 hover:shadow-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-indigo-900 mb-2 text-center">Bertony Jean-Louis</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-center">
                  Bertony is a University of Michigan MBA with over a decade of experience spanning investment banking (Goldman Sachs), corporate strategy (DoorDash), and audit (KPMG).
                </p>
                <h4 className="font-bold text-indigo-800 mb-3 text-lg">Core Expertise:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Financial Strategy & Analysis:</strong> Transforms complex financial data into actionable insights that drive growth.</li>
                  <li><strong>Cross-Sector Expertise:</strong> Leverages experience across banking, corporate strategy, and audit to build scalable, efficient operations.</li>
                  <li><strong>Revenue & Operational Excellence:</strong> Develops strategies that enhance revenue growth while optimizing processes for clients.</li>
                </ul>
                <p className="italic border-t border-indigo-100 pt-4">
                  Known for his client-first approach, he empowers business owners with clarity and confidence to scale successfully.
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
            <h2 className="font-heading font-bold text-4xl text-primary-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do and define our commitment to excellence.</p>
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
            <h2 className="font-heading font-bold text-4xl text-primary-900 mb-4">Why Choose ProTax by KC?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We go beyond compliance to provide the strategic insights and clarity businesses need to thrive.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-secondary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-secondary-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-primary-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-gradient-to-r from-primary-900 to-secondary-800 text-white border-0">
            <CardContent className="p-12 text-center">
              <h3 className="font-heading font-bold text-3xl mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                We empower organizations to maximize efficiency and achieve sustainable growth
                by streamlining financial processes, enhancing collaboration,
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
          <h2 className="font-heading font-bold text-4xl text-primary-900 mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-600 mb-8">Experience the difference that strategic financial guidance can make for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleBookClick} size="lg" className="bg-primary-900 hover:bg-primary-800 text-white">
              Schedule Free Consultation
            </Button>
            <Button onClick={handleContactClick} size="lg" variant="outline" className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
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
