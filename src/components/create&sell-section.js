import React from 'react';
import { FaWallet, FaImages, FaBullhorn, FaTags } from 'react-icons/fa';
import '../components-style/create&sell-section.css';

function CreateSellSection() {
  return (
    <section className='createSellSection'>
      <h1>Create and Sell Now</h1>
      <div className='steps'>
        <div className='step'>
          <FaWallet className='step-icon' />
          <h2>Set up your wallet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className='step'>
          <FaImages className='step-icon' />
          <h2>Add your NFTs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className='step'>
          <FaBullhorn className='step-icon' />
          <h2>Promote your NFTs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <div className='step'>
          <FaTags className='step-icon' />
          <h2>Sell your NFTs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
      </div>
    </section>
  );
}

export default CreateSellSection;
