import { useState, useRef, useEffect} from 'react';
import {SliderContainer, Slider, Slide} from './HorizontalSlider.styled';

const HorizontalSlider = () => {
  const mediaArr = [
    {name: "placeholder", img: "https://plus.unsplash.com/premium_photo-1664005044945-ab3a1282ac01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1668018064529-76c9849d6e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1669630814501-9b0dd220a763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1672487914895-73be33e58283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1672818640506-d5fb6372ed40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1671627185063-9a7ec403574d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2032&q=80"},
    {name: "placeholder", img: "https://plus.unsplash.com/premium_photo-1672088104722-5ac457f1d289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1672080070747-9b28b4b403af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1673031288723-f198cd527b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"},
    {name: "placeholder", img: "https://images.unsplash.com/photo-1671347020855-8f35d210ee9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"}
  ];

  const sliderRef = useRef();
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');

  const getPosition = (e) => {
    const x = e.clientX;
    setXValue(x);

    const y = e.clientY;
    setYValue(y);
  };

  const handleOnDown = (e) => {
    getPosition(e);
    console.log(xValue);
    console.log(yValue);
  };

  // const handleMouseMove = (e) => {
  //   const mouseDelta = parseFloat(xValue) - e.clientX;
  //   const maxDelta = window.innerWidth / 2;
  //   const percentage = (mouseDelta / maxDelta) * -100;
  //   const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  //   const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  // }

  // useEffect(() => {
  //   getPosition();
  // }, []);

  return (
    <SliderContainer onClick={handleOnDown}>
      <Slider ref={sliderRef}>
        { mediaArr.map((media) => (
          <Slide src={media.img} alt={media.name} key={media.img}/>
        ))}
      </Slider>
    </SliderContainer>
  );
}
 
export default HorizontalSlider;