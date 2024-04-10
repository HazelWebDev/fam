const features = [
  {
    name: "Minimal and thoughtful",
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc: "/1.png",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc: "/2.png",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

export default function Gallery2({ data }) {
  return (
    <div>
      {/* Decorative image grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
      >
        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-6 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-6">
          <div className="flex items-center space-x-4 lg:space-x-8 mt-24">
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-68 w-48 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-68 w-48 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-68 w-48 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-68 w-48 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-68 w-48 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-68 w-48 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-68 w-48 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <a
        href="#"
        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
      >
        Shop Collection
      </a> */}
    </div>
  );
}
