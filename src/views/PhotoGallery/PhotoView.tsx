import { useTexture } from "@react-three/drei";
import { Texture } from "three";
import { create } from "zustand";

// 状态管理（照片）
type Photo = {
  id: string;
  url: string;
  title: string;
  description: string;
};

interface PhotoState {
  photos: Photo[];
  addPhotos: (newPhotos: Photo[]) => void;
}

// 使用 Zustand 创建全局照片存储
const usePhotoStore = create<PhotoState>((set) => ({
  photos: [],
  addPhotos: (newPhotos) =>
    set((state) => ({ photos: [...state.photos, ...newPhotos] })),
}));


// 照片上传组件
const PhotoUploader = () => {
  const { addPhotos } = usePhotoStore();
  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newPhotos: Photo[] = [];
    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      newPhotos.push({
        id: Math.random().toString(),
        url,
        title: file.name,
        description: "点击标题编辑",
      });
    });
    addPhotos(newPhotos);
  };

  return (
    <div className="absolute top-4 left-4 z-10 bg-white/80 rounded-lg p-4 shadow max-w-sm">
      <h2 className="font-bold mb-2">上传照片</h2>
      <input
        type="file"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
        className="w-full text-sm"
      />
    </div>
  );
};

// -----------------------------
// 单个照片组件：包含图片和标题区域
// -----------------------------
const PhotoFrame = ({
  photo,
  position,
  size = [3, 2],
}: {
  photo: Photo;
  position: [number, number, number];
  size?: [number, number];
}) => {
  const texture = useTexture(photo.url);
  return (
    <group position={position}>
      {/* 图片 */}
      <mesh>
        <planeGeometry args={size} />
        <meshBasicMaterial map={texture as Texture} toneMapped={false} />
      </mesh>

      {/* 标题栏 */}
      <mesh position={[0, -size[1] / 2 - 0.3, 0]}>
        <planeGeometry args={[size[0], 0.4]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </group>
  );
};


// -----------------------------
// 墙面照片位置逻辑：让每张图片在墙上居中排列
// -----------------------------
const perWall = 6; // 每面墙展示的照片数
const photoWidth = 3;
const spacing = 0.2;

const rotations: [number, number, number][] = [
  [0, 0, 0],                // back
  [0, -Math.PI / 2, 0],     // right
  [0, Math.PI, 0],          // front
  [0, Math.PI / 2, 0],      // left
];


// 计算照片在墙上的中心对齐位置
function getWallCenteredPosition(
  wallIndex: number,
  indexInWall: number,
  totalPerWall: number,
  photoWidth = 3,
  spacing = 0.2
): [number, number, number] {
  const totalWidth = totalPerWall * photoWidth + (totalPerWall - 1) * spacing;
  const startOffset = -totalWidth / 2 + photoWidth / 2;

  const offset = startOffset + indexInWall * (photoWidth + spacing);

  switch (wallIndex) {
    case 0: return [offset, 2, -9.9];           // back wall
    case 1: return [9.9, 2, offset];            // right wall
    case 2: return [-offset, 2, 9.9];           // front wall
    case 3: return [-9.9, 2, -offset];          // left wall
    default: return [0, 2, 0];
  }
}

// -----------------------------
// 照片展示组件：展示所有照片并按墙排列
// -----------------------------
const PhotoGallery = () => {
  const { photos } = usePhotoStore();

  return (
    <>
      {photos.map((photo, index) => {
        const wallIndex = Math.floor(index / perWall) % 4;
        const indexInWall = index % perWall;
        const position = getWallCenteredPosition(
          wallIndex,
          indexInWall,
          perWall,
          photoWidth,
          spacing
        );

        return (
          <group
            key={photo.id}
            position={position}
            rotation={rotations[wallIndex]}
          >
            <PhotoFrame
              photo={photo}
              position={[0, 0, 0]}
              size={[photoWidth, 2]}
            />
          </group>
        );
      })}
    </>
  );
};

export {PhotoGallery, PhotoUploader}