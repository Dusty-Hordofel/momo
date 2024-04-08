import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkProps {
  title: string;
  href: string;
  style?: React.CSSProperties;
}
const NavLink = ({ title, href, className, ...props }: any) => {
  return (
    <div {...props} className={cn(className)} tabIndex={0}>
      <Link href={href}>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default NavLink;
