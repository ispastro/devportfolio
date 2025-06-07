import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

type LoaderProps = {
  onLoadComplete: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prevProgress => {
          const nextProgress = prevProgress + 1;
          return nextProgress;
        });
      } else {
        setTimeout(() => onLoadComplete(), 500);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, onLoadComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900 z-50">
      <div className="relative w-20 h-20 mb-8">
        <Rocket 
          size={40} 
          className="text-cyan-500 absolute top-0 left-1/2 transform -translate-x-1/2 animate-rocket"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-40 overflow-hidden opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-cyan-500 to-transparent animate-flame"></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-6">
        Loading Portfolio
      </h2>
      <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-cyan-500 transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-cyan-400 mt-4 font-medium">{progress}%</p>
    </div>
  );
};

export default Loader;