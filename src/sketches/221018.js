import * as THREE from "three";
import { useEffect } from "react";

export const getData = (o) => Object.values(o);

const Three = ({ id, height, width }) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const fov = 75;
    const aspectRatio = width / height;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 100);
    camera.position.z = 3;
    scene.add(camera);

    const canvas = document.getElementById(id);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const clock = new THREE.Clock();

    const elapsedTime = clock.getElapsedTime();

    const animate = () => {
      mesh.rotation.y = elapsedTime;
      mesh.rotation.x = elapsedTime;

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, [height, width, id]);

  return <canvas id={id} />;
};

export default Three;
