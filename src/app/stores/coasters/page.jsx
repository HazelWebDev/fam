"use client";
import Header from "@/components/header";
import Gallery from "@/components/gallery";

const features = [
  {
    name: "Minimal and thoughtful",
    description: "Placeholder txt",
    imageSrc: "/coaster2.jpeg",
    imageAlt: "Coaster pattern with ____.",
  },
  {
    name: "Refined details",
    description: "Placeholder txt",
    imageSrc: "/coaster1.jpeg",
    imageAlt: "Coaster pattern with ____.",
  },
];

export default function Page() {
  return (
    <div>
      <div className="bg-gray-900 mt-6 pt-12">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Custom Coasters
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Protect your furniture for a good price.
          </p>
        </div>
      </div>
      <Gallery data={features} />
    </div>
  );
}
