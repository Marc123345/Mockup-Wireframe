import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import CardGrid from "./components/CardGrid";
import CardOverlay from "./components/CardOverlay";
import Footer from "./components/Footer";
import type { CardKey } from "./data/cards";

export default function App() {
  const [active, setActive] = useState<CardKey | null>(null);

  return (
    <div className="grain relative min-h-screen bg-[#0a0a0a] text-[#f0ece4] overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <CardGrid onOpen={setActive} />
      <Footer />
      <CardOverlay activeKey={active} onClose={() => setActive(null)} />
    </div>
  );
}
