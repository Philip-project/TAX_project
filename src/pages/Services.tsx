import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calculator, Briefcase, Users, CheckCircle, ArrowRight, Settings } from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0);
    }
  }, [location]);
  const detailedServices = [
    {
      id: 'tax',
      icon: FileText,
      title: 'Tax Services',
      description: 'Comprehensive tax solutions designed to minimize your liability and maximize your refunds.',
      services: [
        'Individual Tax Preparation',
        'Business Tax Filing',
        'Tax Planning & Strategy',
        'IRS Problem Resolution',
        'Tax Amendment Services',
        'Multi-State Tax Filing',
        'Estate & Trust Tax Returns',
        'Quarterly Tax Estimates'
      ],
      benefits: [
        'Maximize deductions and credits',
        'Ensure compliance with tax laws',
        'Strategic tax planning year-round',
        'Expert IRS representation'
      ]
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Complete financial management to keep your books accurate and your business running smoothly.',
      services: [
        'Monthly Bookkeeping',
        'Financial Statement Preparation',
        'Accounts Payable/Receivable',
        'Bank Reconciliation',
        'Payroll Processing',
        'Sales Tax Management',
        '1099 & W2 Preparation',
        'Property Income Reports'
      ],
      benefits: [
        'Real-time financial insights',
        'Improved cash flow management',
        'Accurate financial reporting',
        'Streamlined operations'
      ]
    },
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic guidance to help your business grow and thrive in competitive markets.',
      services: [
        'Business Plan Development',
        'Financial Forecasting',
        'Cash Flow Analysis',
        'Budget Creation & Management',
        'Performance Metrics',
        'Process Improvement',
        'Third-Party Reports',
        'Strategic Planning'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved profitability',
        'Enhanced operational efficiency',
        'Strategic growth planning'
      ]
    },
    {
      icon: Users,
      title: 'External CFO Services',
      description: 'Part-time CFO expertise without the full-time cost, perfect for growing businesses.',
      services: [
        'Financial Strategy Development',
        'Board Meeting Preparation',
        // 'Investor Relations Support',
        'Risk Management',
        'Capital Structure Planning',
        'Software Implementation',
        'Financial Controls Implementation',
        'Executive Reporting'
      ],
      benefits: [
        'C-level financial expertise',
        'Cost-effective solution',
        'Strategic financial leadership',
        'Enhanced investor confidence'
      ]
    },
    {
      icon: Settings,
      title: 'Administrative Services',
      description: 'Part-time CFO expertise without the full-time cost, perfect for growing businesses.',
      services: [
        'P&L Support',
        'Ad Hoc Support/Special projects',
        'Assist with special reporting needs',
        'Assistance with non frequent reports/special reports',
      ],
      benefits: [
        'C-level financial expertise',
        'Cost-effective solution',
        'Strategic financial leadership',
        'Enhanced investor confidence'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your business needs.
            From tax preparation to strategic CFO services, we've got you covered.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {detailedServices.map((service, index) => {
              // Generate consistent ID for each service section
              let serviceId = service.title.toLowerCase().replace(/\s+/g, '-');

              // Special cases to match footer links exactly
              if (service.title.toLowerCase().includes('cfo')) {
                serviceId = 'external-cfo';
              } else if (service.title.toLowerCase() === 'accounting services') {
                serviceId = 'accounting';
              } else if (service.title.toLowerCase() === 'business consulting') {
                serviceId = 'business-consulting';
              } else if (service.title.toLowerCase() === 'administrative services') {
                serviceId = 'administrative-services';
              } else if (service.id) {
                serviceId = service.id;
              }

              return (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div id={serviceId} className={`${index % 2 === 1 ? 'lg:order-2' : ''} scroll-mt-24`}>
                    <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <service.icon className="text-primary-900" size={32} />
                    </div>
                    <h2 className="font-heading font-bold text-3xl text-primary-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="font-semibold text-xl text-primary-900 mb-4">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <CheckCircle className="text-secondary-600 mr-3" size={20} />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={() => {
                        window.scrollTo(0, 0);
                        navigate('/booking');
                      }}
                      className="bg-primary-900 text-white transition-all duration-300 transform hover:bg-primary-800 hover:scale-105 hover:shadow-lg"
                    >
                      Get Started
                      <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                    </Button>

                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Card className="shadow-xl border border-transparent hover:border-primary-300 transition-transform duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary-900">
                          What's Included:
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.services.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-secondary-600 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl text-primary-900 mb-6">
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a free consultation to discuss your specific needs and learn how we can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-900 hover:bg-primary-800 text-white"
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/booking');
              }}
            >
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
              onClick={() => {
                navigate('/contact#contact-form');
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
