import React from 'react';
import './src/index.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MarqueeSection from './components/MarqueeSection.jsx';
import About from './components/About.jsx';
import Themes from './components/Themes.jsx';
import Schedule from './components/Schedule.jsx';
import Registration from './components/Registration.jsx';
import Team from './components/Team.jsx';
import Sponsors from './components/Sponsors.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <MarqueeSection />
        <About />
        <Themes />
        <Schedule />
        <Registration />
        <Team />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
