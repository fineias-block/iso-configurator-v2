import React from 'react';

import { useSnapshot } from 'valtio';
import state from '../state';

import '../App.css';

const baseUrl = '/iso-configurator/segments/base/';

const Base = () => {
    const snap = useSnapshot(state);
    return (
        <>
            {state.base && (
                <img
                    className='segment-item'
                    src={`${baseUrl}${snap.base}.webp`}
                    alt='base'
                ></img>
            )}
        </>
    );
};

export default Base;
