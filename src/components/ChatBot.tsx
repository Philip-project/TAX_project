
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm here to help you navigate our website and answer questions about our services. How can I assist you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickResponses = [
    { text: "What services do you offer?", response: "We offer comprehensive tax services, accounting, business consulting, and external CFO services. Would you like to know more about any specific service?" },
    { text: "How can I book an appointment?", response: "You can book an appointment by clicking the 'Book Appointment' button in our navigation menu or visiting our booking page. We offer both in-person and virtual consultations." },
    { text: "What are your rates?", response: "Our rates vary depending on the service and complexity of your needs. We offer free initial consultations where we can discuss your specific requirements and provide transparent pricing." },
    { text: "Do you work with small businesses?", response: "Absolutely! We specialize in working with entrepreneurial businesses of all sizes, from startups to established companies. We tailor our services to meet your specific business needs." }
  ];

  const handleSendMessage = (messageText: string) => {
    const newMessage = { id: messages.length + 1, text: messageText, isBot: false };
    setMessages([...messages, newMessage]);
    
    // Find matching response or provide default
    const quickResponse = quickResponses.find(qr => qr.text === messageText);
    const botResponse = quickResponse 
      ? quickResponse.response 
      : "Thank you for your message! For detailed information, please feel free to contact us directly or book a consultation. Our team will be happy to assist you with your specific needs.";
    
    setTimeout(() => {
      const botMessage = { id: messages.length + 2, text: botResponse, isBot: true };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInputMessage('');
  };

  const handleCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      handleSendMessage(inputMessage);
    }
  };

  return (
    <>
      {/* Chat Bot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-secondary-600 hover:bg-secondary-700 text-white rounded-full w-14 h-14 shadow-lg"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Bot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96">
          <Card className="h-full shadow-2xl border-0">
            <CardHeader className="bg-primary-900 text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="mr-2" size={20} />
                ProTax Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-full flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-primary-900 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Buttons */}
              <div className="p-3 border-t">
                <div className="grid grid-cols-1 gap-2 mb-3">
                  {quickResponses.slice(0, 2).map((response, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSendMessage(response.text)}
                      className="text-xs text-left h-auto py-2"
                    >
                      {response.text}
                    </Button>
                  ))}
                </div>

                {/* Message Input */}
                <form onSubmit={handleCustomMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Button type="submit" size="sm" className="bg-primary-900 hover:bg-primary-800">
                    <Send size={16} />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;
