import React, { useEffect } from "react";

function UseIntersectionObserver(ref: HTMLElement) {
  let option = {
    root: document.body,
    rootMargin: "20px",
    threshold: 1.0,
  };
  function callback(e: any) {
    console.log(e);
  }
  return () => {
    const observer = new IntersectionObserver(callback, option);
    observer.observe(ref);
  };
}

export default UseIntersectionObserver;
