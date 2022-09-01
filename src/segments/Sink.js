import React from 'react';

import { useSnapshot } from 'valtio';
import state from '../state';

import '../App.css';

const baseUrl = '/iso-configurator/segments/sink/';

const Sink = () => {
    const snap = useSnapshot(state);
    return (
        <>
            {state.sink && (
                <img
                    className='segment-item'
                    src={`${baseUrl}${snap.sink}.webp`}
                    alt='sink'
                ></img>
            )}
        </>
    );
};

export default Sink;
