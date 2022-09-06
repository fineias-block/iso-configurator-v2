import React from 'react';

import Controls from './Controls';
import Base from './segments/Base';
import Floor from './segments/Floor';
import Toilet from './segments/Toilet';
import Divider from './segments/Divider';
import Sink from './segments/Sink';

import './App.css';

import RoomCanvasReact from './canvas/RoomCanvasReact';
import { useSnapshot } from 'valtio';
import state from './state';

function App() {
  const snap = useSnapshot(state);
  const baseUrl = '/iso-configurator/segments/';

  console.log(snap);

  const onClick = (label) => {
    console.log(`clicked on layer ${label}`);
  }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Controls />
            <RoomCanvasReact
              onClick={onClick}
              base={`${baseUrl}base/${snap.base}.webp`}
              floor={`${baseUrl}floor/${snap.floor}.webp`}
              sink={`${baseUrl}sink/${snap.sink}.webp`}
              divider={`${baseUrl}divider/${snap.divider}.webp`}
              toilet={`${baseUrl}toilet/${snap.toilet}.webp`}
            />
        </div>
    );
}

export default App;
