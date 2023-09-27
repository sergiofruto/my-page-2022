import { GetStaticProps } from "next";
import api from "./api";

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
      <main className="py-12 container ">
        {data.map((item) => (
          <div>
            <h2>{item.title}</h2>
            <p>{item.teaser}</p>
          </div>
        ))}
      </main>
      <footer className="leading-[60px] text-center">
        Experiment by SF - 2023
      </footer>
    </div>
  );
};

export default HomePage;
