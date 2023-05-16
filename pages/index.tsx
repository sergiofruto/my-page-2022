import Link from "next/link";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Showcase from "../components/Showcase/Showcase";
import Banner from "../components/Fullpage/Banner";
import JobsHistory from "../components/JobsHistory/JobsHistory";

const IndexPage = () => (
  <Layout title="Sergio Gabriel | Frontend Developer">
    <main>
      <HomeBanner />
      <Banner />
      <JobsHistory />
    </main>
  </Layout>
);

export default IndexPage;
