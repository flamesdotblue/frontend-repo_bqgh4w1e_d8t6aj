import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Hero from './components/Hero.jsx';
import HomeShowcases from './components/HomeShowcases.jsx';
import Waitlist from './components/Waitlist.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar />
      <main className="md:pl-20">
        <Hero />
        <HomeShowcases />
        <Waitlist />
        <Footer />
      </main>
    </div>
  );
}
