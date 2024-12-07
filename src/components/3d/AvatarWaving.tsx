import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Avatar } from "./Avatar"
import { Room } from "./Room"

export const AvatarWaving = () => {
  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[-3, 10, 30]} />
        <Room scale={3} />
        {/* <Avatar scale={20} /> */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}
