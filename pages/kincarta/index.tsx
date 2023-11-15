import { GetStaticProps } from "next";
import api from "./api";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const data = await api.caseStudy.list();
  return {
    props: { data },
  };
};

const HomePage = ({ data }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen px-4">
      <header className="leading-[60px] font-bold">Kin + Carta</header>
      <main className="kin py-12 container grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-4">
        {data.map((caseStudy) => (
          <article>
            <Link href={`/kincarta/${caseStudy.id}`} key={caseStudy.id}>
              <img
                src={caseStudy.hero_image}
                alt={caseStudy.title}
                height="256"
                className="w-full object-cover mb-4"
              />
              <h2 className="font-bold text-xl mb-4">{caseStudy.title}</h2>
              <p className="text-sm opacity-80">{caseStudy.teaser}</p>
            </Link>
          </article>
        ))}
      </main>
      <footer className="leading-[60px] text-center">
        Experiment by SF - 2023
      </footer>
    </div>
  );
};

export default HomePage;
