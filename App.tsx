
import React from 'react';
import './src/index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Themes from './components/Themes';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
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
