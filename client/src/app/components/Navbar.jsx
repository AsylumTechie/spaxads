import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-700 flex items-center">
          <Sparkles className="h-7 w-7 mr-2 text-blue-500" />
          CarSell Pro
        </a>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a></li>
          <li><a href="#sell-form" className="text-gray-600 hover:text-blue-600 font-medium">Sell Car</a></li>
          <li><a href="#howitworks" className="text-gray-600 hover:text-blue-600 font-medium">How it Works</a></li>
          <li><a href="#whyUs" className="text-gray-600 hover:text-blue-600 font-medium">Why Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
