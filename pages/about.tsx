import Header from "components/Header";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="mb-2">About</h1>
        <h2 className="mb-4 dark:text-gray-200">Some history about myself</h2>
        <p className="dark:text-gray-300">
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
