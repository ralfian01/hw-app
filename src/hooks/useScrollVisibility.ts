import { useState, useRef, useEffect } from "react";

const useScrollVisibility = (threshold: number = 0.25) => {
  const refScrollPage = useRef<HTMLIonContentElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = (event: CustomEvent) => {
    const scrollPosition = event.detail.scrollTop;
    const windowHeight = window.innerHeight;
    if (scrollPosition > windowHeight * threshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const scrollElement = refScrollPage.current;

    if (scrollElement) {
      scrollElement.addEventListener("ionScroll", handleScroll as any);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("ionScroll", handleScroll as any);
      }
    };
  }, [threshold]);

  return { refScrollPage, isVisible };
};

export default useScrollVisibility;
