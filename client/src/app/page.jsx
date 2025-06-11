"use client";
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import CarDetail from './components/CarDetail'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Sell Your Car Online</title>
        <meta name="description" content="Sell your used car quickly and easily." />
      </Head>

      <Navbar />
      <Hero />
      <HowItWorks />
      <CarDetail/>
      <WhyChooseUs/>
      <Footer/>
    
    </div>
  );
}