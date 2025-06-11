import { Send } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-r from-blue-700 to-indigo-800 py-32 text-white overflow-hidden shadow-xl">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542362567-b07281cd92b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury car on road"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-5">Sell Your Car, The Smart Way.</h1>
        <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">
          Experience a seamless, transparent, and profitable car selling journey. Get an instant quote in minutes!
        </p>
        <a href="#sell-form" className="inline-flex items-center bg-white text-blue-800 font-bold py-4 px-10 rounded-full shadow-xl">
          Get Started <Send className="ml-3 h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
