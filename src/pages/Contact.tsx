
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Newsletter from '@/components/Newsletter';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(475) 529-6839',
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Protaxbykc@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      content: 'Chat Assistant',
      description: 'Available 24/7 on our website'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Main Street, Kansas City, MO 64111',
      description: 'Visit us by appointment'
    }
  ];

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We provide comprehensive tax services, accounting, business consulting, and external CFO services for businesses and individuals.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the complexity and scope of services needed. We offer free consultations to discuss your specific needs and provide transparent pricing.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We specialize in working with entrepreneurial businesses of all sizes, from startups to established companies.'
    },
    {
      question: 'Can you help with IRS issues?',
      answer: 'Yes, we provide tax problem consulting and can help resolve IRS and state tax inquiries and issues.'
    },
    {
      question: 'Do you offer virtual consultations?',
      answer: 'Yes, we offer both in-person and virtual consultations to accommodate your preferences and schedule.'
    },
    {
      question: 'How quickly can you respond to urgent matters?',
      answer: 'For urgent tax or financial matters, we typically respond within 4-6 hours during business hours. Contact us directly for immediate assistance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to take control of your finances? Get in touch with our expert team 
            and discover how we can help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-primary-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="text-primary-900" size={32} />
                  </div>
                  <h3 className="font-semibold text-xl text-primary-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-900 font-medium mb-2">{method.content}</p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Hours & Location */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="text-primary-900 mr-3" size={32} />
                  <h3 className="font-heading font-bold text-2xl text-primary-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-primary-900 font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-primary-900 font-semibold">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> During tax season (January - April), we offer extended hours and weekend appointments to better serve our clients.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="text-primary-900 mr-3" size={32} />
                  <h3 className="font-heading font-bold text-2xl text-primary-900">
                    Visit Our Office
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-700">
                      123 Main Street<br />
                      Suite 200<br />
                      Kansas City, MO 64111
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                    <p className="text-gray-700">
                      Free parking available in the building garage. 
                      Visitor spaces are located on the second level.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Public Transit</h4>
                    <p className="text-gray-700">
                      Conveniently located near bus routes 15 and 23. 
                      The Main Street Trolley stops directly in front of the building.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-primary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your question answered?
            </p>
            <Card className="inline-block bg-primary-50 border-primary-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Users className="text-primary-900" size={24} />
                  <span className="text-primary-900 font-medium">
                    Contact us directly for personalized assistance
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
