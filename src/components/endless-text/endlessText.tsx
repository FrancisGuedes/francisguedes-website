import './endlessText.css';
import { http_errors } from '../../util/strings';
import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const EndlessText = () => {
  const notFoundLabels = {...http_errors.notFound}
  const textElements: any = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const textTween: any = useRef(null);
  textTween.current = gsap.timeline();
  let label = [notFoundLabels.code.concat('. ').repeat(9)]

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      textTween.current.pause().kill();
    };
  }, []);

  useEffect(() => {
    textInitialSet();
    //textTween.current && textTween.current.pause().kill();
    textTween.current = gsap.to(textElements.current, {
      // x is the part of the screen where the loop starts again
      x: `+=${screenWidth}`,
      ease: "none",
      repeat: -1,
      duration: 9,
      rotation: 0.1,
      yoyo: true,
      modifiers: {
        x: (x) => {
          // width of the view where the text loop ends: 1 means all the way trough
          return (parseFloat(x) % (screenWidth * 1)) + "px";
        }
      }
    });
  }, [screenWidth]);

  const textInitialSet = () => {
    gsap.set(textElements.current, {
      xPercent: -100,
      x: function (index) {
        return (screenWidth / 2) * index;
      }
    });
  };

  const resizeHandler = () => {
    // for responsive
    gsap.set(textElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  };

  const textElementsRefHandler = (e: any, i: any) => {
    textElements.current[i] = e;
  };
  
  const renderTextElements = () => {
    // to have one or two more parallel lines of endless text
    /* if (label.length === 1) {
      label[2] = label[1] = label[0];
    }
    if (label.length === 2) {
      label[2] = label[0];
    } */
    return label.map((e: any, i: any) => (
      <p
        className="endless-text"
        key={`label-${i}`}
        ref={(el) => textElementsRefHandler(el, i)}
      >
        {e}
      </p>
    ));
  };
  return (
    <>
      {renderTextElements()}
    </>
  );
}

export default EndlessText;