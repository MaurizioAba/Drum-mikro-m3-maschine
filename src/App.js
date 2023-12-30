import './Drum.sass';
import React, { useState } from 'react';
import Display from './components/Display/display';
import DrumPad from './components/DrumPad/drumPad';
import { useStateValue } from './stateProvider';

import Slider from 'react-slider';

const App = () => {
  //stato per tenere traccia del valore del volume in progress
  const [volume, setVolume] = useState(50);

  const [{githubProfileUrl}] = useStateValue();

  return (
    <div className='machine__wrp' id='drum-machine'>
      {/* Aggiungi lo slider del volume */}
      <Slider
        value={volume}
        onChange={(newValue) => setVolume(newValue)}
      />
      <p>{githubProfileUrl}</p>
      <Display />
      <DrumPad />
    </div>
  );
};

export default App;
