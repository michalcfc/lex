import React, { useRef, useEffect, useState } from 'react';

import { 
  SliderStyle,
  SliderWrapper
} from "./Slider.styles"

import { SliderProps } from "./Slider.d"

import Grid from '@components/Grid';
import Arrow from "@components/Arrow"
import Card from "@components/Card"

const Slider: React.FC<SliderProps> = ({
  items
}) => {
  const element = useRef(null);
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    // Update the document title using the browser API
    setOffset(element.current.offsetWidth)
  }, [element]);
 
  const moveLeft = () => {
    element.current.scrollLeft -= offset / 2
  }
  
  const moveRight = () => {
    element.current.scrollLeft += offset
  }
  return (
  <>
  <SliderWrapper>
    {/*<Arrow*/}
    {/*    leftDirection*/}
    {/*    left='-40px'*/}
    {/*    bottom='50%'*/}
    {/*    onClick={() => moveLeft()}*/}
    {/*/>*/}
      <SliderStyle ref={element}>

            {items.map(item => {
              return <>
              <Card
                  hoverEffect
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
              >
                {item.name}
              </Card>
                </>
            })}     
            {/*<Arrow*/}
      {/*  rightDirection*/}
      {/*  right='-40px'*/}
      {/*  bottom='50%'*/}
      {/*  onClick={() => moveRight()}*/}
      {/*  />*/}
      </SliderStyle>
    </SliderWrapper>
  </>
  )
}

export default Slider;
