import { useRef, useEffect } from "react";

const useOutsideClicker = (onOutsideClick: () => void) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = onOutsideClick;

  useEffect(() => {
    function clickHandler(event: MouseEvent) {
      if (
        wrapperRef?.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        handleOutsideClick();
      }
    }
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [wrapperRef, handleOutsideClick]);

  return wrapperRef;
};

export default useOutsideClicker;
