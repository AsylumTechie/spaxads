export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-400">CarSell Pro</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          Your trusted partner for selling used cars. We offer fair valuations and a seamless selling experience.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Home</a></li>
          <li><a href="#sell-form" className="text-gray-400 hover:text-white transition duration-200">Sell Your Car</a></li>
          <li><a href="#howitworks" className="text-gray-400 hover:text-white transition duration-200">How It Works</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">FAQs</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
        <p className="text-gray-400 text-sm">
          Aya Nagara H block New Dlehi<br />
          Email: info@carsellpro.com<br />
          Phone: +1 (123) 456-7890
        </p>
      </div>
    </div>
    <div className="container mx-auto px-4 border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} CarSell Pro. All rights reserved.</p>
    </div>
  </footer>
  );
}
