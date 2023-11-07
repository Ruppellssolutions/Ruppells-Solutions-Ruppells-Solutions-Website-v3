import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Box = ({ mouse }) => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x = mouse.current.y * 2;
            meshRef.current.rotation.y = mouse.current.x * 2;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    );
};

const Scene = () => {
    const mouse = useRef({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    return (
        <Canvas onMouseMove={handleMouseMove}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box mouse={mouse} />
        </Canvas>
    );
};

export default Scene;
