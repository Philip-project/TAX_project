import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
// import Chatbot from '../components/ChatBot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';
 
const Booking = () => {
  const { toast } = useToast();
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Requested!",
      description: "We'll contact you within 24 hours to confirm your consultation.",
    });
  };
 
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
     
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-800 text-white py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl mb-6">Schedule Your Consultation</h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Book a free consultation with our expert CPA team. We'll discuss your needs
            and create a customized financial strategy for your success.
          </p>
        </div>
      </section>
 
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Book Appointment Button - Centered at Top */}
          <div className="flex justify-center mb-12">
           <Button
  onClick={() => window.open(
    "https://calendly.com/bandimahendra597/new-meeting?month=2025-08&date=2025-08-23",
    "_blank"
  )}
  className="bg-primary-900 hover:bg-primary-800 text-white text-lg py-5 px-14"
  size="lg"
>
  Book Appointment
</Button>
          </div>
 
          {/* Three Cards Below - Compact version */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* What to Expect */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-primary-900 flex items-center">
                  <Calendar className="text-secondary-600 mr-2" size={20} />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-4 pb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">30-60 Minute Session</h4>
                  <p className="text-sm text-gray-600">Financial needs review</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">No Obligation</h4>
                  <p className="text-sm text-gray-600">Free consultation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Follow-up Proposal</h4>
                  <p className="text-sm text-gray-600">Customized solutions</p>
                </div>
              </CardContent>
            </Card>
 
            {/* Contact Information */}
            <Card className="shadow-lg bg-primary-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-primary-900 flex items-center">
                  <Phone className="text-secondary-600 mr-2" size={20} />
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 px-4 pb-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-secondary-600" size={18} />
                  <span className="text-gray-700">(475) 529-6839</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-secondary-600" size={18} />
                  <span className="text-gray-700">protaxbykc@gmail.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="text-secondary-600 mt-1" size={18} />
                  <span className="text-gray-700">123 Main St, KC, MO 64111</span>
                </div>
              </CardContent>
            </Card>
 
            {/* Business Hours */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-primary-900 flex items-center">
                  <Clock className="text-secondary-600 mr-2" size={20} />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mon-Fri</span>
                    <span className="text-gray-900 font-medium">9AM - 5PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">By Appt</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
 
      <Footer />
      {/* <Chatbot /> */}
    </div>
  );
};
 
export default Booking;