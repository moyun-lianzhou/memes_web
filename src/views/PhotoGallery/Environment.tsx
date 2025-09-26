// -----------------------------
// 展馆环境：地板、天花板、四面墙和光照
// -----------------------------
const Environment = () => {
    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} />
  
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#d2b48c" />
        </mesh>
  
        {/* Ceiling */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
  
        {/* Back Wall */}
        <mesh position={[0, 2.5, -10]}>
          <planeGeometry args={[20, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
  
        {/* Front Wall */}
        <mesh rotation={[0, Math.PI, 0]} position={[0, 2.5, 10]}>
          <planeGeometry args={[20, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
  
        {/* Left Wall */}
        <mesh rotation={[0, Math.PI / 2, 0]} position={[-10, 2.5, 0]}>
          <planeGeometry args={[20, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
  
        {/* Right Wall */}
        <mesh rotation={[0, -Math.PI / 2, 0]} position={[10, 2.5, 0]}>
          <planeGeometry args={[20, 5]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </>
    );
  };

  export default Environment