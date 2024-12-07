import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { easing } from "maath"
import { Group } from "three"

const HeroCamera = ({ children }: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef<Group>(null)

  useFrame((state, delta) => {
    easing.dampE(
      groupRef.current?.rotation,
      [-state.pointer.y / 20, -state.pointer.x / 20, 0],
      0.25,
      delta
    )
  })

  return <group ref={groupRef}>{children}</group>
}

export default HeroCamera
