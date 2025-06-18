import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import FirstRound from './components/FirstRound';
import Guide from './components/Guide';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Rewards from './components/Rewards';
import SecondRound from './components/SecondRound';
import Timeline from './components/Timeline';
import ZerothRound from './components/ZerothRound';

function HomePage() {
  return (
    <>
      <Hero />
      <section data-section="about"><About /></section>
      <section data-section="timeline"><Timeline /></section>
      <section data-section="rewards"><Rewards /></section>
      <section data-section="guide"><Guide /></section>
      <section data-section="contact-us"><ContactUs /></section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zeroth" element={<ZerothRound />} />
        <Route path="/first" element={<FirstRound />} />
        <Route path="/second" element={<SecondRound />} />
      </Routes>
    </Router>
  );
}

export default App;
