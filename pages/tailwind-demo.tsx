import Layout from "../components/Layout";
import WorkationHero from "../components/WorkationHero/WorkationHero";
import DestinationCard from "../components/DestinationCard/DestionationCard";
import popularDestinations from "../data/popularDestionations"



const TailwindDemo = () => (
  <Layout title="Sergio Gabriel | Frontend Developer">
    <div className="bg-gray-100 h-screen overflow-scroll">
      <WorkationHero />
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8 ">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
          {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default TailwindDemo;
