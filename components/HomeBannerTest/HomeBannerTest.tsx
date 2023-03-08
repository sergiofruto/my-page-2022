import { BannerContainer, Title, Subtitle, Sphere1, Sphere2, Sphere3, Layer0, Layer1 } from './HomeBannerTest.styled';

const HomeBannerTest = () => {
  return (
    <BannerContainer>
      <Layer0>
        <Sphere1/>
      </Layer0>
      <Layer1>
        <Title>
          {`HI, I'm Gabriel Fruto`}
          <br />
          REACT DEVELOPER
          <br />
        </Title>
        <Subtitle>UI SPECIALIST</Subtitle>
      </Layer1>
    </BannerContainer>
  )
}

export default HomeBannerTest;