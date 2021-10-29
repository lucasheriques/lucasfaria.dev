import Header from "components/Header";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header />
      <main>
        <h1 className="text-4xl mb-2">Hi, {`I'm`} Lucas 👋</h1>
        <h2 className="text-xl mb-4">
          Software engineer that loves to build delightful digital experiences
        </h2>
        <p className="italic">work_in_progress</p>
      </main>
    </>
  );
};

export default Home;
