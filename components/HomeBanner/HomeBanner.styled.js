import styled, {keyframes} from "styled-components";

const gradient = keyframes`
   from {
    background-position: 0% 50%;
   }
   to {
    background-position: 100% 50%;
   }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  line-height: 1.15;
  text-transform: uppercase;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;



export const Subtitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  background-image: linear-gradient(90deg, var(--aquamarine), var(--candy-apple-red), var(--orange-web));
  background-size: 300% 300%;
  animation: ${gradient} 10s ease infinite alternate;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Layer0 = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vw;
  top: 30%;
  left: 42.5%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 40vw;
    height: 40vw;
    top: 50%;
    left: 50%;
  }
`;

export const Layer1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin-top: auto;
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Sphere = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  filter: blur(var(--blur));

  @media (min-width: 768px) {
    width: 30vw;
    height: 30vw;
    top: 50%;
    left: 50%;
  }
`;

export const Sphere1 = styled(Sphere)`
  top: 0;
  left: 0;
  background: linear-gradient(-45deg, #ee7752, #972bff, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 12s ease-in infinite alternate;

`;

export const Sphere2 = styled(Sphere)`
  top: 0;
  left: 30%;
  background: linear-gradient(270deg, #00ffbd, #ff00ea, #fffa00);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease-in infinite alternate;
`;

export const Sphere3 = styled(Sphere)`
  top: 15%;
  left: 10%;
  background: linear-gradient(90deg, hsla(143, 100%, 50%, 1) 0%, hsla(246, 100%, 50%, 1) 50%, hsla(32, 100%, 50%, 1) 100%);  background-size: 400% 400%;
  animation: ${gradient} 10s ease-in infinite alternate;
`;