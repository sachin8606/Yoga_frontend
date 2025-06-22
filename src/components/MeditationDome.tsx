import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MeditationDome = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      800 / 600,
      0.1,
      1000
    );
    camera.position.set(0, 3, 5);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 600);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create dome
    const domeGeometry = new THREE.SphereGeometry(4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const dome = new THREE.Mesh(domeGeometry, domeMaterial);
    scene.add(dome);

    // Create floor
    const floorGeometry = new THREE.CircleGeometry(4, 32);
    const floorMaterial = new THREE.MeshPhongMaterial({
      color: 0xe6e6e6,
      side: THREE.DoubleSide,
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Create sacred geometry patterns
    const createSacredPattern = () => {
      const group = new THREE.Group();

      // Create flower of life pattern
      for (let i = 0; i < 6; i++) {
        const circle = new THREE.Mesh(
          new THREE.CircleGeometry(0.5, 32),
          new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide,
          })
        );
        circle.position.x = Math.cos((i / 6) * Math.PI * 2) * 0.5;
        circle.position.y = Math.sin((i / 6) * Math.PI * 2) * 0.5;
        group.add(circle);
      }

      return group;
    };

    const pattern = createSacredPattern();
    pattern.rotation.x = -Math.PI / 2;
    pattern.position.y = 0.01;
    scene.add(pattern);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      dome.rotation.y += 0.001;
      pattern.rotation.z += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="w-[800px] h-[600px]" />;
};

export default MeditationDome; 