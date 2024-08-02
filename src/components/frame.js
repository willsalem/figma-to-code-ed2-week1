import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../components-style/frame.css';

function FrameSection() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });
  const isTabletOrMobile = useMediaQuery({  maxWidth: 1023 });
  
  return (
    <section className="frameSection">
      <div className={`frame ${isDesktopOrLaptop ? 'desktop' : isTabletOrMobile ? 'tablet' : 'mobile'}`}>
        <h1>Build your NFT profile</h1>
        <p>Join almost 10k NFT profiles on Digit !</p>
        <button>Sign Up now</button>
      </div>
    </section>
  );
}

export default FrameSection;
