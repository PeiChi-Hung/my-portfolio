import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Avatar } from "./Avatar"
import { Room } from "./Room"
import { Leva, useControls } from "leva"
import HeroCamera from "./HeroCamera"

export const AvatarWaving = () => {
  const controls = useControls("Room", {
    rotationX: { value: 0.1, min: -10, max: 10 },
    rotationY: { value: -0.5, min: -10, max: 10 },
    rotationZ: { value: 0, min: -10, max: 10 },
    positionX: { value: -5.1, min: -10, max: 10 },
    positionY: { value: -1.9, min: -10, max: 30 },
    positionZ: { value: 22.5, min: -10, max: 30 },
  })
  return (
    <div className="w-full h-full">
      <Leva />
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[-8, 3.7, 24.7]} />I
        <HeroCamera>
          <Room
            scale={3}
            rotation={[0.2, 0.3, 0]}
            position={[-2.7, -0.7, 0.5]}
            // rotation={[
            //   controls.rotationX,
            //   controls.rotationY,
            //   controls.rotationZ,
            // ]}
            // position={[
            //   controls.positionX,
            //   controls.positionY,
            //   controls.positionZ,
            // ]}
          />
        </HeroCamera>
        <Avatar
          scale={4}
          rotation={[0.1, -0.3, 0]}
          position={[-4.9, 1.7, 16.5]}
          // position={[
          //   controls.positionX,
          //   controls.positionY,
          //   controls.positionZ,
          // ]}
          // rotation={[
          //   controls.rotationX,
          //   controls.rotationY,
          //   controls.rotationZ,
          // ]}
        />
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}
