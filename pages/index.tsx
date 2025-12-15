import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Coming Soon - Clean Coming Soon Page (Tailwind CSS, NextJs & HTML5) created by themeptation.net">
    <img
      src="/images/xera.svg"
      alt="Themeptation "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob"
    />
    <img
      src="/images/shapes.svg"
      alt="hero"
      className="absolute w-full left-24 bottom-24 animate-blob2"
    />
    <div className="relative z-10 py-6 space-y-12 lg:space-y-20 text-gray-900">
      <div className="text-center space-y-6">
        <h3 className="font-light text-xl uppercase tracking-wider">Global Feet</h3>
        <h1 className="text-4xl lg:text-6xl font-extrabold">Coming Soon</h1>
        <p className="text-lg lg:text-xl tracking-wide mx-6 lg:max-w-2xl lg:mx-auto">
          At Global Feet, we sell premium shoes and performance accessories worldwide.
        </p>
      </div>

      <div className="mx-6 lg:max-w-3xl lg:mx-auto grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="font-semibold text-xl">Our Mission</h2>
          <p className="text-gray-700 mt-2">To inspire movement through comfort, innovation, and durability.</p>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Our Vision</h2>
          <p className="text-gray-700 mt-2">To redefine sportswear by blending technology, style, and sustainability.</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
