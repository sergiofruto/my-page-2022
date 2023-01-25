import Link from 'next/link'
import Layout from '../components/Layout'
import HorizontalSlider from '../components/HorizontalSlider/HorizontalSlider';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <HorizontalSlider />
  </Layout>
)

export default AboutPage
