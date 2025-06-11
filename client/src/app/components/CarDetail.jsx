import {
  Car,
  Wrench,
  Calendar,
  DollarSign,
  XCircle,
  ChevronDown,
  CheckCircle,
  List,
} from "lucide-react";

import { useState, useMemo } from "react";
export default function CarDetail() {
  const [carData, setCarData] = useState({
    carNumber: "",
    carModel: "",
    carType: "",
    engineType: "",
    manufacturingYear: "",
    desiredSellingDate: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    type: "",
  });

  const handleChange = (e) =>
    setCarData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/sell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

      const result = await res.json();

      if (res.ok) {
        setModalContent({
          title: "Congratulations!",
          message:
            "Your car details have been submitted! We’ll contact you shortly.",
          type: "success",
        });
        setCarData({
          carNumber: "",
          carModel: "",
          carType: "",
          engineType: "",
          manufacturingYear: "",
          desiredSellingDate: "",
        });
      } else {
        setModalContent({
          title: "Failed",
          message: result.message || "Something went wrong.",
          type: "error",
        });
      }
    } catch (error) {
      setModalContent({
        title: "Network Error",
        message: "Check your connection and try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
      setModalOpen(true);
    }
  };

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 30 }, (_, i) => currentYear - i);
  }, []);
  return (
    <div>
    <main className="container mx-auto px-4 py-16">
      <section
        id="sell-form"
        className="bg-white rounded-xl shadow-2xl p-6 md:p-10 lg:p-12 max-w-4xl mx-auto border-t-8 border-blue-600 animate-fade-in-up"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-10 pb-4 border-b border-gray-100">
          Your Car Details
        </h2>
        <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Fill out the form below to get started. All fields are required to
          ensure an accurate valuation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="carNumber"
              className="block text-gray-800 text-base font-semibold mb-2"
            >
              <Car className="inline-block h-5 w-5 mr-2 text-blue-600" />
              Car Registration Number
            </label>
            <input
              type="text"
              id="carNumber"
              name="carNumber"
              value={carData.carNumber}
              onChange={handleChange}
              placeholder="e.g., DL XX YY 1234"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition duration-300 shadow-sm text-gray-800 placeholder-gray-400 text-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="carModel"
              className="block text-gray-800 text-base font-semibold mb-2"
            >
              <Wrench className="inline-block h-5 w-5 mr-2 text-blue-600" />
              Car Make & Model
            </label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={carData.carModel}
              onChange={handleChange}
              placeholder="e.g., Maruti Swift Dzire"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition duration-300 shadow-sm text-gray-800 placeholder-gray-400 text-lg"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="carType"
              className="block text-gray-800 text-base font-semibold mb-2"
            >
              <List className="inline-block h-5 w-5 mr-2 text-blue-600" />
              Car Type
            </label>
            <select
              id="carType"
              name="carType"
              value={carData.carType}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-3 px-5 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm transition duration-300 text-lg"
              required
            >
              <option value="">Select Car Type</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="MUV">MUV</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>
              <option value="Luxury">Luxury</option>
              <option value="Electric">Electric</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 top-7">
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="engineType"
              className="block text-gray-800 text-base font-semibold mb-2"
            >
              <Wrench className="inline-block h-5 w-5 mr-2 text-blue-600" />
              Engine Type
            </label>
            <select
              id="engineType"
              name="engineType"
              value={carData.engineType}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-3 px-5 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm transition duration-300 text-lg"
              required
            >
              <option value="">Select Engine Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 top-7">
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="manufacturingYear"
              className="block text-gray-800 text-base font-semibold mb-2"
            >
              <Calendar className="inline-block h-5 w-5 mr-2 text-blue-600" />
              Manufacturing Year
            </label>
            <select
              id="manufacturingYear"
              name="manufacturingYear"
              value={carData.manufacturingYear}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-3 px-5 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm transition duration-300 text-lg"
              required
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 top-7">
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>
          <div>
            <label
              htmlFor="desiredSellingDate"
              className="block text-gray-800 text-base font-semibold mb-2"
            >
              <Calendar className="inline-block h-5 w-5 mr-2 text-blue-600" />
              Desired Selling Date
            </label>
            <input
              type="date"
              id="desiredSellingDate"
              name="desiredSellingDate"
              value={carData.desiredSellingDate}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition duration-300 shadow-sm text-gray-800 text-lg"
              required
            />
          </div>
          <div className="md:col-span-2 text-center mt-8">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Get Free Valuation <DollarSign className="ml-3 h-7 w-7" />
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </main>
    {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-center">
            <div className="mb-4">
              {modalContent.type === "success" ? (
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto" />
              ) : (
                <XCircle className="h-10 w-10 text-red-500 mx-auto" />
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{modalContent.title}</h3>
            <p className="text-gray-700 mb-4">{modalContent.message}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
  );
}
