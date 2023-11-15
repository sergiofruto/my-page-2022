import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import api from "./api";

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const router = useRouter();
  const caseStudy = await api.caseStudy.fetch(Number(router.query.id));
  return {
    props: { caseStudy },
  };
};

export default function IdPage({ caseStudy }) {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen px-4">
      <header className="leading-[60px] font-bold">Kin + Carta</header>
      <main className="kin py-12 container grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-4">
        <p>Post: {router.query.id}</p>
        <img
          src={caseStudy.hero_image}
          alt={caseStudy.title}
          height="256"
          className="w-full object-cover mb-4"
        />
        <h2 className="font-bold text-xl mb-4">{caseStudy.title}</h2>
        <p className="text-sm opacity-80">{caseStudy.teaser}</p>
      </main>
      <footer className="leading-[60px] text-center">
        Experiment by SF - 2023
      </footer>
    </div>
  );
}
