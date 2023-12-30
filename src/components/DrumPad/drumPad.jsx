import Pad from "../Pad/pad";
import React, { Component }  from 'react';
import "./drumPad.sass";
import { sound } from '../../data/sound';

const DrumPad = () => {
    return (
        <div className='drumPad'>
            {sound && sound.map((pad, idx) => (
                <Pad
                    key={idx}
                    id={pad.id}
                    url={pad.url}
                    keyCode={pad.keyCode} 
                    keyChar={pad.keyChar}
                />
            ))}
        </div>
    )
}

export default DrumPad;