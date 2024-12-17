import { calculateSizes } from "@/constants";
import { PerspectiveCamera, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { useMediaQuery } from "react-responsive";
import { Avatar } from "./Avatar";
import HeroCamera from "./HeroCamera";
import { Room } from "./Room";

export const AvatarWaving = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isMobile, isTablet);

  return (
    <div className="h-full w-full">
      <Canvas className="w-full">
        <PerspectiveCamera makeDefault position={[-7, 3.7, 24.7]} />I
        <HeroCamera>
          <Room
            scale={sizes.deskScale}
            position={sizes.deskPosition}
            rotation={sizes.deskRotation}
          />
        </HeroCamera>
        <Avatar
          scale={sizes.avatarScale}
          rotation={sizes.avatarRotation}
          position={sizes.avatarPosition}
        />
        <Preload all />
        <ambientLight intensity={3.2} />
        <directionalLight position={[10, 20, 30]} />
      </Canvas>
    </div>
  );
};
