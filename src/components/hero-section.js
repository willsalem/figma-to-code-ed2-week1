import React from 'react';
import '../components-style/hero-section.css';
import machine from '../images/machine.png';
import nft from '../images/nft.png';
import star from '../images/stars-remove.png';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>See the NFT </h1>
                <div className="hero-content">
                    <h1>new world</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>
                <div className="discover-button">
                    <span>Discover Vow</span>
                    <span className="arrow">→</span>
                </div>
            </div>
            <div className="hero-images">
                <img src={star} alt="NFT 1" className="hero-image third-image"/>
                <img src={machine} alt="NFT 1" className="hero-image first-image"/>
                <img src={nft} alt="NFT 2" className="hero-image second-image"/>
            </div>
        </section>
    );
}

export default HeroSection;
