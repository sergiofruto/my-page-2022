import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;
  text-transform: uppercase;
  font-weight: 800;
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 800;
  color: #00d0ff;
`;

export const BannerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Layer0 = styled.div`
  position: absolute;
  width: 40vw;
  height: 40vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Layer1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 3em;
  margin-top: auto;
  z-index: 10;
`;

export const Sphere = styled.div`
  position: absolute;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  filter: blur(40px);
`;

export const Sphere1 = styled(Sphere)`
  top: 0;
  left: 0;
  background: linear-gradient(-45deg, #ee7752, #972bff, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 12s ease infinite;

`;

export const Sphere2 = styled(Sphere)`
  top: 0;
  left: 40 %;
  background: linear-gradient(270deg, #00ffbd, #ff00ea, #fffa00);
  background-size: 400% 400%;
  animation: gradient 12s ease infinite;
`;

export const Sphere3 = styled(Sphere)`
  top: 25 %;
  left: 20 %;
  background: linear-gradient(329deg, #484cfb, #00ff4d, #ffc204);
  background-size: 400% 400%;
  animation: gradient 12s ease infinite;
`;