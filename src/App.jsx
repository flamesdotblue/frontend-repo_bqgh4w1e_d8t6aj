import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import HomeShowcases from './components/HomeShowcases';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* left sidebar */}
      <Sidebar />

      {/* main content area with left padding for sidebar */}
      <main className="pl-64">
        <Hero />
        <HomeShowcases />
        <Footer />
      </main>
    </div>
  );
}
