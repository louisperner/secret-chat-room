import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Pyramid(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/pyramid.glb");
  const { actions } = useAnimations(animations, group);

  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Pyramid004"
          castShadow
          receiveShadow
          geometry={nodes.Pyramid004.geometry}
          material={materials.Material}
          position={[0, -1.15, -0.01]}
          rotation={[3.14, -1, 3.14]}
          scale={[1.94, 1.56, 1.94]}
        />
        <mesh
          name="Pyramid006"
          castShadow
          receiveShadow
          geometry={nodes.Pyramid006.geometry}
          material={materials.Gold}
          position={[-0.24, -1.2, 0.19]}
          rotation={[3.14, -1, 3.14]}
          scale={[1.94, 1.56, 1.94]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Wind}
          position={[0, 0.46, 0]}
          rotation={[1.87, -0.15, -1.99]}
          scale={[-0.15, -0.3, -0.15]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/pyramid.glb");
