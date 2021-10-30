import Header from "components/Header";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="mb-2">Hi, {`I'm`} Lucas 👋</h1>
        <h2 className="mb-4 dark:text-gray-300">
          I create delightful product experiences for all kinds of people
        </h2>
        <p className="italic dark:text-gray-400">work_in_progress</p>
      </main>
    </>
  );
};

export default Home;
