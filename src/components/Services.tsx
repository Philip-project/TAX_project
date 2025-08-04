import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calculator, Briefcase, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Tax Services',
      description: 'Comprehensive tax solutions for individuals and businesses',
      color: 'from-blue-500 to-blue-600',
      features: [
        'IRS filing/Tax preparation',
        'Tax planning & strategy',
        'Tax problem consulting',
        'IRS and state inquiry response',
        'New business setup services'
      ]
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Complete bookkeeping and financial management',
      color: 'from-teal-500 to-teal-600',
      features: [
        'Bookkeeping (cleanup & ongoing)',
        '1099 and W2 reports',
        'Sales tax management',
        'Payroll support',
        'State registrations',
        'Annual reports',
        'Property income/expense reports'
      ]
    },
    {
      icon: Briefcase,
      title: 'Business Consulting',
      description: 'Strategic insights for business growth',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Third-party business reports',
        'Financial forecasting',
        'Cash flow analysis',
        'Strategic business analysis',
        'Budget optimization',
        'Financial process improvement'
      ]
    },
    {
      icon: Users,
      title: 'External CFO Services',
      description: 'Part-time CFO expertise for growing businesses',
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Financial Strategy Development',
        'Board Meeting Preparation',
        'Investor Relations Support',
        'Risk Management',
        'Capital Structure Planning',
        'Software Implementation',
        'Financial Controls Implementation',
        'Executive Reporting'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="font-heading font-bold text-5xl text-slate-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From tax compliance to strategic planning, we provide the expertise 
            your business needs to thrive in today's competitive landscape.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <CardTitle className="font-heading text-2xl text-slate-900 mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-slate-600 text-lg">{service.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
