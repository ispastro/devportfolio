// components/ParticlesBackground.tsx
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: '#1E1E1E',
        },
        particles: {
          number: { value: 50 },
          color: { value: '#61AFEF' },
          shape: { type: 'circle' },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 5 } },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: 'bounce',
          },
          links: {
            enable: true,
            distance: 120,
            color: '#C678DD',
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 3 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
