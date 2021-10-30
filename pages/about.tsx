import Header from "components/Header";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-4xl mb-2">About</h1>
        <h2 className="text-xl mb-4 text-gray-300">
          Some history about myself
        </h2>
        <p className="text-gray-400">
          I deeply enjoy reading fantasy books, specially the ones with great
          world building and romance. I speak Portuguese and English. I love
          frontend engineering, and have a passion for animations and cute
          illustrations (hopefully I{`'`}ll learn to draw them someday). React
          and TypeScript is my bread and butter.
        </p>
      </main>
    </>
  );
};

export default Home;
