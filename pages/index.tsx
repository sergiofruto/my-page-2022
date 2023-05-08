import Link from "next/link";
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Showcase from "../components/Showcase/Showcase";

const IndexPage = () => (
  <Layout title="Sergio Gabriel | Frontend Developer">
    <main>
      <HomeBanner />
      {/* <Showcase /> */}
    </main>
  </Layout>
);

export default IndexPage;
