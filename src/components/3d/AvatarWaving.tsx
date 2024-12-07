import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Avatar } from "./Avatar"
import { Room } from "./Room"
import { Leva, useControls } from "leva"
import HeroCamera from "./HeroCamera"

export const AvatarWaving = () => {
  // const controls = useControls("Room", {
  //   rotationX: { value: 2.5, min: -10, max: 10 },
  //   rotationY: { value: 2.5, min: -10, max: 10 },
  //   rotationZ: { value: 2.5, min: -10, max: 10 },
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 30 },
  // })
  return (
    <div className="w-full h-full">
      {/* <Leva /> */}
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[-8, 3.7, 25.7]} />
        <HeroCamera>
          <Room scale={3} rotation={[0.3, 0.5, 0]} />
        </HeroCamera>

        {/* <Avatar scale={20} /> */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}
