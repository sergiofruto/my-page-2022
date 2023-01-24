import Link from 'next/link'
import Layout from '../components/Layout'
import HomeBanner from '../components/HomeBanner/HomeBanner';
import HorizontalSlider from '../components/HorizontalSlider/HorizontalSlider';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <HomeBanner />
    <HorizontalSlider />
  </Layout>
)

export default IndexPage
