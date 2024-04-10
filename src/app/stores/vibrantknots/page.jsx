"use client";
import Header from "@/components/header";
import Gallery from "@/components/gallery";

const features = [
  {
    name: "Monsteras and Strings of Hearts",
    description: "Placeholder txt",
    imageSrc: "/SoH.jpeg",
    imageAlt: "Crochet plant with hanging pot.",
  },
  {
    name: "String of Pearls and Donkey Tails",
    description: "Placeholder txt",
    imageSrc: "/monstera.jpeg",
    imageAlt: "Variated green crochet plant.",
  },
];

export default function Page() {
  return (
    <div>
      <div className="bg-gray-900 mt-6 pt-12">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            VibrantKnots Crochet
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A plant with no mortal timeline.
          </p>
        </div>
      </div>
      <Gallery data={features} />
    </div>
  );
}
