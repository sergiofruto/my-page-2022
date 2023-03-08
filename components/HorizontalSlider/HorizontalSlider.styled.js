import styled from "styled-components";

export const SliderContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  margin: 0;
  overflow: hidden;
  color: white;
  position: relative;
`

export const Slider = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  gap: 4vmin;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0%, -50%);
  user-select: none;
`;

export const Slide = styled.img`
  width: 40vmin;
  height: 56vmin;
  object-fit: cover;
  object-position: 100% center;
`;