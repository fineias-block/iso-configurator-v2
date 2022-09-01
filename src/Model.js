import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import state from './state';

export default function Model({...props}) {
    const group = useRef();
    const snap = useSnapshot(state);

    const { nodes, materials } = useGLTF('/model.glb');

    const [hovered, set] = useState(null);
    useEffect(() => {
        const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
        const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
        document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
            hovered ? cursor : auto,
        )}'), auto`;
    }, [hovered, snap.items]);

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            onPointerOver={(e) => {
                e.stopPropagation();
                set(e.object.material.name);
            }}
            onPointerOut={(e) => {
                e.intersections.length === 0 && set(null);
            }}
            onPointerDown={(e) => {
                e.stopPropagation();
                state.current = e.object.material.name;
            }}
            onPointerMissed={(e) => {
                state.current = null;
            }}
        >
            <group rotation={[0, 0, 0]}>
                {snap.show.mesh && (
                    <mesh
                        material-color={snap.items.mesh}
                        geometry={nodes.shoe.geometry}
                        material={materials.mesh}
                    />
                )}
                {snap.show.sole && (
                    <mesh
                        material-color={snap.items.sole}
                        geometry={nodes.shoe_1.geometry}
                        material={materials.sole}
                    />
                )}
                {snap.show.stripes && (
                    <mesh
                        material-color={snap.items.stripes}
                        geometry={nodes.shoe_2.geometry}
                        material={materials.stripes}
                    />
                )}
                {snap.show.band && (
                    <mesh
                        material-color={snap.items.band}
                        geometry={nodes.shoe_3.geometry}
                        material={materials.band}
                    />
                )}
                {snap.show.caps && (
                    <mesh
                        material-color={snap.items.caps}
                        geometry={nodes.shoe_4.geometry}
                        material={materials.caps}
                    />
                )}
                {snap.show.patch && (
                    <mesh
                        material-color={snap.items.patch}
                        geometry={nodes.shoe_5.geometry}
                        material={materials.patch}
                    />
                )}
                {snap.show.inner && (
                    <mesh
                        material-color={snap.items.inner}
                        geometry={nodes.shoe_6.geometry}
                        material={materials.inner}
                    />
                )}
                {snap.show.laces && (
                    <mesh
                        material-color={snap.items.laces}
                        geometry={nodes.shoe_7.geometry}
                        material={materials.laces}
                    />
                )}
            </group>
        </group>
    );
}

useGLTF.preload('/model.glb');
