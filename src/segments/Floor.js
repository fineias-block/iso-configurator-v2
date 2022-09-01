import React from 'react';

import { useSnapshot } from 'valtio';
import state from '../state';

import '../App.css';

const baseUrl = '/iso-configurator/segments/floor/';

const Floor = () => {
    const snap = useSnapshot(state);
    return (
        <>
            {state.floor && (
                <img
                    className='segment-item'
                    src={`${baseUrl}${snap.floor}.webp`}
                    alt='floor'
                ></img>
            )}
        </>
    );
};

export default Floor;
