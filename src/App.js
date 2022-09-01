import React from 'react';

import Controls from './Controls';
import Base from './segments/Base';
import Floor from './segments/Floor';
import Toilet from './segments/Toilet';
import Divider from './segments/Divider';
import Sink from './segments/Sink';

import './App.css';

function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Controls />
            <div className='segment-container'>
                <Base />
                <Floor />
                <Divider />
                <Sink />
                <Toilet />
            </div>
        </div>
    );
}

export default App;
