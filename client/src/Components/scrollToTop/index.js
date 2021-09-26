import React, { useEffect, useState } from "react";
import {Link, animateScroll as scroll} from 'react-scroll';

import "./style.css";

function ScrollToTop({scrollNext}) {
  const [isVisible, setIsVisible] = useState(false);


  

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top">
      {isVisible && (
          <>
        <div onClick={scrollToTop}>
          <h3 className="scroll-text">Go up!</h3>
        </div>
        {scrollNext  && 
            <div onClick={scrollToTop}>
        <Link className="scrollNext"
        to={scrollNext}>{scrollNext}</Link>
      </div>}
      </>
        
      )}
    </div>
  );
}

export default ScrollToTop;