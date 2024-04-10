const navigation = {
  coast2coast: [
    { name: "Instagram", href: "instagram.com/engravedcoast2coast" },
    { name: "Tiktok", href: "instagram.com/engravedcoast2coast" },
    { name: "Etsy", href: "instagram.com/engravedcoast2coast" },
  ],
  frostbites: [
    { name: "Instagram", href: "instagram.com/engravedcoast2coast" },
    { name: "TikTok", href: "instagram.com/engravedcoast2coast" },
    { name: "Etsy", href: "instagram.com/engravedcoast2coast" },
  ],
  vibrantknots: [
    { name: "Instagram", href: "instagram.com/engravedcoast2coast" },
    { name: "TikTok", href: "instagram.com/engravedcoast2coast" },
    { name: "Etsy", href: "instagram.com/engravedcoast2coast" },
  ],
  vsyncart: [
    { name: "Instagram", href: "instagram.com/engravedcoast2coast" },
    { name: "TikTok", href: "instagram.com/engravedcoast2coast" },
    { name: "Etsy", href: "instagram.com/engravedcoast2coast" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="h-7"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Company name"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Coast2Coast
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.coast2coast.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Frost Bites
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.frostbites.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  VibrantKnots
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.vibrantknots.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Vsync Art
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.vsyncart.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
