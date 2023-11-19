import { open_sans } from "../../fonts/fonts";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";

export default function IdPage() {
  const router = useRouter();
  return (
    <>
      <div className="pb-6">
        <div className="photo-grid grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="photo-grid__item bg-slate-200">
            <img
              src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHSRH000-2000.png?v=1695632655"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="photo-grid__item bg-slate-200">
            <img
              src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHSYD002-2000.png?v=1695632655"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="photo-grid__item bg-slate-200">
            <img
              src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHCTH001-2000.png?v=1695632655"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="photo-grid__item bg-slate-200">
            <img
              src="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHCFH001-2000.png?v=1695632654"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="product-details pt-10 pb-0 flex flex-col lg:grid lg:grid-cols-8 lg:grid-rows-2 lg:gap-2">
          <div className="product-details__headline col-span-4 row-span-2 px-4">
            <h1 className="text-5xl font-bold max-w-[90%] mt-0 mb-4">
              NIKE AIR FORCE 1 07 REC (W)
            </h1>
            <p className="text-base">WHITE / JADE ICE</p>
          </div>
          <div className="product-details__info px-4 py-4 lg:py-0 font-sans col-span-2 row-span-2 col-start-5">
            <h2 className="text-md text-bold font-sans mb-4">USD99.00</h2>
            <p className={`${open_sans.className} text-sm font-light`}>
              Debuting in 1982, the AF1 was the first basketball shoe to house
              Nike Air, revolutionizing the game while rapidly gaining traction
              around the world. Today, the Air Force 1 stays true to its roots
              with the same soft and springy cushioning that changed sneaker
              history. The radiance lives on in the Nike Air Force 1 ’07, the
              b-ball icon that puts a fresh spin on what you know best: crisp
              leather, bold colors and the perfect amount of flash to make you
              shine. The stitched leather overlays on the upper add heritage
              style, durability and support. Originally designed for hoops, Nike
              Air cushioning adds lightweight, all-day comfort. The low-cut
              silhouette adds a clean, streamlined look. The padded collar feels
              soft and comfortable. Foam midsole Perforations on the toe
              Materials Leather Shipping fitsole.shop uses Mylerz, one of the
              leading Courier Companies in Egypt, offering FREE door to door
              delivery on every order within Egypt. More info Return & Exchange
              We offer free refunds on your orders. Products can be returned
              within a period of 14 days, starting from the moment you receive
              your order. More info
            </p>
          </div>
          <div className="sticky font-sans col-span-2 row-span-2 col-start-7">
            <div className="flex flex-col px-4">
              <div className="relative mb-6 flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
                <select
                  required
                  className="block w-full text-sm text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30"
                >
                  <option value="" disabled selected>
                    Select an size
                  </option>
                  <option value="option-1">LG</option>
                  <option value="option-2">XL</option>
                  <option value="option-3">XXL</option>
                </select>
              </div>
              <button className="text-sm mb-6 bg-transparent hover:bg-white text-white hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add To Wishlist
              </button>
              <button className="text-sm mb-6 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
