export default function Title({ data }) {
  console.log("data", data);
  return (
    <div className="pt-16 sm:pb-20 lg:mx-40 lg:pb-32 lg:pt-40">
      <div className="relative max-w-7xl px-4 sm:static sm:px-12 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {data.title}
          </h1>
          <p className="mt-4 text-xl text-gray-500">{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
