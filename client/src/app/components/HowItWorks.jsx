import { List, Clock, DollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: '1. Submit Details',
      description: 'Provide essential information about your car through our easy-to-use online form.',
      icon: <List className="h-10 w-10 text-blue-600" />,
      bg: 'bg-blue-50',
    },
    {
      title: '2. Instant Valuation',
      description: 'Receive a real-time valuation based on market data and your car\'s specifics.',
      icon: <Clock className="h-10 w-10 text-green-600" />,
      bg: 'bg-green-50',
    },
    {
      title: '3. Get Paid!',
      description: 'Accept the offer, and we\'ll arrange a smooth transaction and payment.',
      icon: <DollarSign className="h-10 w-10 text-purple-600" />,
      bg: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-20 bg-white" id="howitworks">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md hover:shadow-xl text-center transition transform hover:-translate-y-1 ${step.bg}`}>
              <div className="p-4 bg-white rounded-full mb-4 inline-block">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
