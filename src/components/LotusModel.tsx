import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const LotusModel = () => {
  const petalRef = useRef<Mesh>(null);
  const centerRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (petalRef.current && centerRef.current) {
      petalRef.current.rotation.y += 0.005;
      centerRef.current.rotation.y -= 0.003;
    }
  });

  const createPetal = (rotation: number, color: string) => (
    <mesh
      position={[0, 0, 0]}
      rotation={[0, rotation, 0]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.5, 0.1, 2]} />
      <meshStandardMaterial
        color={color}
        metalness={0.1}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );

  return (
    <group position={[0, 0, 0]}>
      {/* Lotus Center */}
      <mesh ref={centerRef} position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#F59E0B"
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Lotus Petals */}
      <group ref={petalRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <group key={i} rotation={[Math.PI / 6, 0, 0]}>
            {createPetal((Math.PI * 2 * i) / 8, '#7C3AED')}
          </group>
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <group key={i + 8} rotation={[Math.PI / 4, 0, 0]}>
            {createPetal((Math.PI * 2 * i) / 8 + Math.PI / 8, '#9333EA')}
          </group>
        ))}
      </group>

      {/* Ambient Light */}
      <ambientLight intensity={0.5} />

      {/* Point Lights */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
    </group>
  );
};

export default LotusModel; 