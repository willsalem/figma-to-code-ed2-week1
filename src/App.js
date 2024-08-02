import React from 'react';
import NavBar from './navBar';
import HeroSection from './components/hero-section';
import CollectionsSection from './components/collections-section';
import CreateSellSection from './components/create&sell-section';
import FrameSection from './components/frame';
import BottomNav from './bottomNav';
import './style.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CollectionsSection />
      <CreateSellSection />
      <FrameSection />
      <BottomNav />
    </div>
  );
}

export default App;
