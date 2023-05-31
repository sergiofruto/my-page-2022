import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Showcase from "../components/Showcase/Showcase";
import Banner from "../components/Fullpage/Banner";
import JobsHistory from "../components/JobsHistory/JobsHistory";
import ColorGrid from "../components/ColorGrid/ColorGrid";

const IndexPage = () => (
  <Layout title="Sergio Gabriel | Frontend Developer">
    <main>
      <HomeBanner />
      <ColorGrid></ColorGrid>
      {/* <Banner />
      <JobsHistory /> */}
    </main>
  </Layout>
);

export default IndexPage;
