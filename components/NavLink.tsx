import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";

interface NavLinkProps {
  activeClassName?: string;
  children: React.ReactNode;
}

function NavLink({
  activeClassName = "text-white",
  children,
  ...props
}: NavLinkProps & LinkProps) {
  const { pathname } = useRouter();
  const isActive = pathname === props.href;

  return (
    <Link {...props}>
      <span
        className={`cursor-pointer ${
          isActive ? activeClassName : "text-gray-400"
        }`}
      >
        {children}
      </span>
    </Link>
  );
}

export default NavLink;
