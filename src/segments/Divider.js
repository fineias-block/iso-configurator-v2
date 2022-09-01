import React from 'react';

import { useSnapshot } from 'valtio';
import state from '../state';

import '../App.css';

const baseUrl = '/iso-configurator/segments/divider/';

const Divider = () => {
    const snap = useSnapshot(state);
    return (
        <>
            {state.divider && (
                <img
                    className='segment-item'
                    src={`${baseUrl}${snap.divider}.webp`}
                    alt='divider'
                ></img>
            )}
        </>
    );
};

export default Divider;
