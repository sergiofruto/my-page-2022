import Link from 'next/link'
import Layout from '../components/Layout'
import HomeBanner from '../components/HomeBanner/HomeBanner';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <HomeBanner />
  </Layout>
)

export default IndexPage
