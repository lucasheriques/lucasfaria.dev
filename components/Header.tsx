import { useTheme } from "next-themes";
import Link from "next/link";
import NavLink from "./NavLink";

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={`flex items-center justify-center dark:text-gray-500 dark:bg-gray-600 focus:ring-2 p-1.5 rounded-sm hover:text-gray-900 focus:outline-none focus:text-gray-900`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}

function Header() {
  return (
    <div className="mb-16">
      <nav className="flex flex-row items-center justify-between space-x-8">
        <div className="space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
        </div>
        <DarkModeToggle />
      </nav>
    </div>
  );
}

export default Header;
