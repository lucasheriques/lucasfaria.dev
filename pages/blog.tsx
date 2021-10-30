import Header from "components/Header";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-4xl mb-2">Blog</h1>
        <h2 className="text-xl mb-4 text-gray-300">
          A place to share my thoughts
        </h2>
        <p className="italic text-gray-400">work_in_progress</p>
      </main>
    </>
  );
};

export default Home;
