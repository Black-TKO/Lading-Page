import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Universe from './components/Universe';
import Team from './components/Team';
import Support from './components/Support';
import Future from './components/Future';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <Hero />
      <Universe />
      <Team />
      <Support />
      <Future />
      <Footer />
    </div>
  );
}
