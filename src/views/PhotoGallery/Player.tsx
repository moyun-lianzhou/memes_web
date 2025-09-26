import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PointerLockControls } from "@react-three/drei";

// -----------------------------
// 摄像机 & 小球控制器：WASD + 空格/Shift + 鼠标视角
// -----------------------------
const Controls = ({ playerRef, }: { playerRef: React.RefObject<THREE.Mesh> }) => {
    const { camera } = useThree();
    const speed = 0.1;
    const keys = useRef({} as Record<string, boolean>);

    // 键盘监听
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => (keys.current[e.code] = true);
        const handleKeyUp = (e: KeyboardEvent) => (keys.current[e.code] = false);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    // 每帧更新位置
    useFrame(() => {
        if (!playerRef.current) return;
        const direction = new THREE.Vector3();
        if (keys.current["KeyW"] || keys.current["ArrowUp"]) direction.z -= 1;
        if (keys.current["KeyS"] || keys.current["ArrowDown"]) direction.z += 1;
        if (keys.current["KeyA"] || keys.current["ArrowLeft"]) direction.x -= 1;
        if (keys.current["KeyD"] || keys.current["ArrowRight"]) direction.x += 1;
        if (keys.current["Space"]) direction.y += 1;
        if (keys.current["ShiftLeft"]) direction.y -= 1;

        direction.normalize().applyEuler(camera.rotation).multiplyScalar(speed);
        const newPosition = playerRef.current.position.clone().add(direction);

        // 设置房间内边界限制
        const min = -9.5;
        const max = 9.5;
        const minY = 1.0; // 设置最低y值
        const maxY = 4.8;
        if (
            newPosition.x > min &&
            newPosition.x < max &&
            newPosition.z > min &&
            newPosition.z < max &&
            newPosition.y >= minY &&
            newPosition.y <= maxY
        ) {
            playerRef.current.position.copy(newPosition);
            camera.position.copy(newPosition);
        }
        // 防止视野穿地下
        if (newPosition.y < 0.1) newPosition.y = 0.1;
    });

    return <PointerLockControls />;
};

// -----------------------------
// 玩家代表物体 + 控制器（摄像头跟随它）
// -----------------------------
const Player = () => {
    const ref = useRef<THREE.Mesh>(null!);
    return (
        <>
            <mesh ref={ref} visible={false} position={[0, 1.6, 5]} />
            <Controls playerRef={ref} />
        </>
    );
};

export default Player