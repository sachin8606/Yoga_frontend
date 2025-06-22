import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const HeroScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xE6E7FF, 0.0007); // Reduced fog density
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 20); // Moved camera back for better view
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 15, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    // Add point lights for enhanced depth
    const pointLight1 = new THREE.PointLight(0xffd700, 1, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff9f7f, 1, 20);
    pointLight2.position.set(-5, 5, -5);
    scene.add(pointLight2);

    // Create mandala platform
    const platformGeometry = new THREE.CircleGeometry(12, 32);
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0xf7e9d7,
      metalness: 0.2,
      roughness: 0.8,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.rotation.x = -Math.PI / 2;
    platform.position.y = -2;
    platform.receiveShadow = true;
    scene.add(platform);

    // Create mandala pattern
    const createMandala = () => {
      const group = new THREE.Group();
      const segments = 12;
      const radius = 10;

      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        const petalGeometry = new THREE.ConeGeometry(1, 3, 32);
        const petalMaterial = new THREE.MeshPhongMaterial({
          color: 0xffd700,
          shininess: 100,
          transparent: true,
          opacity: 0.8,
        });

        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        petal.position.set(x, 0, z);
        petal.lookAt(0, 0, 0);
        petal.rotateX(Math.PI / 2);
        petal.castShadow = true;
        group.add(petal);
      }

      return group;
    };

    const mandala = createMandala();
    mandala.position.y = -1.9;
    scene.add(mandala);

    // Create floating crystals
    const createCrystal = () => {
      const geometry = new THREE.OctahedronGeometry(1, 0);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      return new THREE.Mesh(geometry, material);
    };

    const crystals: THREE.Mesh[] = [];
    for (let i = 0; i < 7; i++) {
      const crystal = createCrystal();
      const angle = (i / 7) * Math.PI * 2;
      const radius = 8;
      crystal.position.set(
        Math.cos(angle) * radius,
        Math.random() * 3 + 2,
        Math.sin(angle) * radius
      );
      crystal.scale.set(0.5, 0.5, 0.5);
      crystal.castShadow = true;
      scene.add(crystal);
      crystals.push(crystal);

      // Animate crystal
      gsap.to(crystal.position, {
        y: crystal.position.y + 1,
        duration: 2 + Math.random(),
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      });

      gsap.to(crystal.rotation, {
        y: Math.PI * 2,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        ease: "none"
      });
    }

    // Create energy streams
    const createEnergyStream = () => {
      const points: THREE.Vector3[] = [];
      const segments = 100;
      const radius = 8;
      const height = 10;

      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (i / segments) * height;
        points.push(new THREE.Vector3(x, y - 2, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: 0xffd700,
        transparent: true,
        opacity: 0.5,
      });

      return new THREE.Line(geometry, material);
    };

    const energyStream = createEnergyStream();
    scene.add(energyStream);

    // Animation loop
    let frame = 0;
    const animate = () => {
      frame += 0.005;
      requestAnimationFrame(animate);

      // Rotate mandala
      mandala.rotation.y = frame * 0.2;

      // Animate energy stream
      energyStream.rotation.y = frame;

      // Gentle camera movement
      camera.position.y = 8 + Math.sin(frame) * 0.5;
      camera.lookAt(0, 0, 0);

      // Update crystal positions
      crystals.forEach((crystal, i) => {
        const angle = frame + (i / crystals.length) * Math.PI * 2;
        const radius = 8;
        crystal.position.x = Math.cos(angle) * radius;
        crystal.position.z = Math.sin(angle) * radius;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default HeroScene; 