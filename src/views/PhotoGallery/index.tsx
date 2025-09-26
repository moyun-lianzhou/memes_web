import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Environment from "./Environment";
import Player from "./Player";
import {PhotoUploader, PhotoGallery} from "./PhotoView";

// -----------------------------
// App 主组件：Canvas + 展馆 + 控制器
// -----------------------------
const App = () => {
  return (
    <div className="w-screen h-screen">
      <PhotoUploader />
      <Canvas camera={{ fov: 75, position: [0, 2, 10] }}>
        <Suspense fallback={null}>
          <Environment />
          <PhotoGallery />
          <Player />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
