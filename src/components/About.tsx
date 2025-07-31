
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We go beyond compliance to provide strategic insights that drive business success.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned financial professionals with over a decade of experience across diverse industries.'
    },
    {
      icon: CheckCircle,
      title: 'Trusted Partnership',
      description: 'We give clients the freedom to focus on their business while we manage financial complexities.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Helping businesses optimize budgets, improve reporting, and make data-driven decisions.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl text-primary-900 mb-6">
              About ProTax by KC Associates
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                ProTax by KC Associates is a trusted CPA firm offering expert tax filing, 
                tax strategy, accounting and external CFO solution services for entrepreneurial 
                businesses and individuals.
              </p>
              <p>
                Our team includes seasoned financial professionals with over a decade of 
                experience in tax filing, tax planning, financial forecasting, cash flow 
                and strategic business analysis across diverse industries.
              </p>
              <p>
                We specialize in helping businesses optimize budgets, improve financial 
                reporting, and make data-driven decisions with confidence. By streamlining 
                financial processes, enhancing cross-department collaboration, and implementing 
                financial tools, we empower organizations to maximize efficiency and achieve 
                sustainable growth.
              </p>
              <p className="font-semibold text-primary-900">
                At ProTax by KC Associates, we go beyond compliance—we provide the strategic 
                insights and clarity businesses need to thrive in today's competitive landscape.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary-900" size={24} />
                  </div>
                  <h3 className="font-semibold text-primary-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
