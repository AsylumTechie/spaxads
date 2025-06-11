import { Car, Wrench, Calendar, DollarSign, Send, CheckCircle, XCircle, ChevronDown, List, Clock, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {

  return (
    <section className="py-20 bg-blue-700 text-white shadow-inner" id="whyUs">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-12">Why Choose CarSell Pro?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
          <Sparkles className="h-12 w-12 text-blue-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Best Price</h3>
          <p className="text-blue-200">Our advanced algorithm ensures you get the most competitive offer.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
          <Clock className="h-12 w-12 text-blue-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quick Process</h3>
          <p className="text-blue-200">Sell your car in just a few simple steps, saving you time.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
          <CheckCircle className="h-12 w-12 text-blue-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Hassle-Free</h3>
          <p className="text-blue-200">We handle all the paperwork, inspection, and transfer for you.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
          <Car className="h-12 w-12 text-blue-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Any Car, Any Condition</h3>
          <p className="text-blue-200">We buy a wide range of vehicles, regardless of age or condition.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
