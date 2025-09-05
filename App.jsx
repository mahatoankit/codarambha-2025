import React from 'react';
import './src/index.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Themes from './components/Themes.jsx';
import { TimelineDemo } from './components/ui/timeline.jsx';
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
        <About />
        <Themes />
        <TimelineDemo />
        <Registration />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default App;
