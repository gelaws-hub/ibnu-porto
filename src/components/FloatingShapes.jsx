const FloatingShapes = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Blob 1 */}
        <div 
          className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-teal-300/20 to-blue-300/20 dark:from-teal-700/10 dark:to-blue-700/10 animate-blob animation-delay-2000"
          style={{ filter: 'blur(40px)' }}
        ></div>
        
        {/* Blob 2 */}
        <div 
          className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-gradient-to-tr from-purple-300/20 to-pink-300/20 dark:from-purple-700/10 dark:to-pink-700/10 animate-blob animation-delay-4000"
          style={{ filter: 'blur(40px)' }}
        ></div>
        
        {/* Blob 3 */}
        <div 
          className="absolute top-[40%] left-[25%] w-72 h-72 rounded-full bg-gradient-to-bl from-yellow-300/20 to-orange-300/20 dark:from-yellow-700/10 dark:to-orange-700/10 animate-blob"
          style={{ filter: 'blur(40px)' }}
        ></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-[30%] right-[15%] w-16 h-16 border-4 border-teal-400/20 dark:border-teal-400/10 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-[15%] right-[25%] w-12 h-12 border-4 border-purple-400/20 dark:border-purple-400/10 rotate-45 animate-bounce-slow"></div>
        <div className="absolute top-[60%] left-[10%] w-20 h-20 border-4 border-blue-400/20 dark:border-blue-400/10 rounded-full animate-pulse"></div>
        
        {/* Dots pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.03)_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_1px,_transparent_1px)] [background-size:20px_20px]"></div>
      </div>
    );
  };
  
  export default FloatingShapes;
  