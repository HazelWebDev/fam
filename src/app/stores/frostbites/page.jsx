"use client";
import Title from "@/components/title";
import Gallery from "@/components/gallery2";

const heading = {
  title: "Frost Bites",
  subtitle: "blahblah blah",
};

const features = [
  {
    name: "Airy and Delicious",
    description: "Placeholder txt",
    imageSrc: "/7.png",
    imageAlt: "Coaster pattern with ____.",
  },
  {
    name: "Sweet or Savory Options",
    description: "Placeholder txt",
    imageSrc: "/8.png",
    imageAlt: "Coaster pattern with ____.",
  },
];

export default function Page() {
  return (
    <div>
      <Title data={heading} />
      <Gallery data={features} />
    </div>
  );
}
