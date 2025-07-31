
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, MapPin, Video, Phone, Mail } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    meetingType: 'virtual',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Requested!",
      description: "We'll contact you within 24 hours to confirm your consultation.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      meetingType: 'virtual',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Tax Services',
    'Accounting Services',
    'Business Consulting',
    'External CFO Services',
    'Payroll Support',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-secondary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl mb-6">Schedule Your Consultation</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Book a free consultation with our expert CPA team. We'll discuss your needs 
            and create a customized financial strategy for your success.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-900">
                    Book Your Free Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Meeting Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meeting Preference *
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { value: 'virtual', label: 'Virtual Meeting', icon: Video },
                          { value: 'in-person', label: 'In-Person', icon: MapPin },
                          { value: 'phone', label: 'Phone Call', icon: Phone }
                        ].map((option) => (
                          <label key={option.value} className="cursor-pointer">
                            <input
                              type="radio"
                              name="meetingType"
                              value={option.value}
                              checked={formData.meetingType === option.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className={`p-4 border rounded-lg text-center transition-colors ${
                              formData.meetingType === option.value
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-300 hover:border-primary-300'
                            }`}>
                              <option.icon className="mx-auto mb-2 text-primary-600" size={24} />
                              <span className="text-sm font-medium">{option.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <Input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your specific needs or questions..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary-900 hover:bg-primary-800 text-white text-lg py-3"
                    >
                      Schedule Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Information */}
            <div className="space-y-8">
              {/* What to Expect */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-secondary-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">30-60 Minute Session</h4>
                      <p className="text-sm text-gray-600">Comprehensive review of your financial needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="text-secondary-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">No Obligation</h4>
                      <p className="text-sm text-gray-600">Free consultation with no pressure to commit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-secondary-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Follow-up Proposal</h4>
                      <p className="text-sm text-gray-600">Detailed proposal with customized solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg bg-primary-50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-900">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    For urgent matters or questions about scheduling, contact us directly:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-secondary-600" size={20} />
                      <span className="text-gray-700">(816) 555-0123</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-secondary-600" size={20} />
                      <span className="text-gray-700">info@protaxbykc.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-secondary-600 mt-1" size={20} />
                      <span className="text-gray-700">123 Main Street<br />Kansas City, MO 64111</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-900">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900 font-medium">By Appointment</span>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
