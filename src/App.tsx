import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;