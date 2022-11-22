import React, { useEffect, useRef } from "react";

import "./SmoothScroll.scss";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setTimeout(setBodyHeight, 500);
  }, []);

  // 4.
  useEffect(() => {
    setTimeout(setBodyHeight, 500);
  }, [windowSize]);

  const setBodyHeight = () => {
    console.log("document.body.style.height: ", document.body.style.height);
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 10) / 10;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <main className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </main>
  );
};

export default SmoothScroll;
