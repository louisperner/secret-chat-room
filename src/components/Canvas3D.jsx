import React, { Suspense } from "react";
import { PerspectiveCamera, Stage } from "@react-three/drei";
import { Pyramid } from "../threejs/Pyramid";
import { Canvas } from "@react-three/fiber";

const Canvas3D = () => {
    return (
        <Canvas id="scene" dpr={[1, 2]} camera={{ fov: 60 }}>
            <Suspense fallback={null}>
                <Stage environment={null}>
                    <Pyramid />
                </Stage>
            </Suspense>
            <PerspectiveCamera
                makeDefault
                position={[500, 0.9, 1.8]}
                fov={60}
                zoom={0.8}
            />
        </Canvas>
    );
}

export default Canvas3D;