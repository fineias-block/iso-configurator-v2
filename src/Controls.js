import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import './App.css';

import { useSnapshot } from 'valtio';

import state from './state';

const Controls = () => {
    const snap = useSnapshot(state);


    const handleFloorChange = (event) => {
        state.floor = event.target.value;
    };

    const handleBaseChange = (event) => {
        state.base = event.target.value;
    };

    const handleSinkChange = (event) => {
        state.sink = event.target.value;
    };

    const handleDividerChange = (event) => {
        state.divider = event.target.value;
    };

    return (
        <div className='controls-container'>
            <div className='controls-category'>
                <div className='controls-label'>Main Floor</div>
                <ToggleButtonGroup
                    color='primary'
                    value={snap.floor}
                    exclusive
                    onChange={handleFloorChange}
                >
                    <ToggleButton value='Floor1'>F1</ToggleButton>
                    <ToggleButton value='Floor2'>F2</ToggleButton>
                    <ToggleButton value='Floor3'>F3</ToggleButton>
                    <ToggleButton value='Floor4'>F4</ToggleButton>
                    <ToggleButton value='Floor5'>F5</ToggleButton>
                    <ToggleButton value='Floor6'>F6</ToggleButton>
                    <ToggleButton value='Floor7'>F7</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='controls-category'>
                <div className='controls-label'>Sink</div>
                <ToggleButtonGroup
                    color='primary'
                    value={snap.sink}
                    exclusive
                    onChange={handleSinkChange}
                >
                    <ToggleButton value='Sink1'>S1</ToggleButton>
                    <ToggleButton value='Sink2'>S2</ToggleButton>
                    <ToggleButton value='Sink3'>S3</ToggleButton>
                    <ToggleButton value='Sink4'>S4</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='controls-category'>
                <div className='controls-label'>Glass</div>
                <ToggleButtonGroup
                    color='primary'
                    value={snap.divider}
                    exclusive
                    onChange={handleDividerChange}
                >
                    <ToggleButton value='Divider1'>G1</ToggleButton>
                    <ToggleButton value='Divider2'>G2</ToggleButton>
                    <ToggleButton value='Divider3'>G3</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='controls-category'>
                <div className='controls-label'>Base</div>
                <ToggleButtonGroup
                    color='primary'
                    value={snap.base}
                    exclusive
                    onChange={handleBaseChange}
                >
                    <ToggleButton value='Base1'>B1</ToggleButton>
                    <ToggleButton value='Base2'>B2</ToggleButton>
                    <ToggleButton value='Base3'>B3</ToggleButton>
                    <ToggleButton value='Base4'>B4</ToggleButton>
                    <ToggleButton value='Base5'>B5</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    );
};

export default Controls;
