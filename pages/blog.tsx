import Header from "components/Header";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="mb-2">Blog</h1>
        <h2 className="mb-4 dark:text-gray-200">
          A place to share my thoughts
        </h2>
        <p className="italic dark:text-gray-300">work_in_progress</p>
      </main>
    </>
  );
};

export default Home;
