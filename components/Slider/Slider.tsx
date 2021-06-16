import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link'

import {
  SliderStyle,
  SliderWrapper,
  SliderItem,
  SliderImg
} from "./Slider.styles"

import { SliderProps } from "./Slider.d"

import Grid from '@components/Grid';
import Arrow from "@components/Arrow"
import Container from "@components/Container"

const Slider: React.FC<SliderProps> = ({
     items
   }) => {
  const element = useRef(null);
  const [offset, setOffset] = useState(0)


  // useEffect(() => {
  // //   const interval = setInterval(() => {
  // //     setOffset(element.current.scrollLeft + element.current.offsetWidth)

  // //     if(element.current.scrollLeft == 0) {
  // //       moveRight()
  // //     } else {
  // //       element.current.scrollLeft = 0
  // //     }
  // // }, 2000);
  // // return () => clearInterval(interval);

  //   // Update the document title using the browser API
  // }, [element, offset]);

  const moveLeft = () => {
    element.current.scrollLeft -= offset / 2
  }

  const moveRight = () => {
    element.current.scrollLeft += offset
  }
  return (
      <>
        {/*<Arrow*/}
        {/*    leftDirection*/}
        {/*    left='-40px'*/}
        {/*    bottom='50%'*/}
        {/*    onClick={() => moveLeft()}*/}
        {/*/>*/}
        <SliderWrapper ref={element}>
          <SliderStyle>
            {items.map(item => {
              return <a href={item.url} target={"_blank"}><SliderItem>
                <SliderImg src={item.img} />
              </SliderItem></a>
            })}
              {items.map(item => {
                  return <a href={item.url} target={"_blank"}><SliderItem>
                      <SliderImg src={item.img} />
                  </SliderItem></a>
              })}
          </SliderStyle>
        </SliderWrapper>
        {/*  <Arrow*/}
        {/*    leftDirection*/}
        {/*    left='-40px'*/}
        {/*    bottom='50%'*/}
        {/*    onClick={() => moveRight()}*/}
        {/*/>*/}
      </>
  )
}

export default Slider;
