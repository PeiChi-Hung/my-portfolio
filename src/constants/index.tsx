import * as THREE from "three";

export const calculateSizes = (isMobile: boolean, isTablet: boolean) => {
  return {
    // index for desk
    deskScale: isMobile ? 1.2 : isTablet ? 1.25 : 3,
    deskPosition: isMobile
      ? new THREE.Vector3(-7.3, -5.5, 0.5)
      : isTablet
        ? new THREE.Vector3(-6.3, -3.9, 3.3)
        : new THREE.Vector3(-2.7, -0.7, 0.5),
    deskRotation: isMobile
      ? new THREE.Euler(0.1, 0.3, 0)
      : isTablet
        ? new THREE.Euler(0.1, 0.3, 0)
        : new THREE.Euler(0.2, 0.3, 0),

    // index for avatar
    avatarScale: isMobile ? 2.8 : isTablet ? 3 : 4,
    avatarPosition: isMobile
      ? new THREE.Vector3(-7.1, 0.1, 16.1)
      : isTablet
        ? new THREE.Vector3(-5.7, 0.1, 14.9)
        : new THREE.Vector3(-4.9, 1.7, 16.5),
    avatarRotation: isMobile
      ? new THREE.Euler(0.1, 0, 0)
      : new THREE.Euler(0.1, -0.3, 0),
  };
};
