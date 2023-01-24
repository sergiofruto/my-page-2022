import { BannerContainer, Title, Subtitle, Sphere1, Sphere2, Sphere3, Layer0, Layer1 } from './HomeBanner.styled';

const HomeBanner = () => {
  return (
    <BannerContainer>
      <Layer0>
        <Sphere1/>
        {/* <Sphere2/> */}
        {/* <Sphere3/> */}
      </Layer0>
      <Layer1>
        <Title>
          {`HI, I'M Sergio Fruto`}
          <br />
          FRONTEND DEVELOPER
          <br />
        </Title>
        <Subtitle>UI SPECIALIST</Subtitle>
      </Layer1>
    </BannerContainer>
  )
}

export default HomeBanner;