
import React, {useEffect, useState} from "react"
import { 
    ProgressWrapper
} from "./Progress.styles"

import { ProgressProps } from "./Progress.d"

const Progress: React.FC<ProgressProps> = () => {

  const [scrollY, setScrollY] = useState(null);


  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrolled = `${scrollPx / winHeightPx * 100}`;


    setScrollY(scrolled)
};

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", scrollProgress);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", scrollProgress);
    };
  });

  

  return (
    <>
      <ProgressWrapper
        scroll={Math.round(scrollY)}
      >
      </ProgressWrapper>
    </>
  )
}

export default Progress;
