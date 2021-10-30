import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";

interface NavLinkProps {
  activeClassName?: string;
  children: React.ReactNode;
}

function NavLink({
  activeClassName = "dark:text-white font-bold",
  children,
  ...props
}: NavLinkProps & LinkProps) {
  const { pathname } = useRouter();
  const isActive = pathname === props.href;

  return (
    <Link {...props}>
      <span
        className={`cursor-pointer -mx-3 py-2 px-3 rounded-md dark:hover:bg-gray-800  hover:bg-gray-200 transition-all ${
          isActive ? activeClassName : "dark:text-gray-400 text-gray-400"
        }`}
      >
        {children}
      </span>
    </Link>
  );
}

export default NavLink;
