import "./pad.sass";
import React, { Component }  from 'react';
import { useEffect, useRef } from 'react';
import { useStateValue } from "../../stateProvider";
import { actionTypes } from "../../reducer";

const Pad = props => {

    const audioRef = useRef();
    const padRef = useRef();
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const handlePad = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        lightenPad();
        dispatch({
            type: actionTypes.SET_DISPLAY,
            soundName: props.id
        })
    }

    const handleKey = (e) => {
        if (e.keyCode === props.keyCode) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            lightenPad();
            dispatch({
                type: actionTypes.SET_DISPLAY,
                soundName: props.id
            })
        }
    };

    const lightenPad = () => {
        padRef.current.classList.add('active');
        setTimeout(() => {
            padRef.current.classList.remove('active')
        }, 100);
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKey);
        return () => {
            window.removeEventListener('keydown', handleKey);
        };
    });

    return (
        <div
            className='pad'
            key={props.idx}
            onClick= {handlePad}
            ref={padRef}
        >
            <audio
                ref={audioRef}
                src={props.url}
                id={props.keyTrigger}
                className='clip'
            ></audio>
            <div className="pad__info">
                <span className='pad__key'>{`${props.keyChar}. `}</span>
                <span className='pad__soundname'>{props.id}</span>
            </div>
        </div>
    )
}

export default Pad;