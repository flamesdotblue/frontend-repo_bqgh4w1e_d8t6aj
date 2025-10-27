import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import HomeShowcases from './components/HomeShowcases';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}
    >
      {/* Left sidebar */}
      <Sidebar />

      {/* Main content area with left padding for sidebar */}
      <main className="pl-64">
        {/* Hero with Display typography for bold, cinematic feel */}
        <section style={{ fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif' }} id="home">
          <Hero />
        </section>

        {/* Use cases with clean sans-serif readability */}
        <section style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }} id="use-cases">
          <HomeShowcases />
        </section>

        {/* Waitlist with a refined serif accent for form labels and headings */}
        <section style={{ fontFamily: '"LT Remark", "LT Remark Placeholder", serif' }} id="waitlist">
          <Waitlist />
        </section>

        {/* Footer set in classic Times New Roman for a distinguished finish */}
        <section style={{ fontFamily: '"Times New Roman", serif' }}>
          <Footer />
        </section>
      </main>
    </div>
  );
}
