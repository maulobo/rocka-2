import { useEffect, useState } from "react";

export const useScrollVelocity = () => {
  const [velocity, setVelocity] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const newVelocity = Math.abs(currentScrollY - lastScrollY);
          setVelocity(Math.min(newVelocity / 100, 1)); // Normalize 0-1
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return velocity;
};
