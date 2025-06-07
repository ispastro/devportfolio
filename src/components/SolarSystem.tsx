import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SolarSystem: React.FC = () => {
  const sunAnimation = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    config: { duration: 2000 },
    loop: { reverse: true }
  });

  const planetAnimations = Array.from({ length: 4 }).map((_, i) => 
    useSpring({
      from: { rotate: '0deg' },
      to: { rotate: '360deg' },
      config: { duration: 3000 + i * 2000 },
      loop: true
    })
  );

  return (
    <div className="relative w-full h-[400px]">
      {/* Sun */}
      <animated.div
        style={sunAnimation}
        className="absolute left-1/2 top-1/2 w-20 h-20 bg-amber-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-amber-400/50"
      />
      
      {/* Orbits and Planets */}
      {[1, 2, 3, 4].map((orbit, index) => (
        <React.Fragment key={orbit}>
          {/* Orbit Path */}
          <div 
            className="absolute left-1/2 top-1/2 rounded-full border border-slate-200/20 dark:border-slate-700/20"
            style={{
              width: `${(orbit * 4 + 6)}rem`,
              height: `${(orbit * 4 + 6)}rem`,
              transform: 'translate(-50%, -50%)'
            }}
          />
          
          {/* Planet */}
          <animated.div
            style={{
              ...planetAnimations[index],
              width: `${(orbit * 4 + 6)}rem`,
              height: `${(orbit * 4 + 6)}rem`,
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div 
              className={`absolute top-0 w-${2 + index} h-${2 + index} rounded-full
                ${index === 0 ? 'bg-cyan-400' : ''}
                ${index === 1 ? 'bg-emerald-400' : ''}
                ${index === 2 ? 'bg-purple-400' : ''}
                ${index === 3 ? 'bg-pink-400' : ''}
              `}
              style={{
                width: `${1 + index * 0.25}rem`,
                height: `${1 + index * 0.25}rem`
              }}
            />
          </animated.div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SolarSystem;