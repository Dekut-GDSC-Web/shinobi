import React, {useState} from 'react';
import './Counter.css'

function Home() {
  return (
    <div>
      <h2>React Counter</h2>
      <div className='count'>0</div>
      <button className='subtract'>-</button>
      <button className='add'>+</button>
    </div>
  );
}

export default Home;
