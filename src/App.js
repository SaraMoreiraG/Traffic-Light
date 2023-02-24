import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  return (
    <div className="trafficLight">
      <div className='trafficTop bg-dark mx-auto' style={{ height: '180px', width: '35px' }}></div>
      <div className='container bg-dark rounded-4 mx-auto p-3' style={{ height: '520px', width: '250px' }}>
        <div className={`red light ${color === 'red' ? 'red light selected' : ''}`} onClick={() => setColor('red')}></div>
        <div className={`orange light ${color === 'orange' ? 'orange light selected' : ''}`} onClick={() => setColor('orange')}></div>
        <div className={`green light ${color === 'green' ? 'green light selected' : ''}`} onClick={() => setColor('green')}></div>
      </div>
    </div>
  );
}

export default App;
