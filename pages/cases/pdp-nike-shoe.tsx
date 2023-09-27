import { useRouter } from "next/router";

export default function IdPage() {
  const router = useRouter();
  return (
    <div className="">
      <div className="photo-grid grid grid-cols-4 gap-1">
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
      <div className="product-details pt-10 pb-0 grid grid-cols-4">
        <div className="product-details__headline px-4 col-span-2">
          <h1 className="text-5xl font-bold max-w-[80%] mt-0 mb-4">
            NIKE AIR FORCE 1 07 REC (W)
          </h1>
          <p className="text-base">WHITE / JADE ICE</p>
        </div>
        <div className="product-details__info px-4 font-sans">
          <h2 className="text-md text-bold font-sans mb-4">USD99.00</h2>
          <p className="text-sm font-sans">
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
            soft and comfortable. Foam midsole Perforations on the toe Materials
            Leather Shipping fitsole.shop uses Mylerz, one of the leading
            Courier Companies in Egypt, offering FREE door to door delivery on
            every order within Egypt. More info Return & Exchange We offer free
            refunds on your orders. Products can be returned within a period of
            14 days, starting from the moment you receive your order. More info
          </p>
        </div>
        <div className="sticky col-span-4 font-sans">
          <div className="flex">
            <select name="size" id="">
              <option value="">Select Size</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
            </select>
            <button>Add To Wishlist</button>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
