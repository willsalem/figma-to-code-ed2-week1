import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../components-style/collections-section.css';
import monkey from '../images/monkey.png';
import space from '../images/space.png';
import spaceCase from '../images/space-case.png';
import snoop from '../images/snoop.png';
import boussole from '../images/boussole.png';

const CollectionsSection = () => {
  const collections = [
    { title: 'CyberPunk', image: monkey, bid: 68 },
    { title: 'Durolost Boll - Upper', image: space, bid: 68 },
    { title: 'Space X Wiper', image: spaceCase, bid: 68 },
    { title: 'Snoop Dogg', image: snoop, bid: 68 },
  ];

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <div className="collections-section">
      <h2>Our Collections</h2>
      <div className="categories">
        <button className="categorie" >All categories</button>
        <button>Art</button>
        <button>Celebrities</button>
        <button>Gaming</button>
        <button>Sport</button>
        <button>View more</button>
      </div>
      <div className={`collections-grid ${isDesktopOrLaptop ? 'desktop-grid' : isTablet ? 'tablet-grid' : 'mobile-grid'}`}>
        {collections.map((collection, index) => (
          <div key={index} className="collection-item">
            <img src={collection.image} alt={collection.title} className="collection-image"/>
            <div className="title-bid">
              <h3>{collection.title}</h3>
              <div className="bid-info">
                <img src={boussole} alt="boussole" className="boussole-icon"/>
                <span>: {collection.bid}</span>
              </div>
            </div>
            <button>Place a Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsSection;
