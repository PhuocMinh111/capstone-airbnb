import React, { useEffect, useState } from "react";

function useOutsideClose(ref: any): boolean {
  const [isClickOutside, setIsoutside] = useState(false);
  useEffect(() => {
    function outsideClose(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsoutside(true);
      }
    }
    document.addEventListener("click", outsideClose);

    return () => {
      document.removeEventListener("click", outsideClose);
    };
  }, [ref]);
  return isClickOutside;
}

export default useOutsideClose;
