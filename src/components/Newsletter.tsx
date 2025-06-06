
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, TrendingUp } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest tax tips and financial insights.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-100 rounded-full p-4">
                <Mail className="text-primary-900" size={32} />
              </div>
            </div>
            
            <h2 className="font-heading font-bold text-3xl text-primary-900 mb-4">
              Stay Informed with Tax Tips & Financial Insights
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Get monthly updates on tax law changes, financial strategies, and business tips 
              directly from our expert CPA team.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1"
              />
              <Button 
                type="submit" 
                className="bg-primary-900 hover:bg-primary-800 text-white px-8"
              >
                Subscribe
              </Button>
            </form>

            <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
              <TrendingUp size={16} className="mr-2" />
              <span>Join 500+ business owners who trust our insights</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
