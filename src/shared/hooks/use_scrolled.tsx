import { useCallback, useEffect, useRef, useState } from "react";

export const useScrolled = (offset: number): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const prevScroll = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    if (prevScroll.current > currentScrollPos) {
      setIsScrolled(false);
    } else {
      currentScrollPos > offset && setIsScrolled(true);
    }

    prevScroll.current = currentScrollPos;
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isScrolled;
};
