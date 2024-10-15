import { useEffect, useRef, useState } from "react";

export function useVisibility(
  sectionId: string,
  onVisible: (section: string) => void
) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            onVisible(sectionId);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.1, // 10% 가 보이면 감지
        rootMargin: "-10% 0px -10% 0px", // 상하 10% 여유 공간
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionId, onVisible]);

  return { sectionRef, isInView };
}
