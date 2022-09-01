import React from 'react';

import { useSnapshot } from 'valtio';
import state from '../state';

import '../App.css';

const baseUrl = '/iso-configurator/segments/toilet/';

const Toilet = () => {
    const snap = useSnapshot(state);
    return (
        <>
            {state.toilet && (
                <img
                    className='segment-item'
                    src={`${baseUrl}${snap.toilet}.webp`}
                    alt='toilet'
                ></img>
            )}
        </>
    );
};

export default Toilet;
