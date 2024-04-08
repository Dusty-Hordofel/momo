import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileNavLinkProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

const MobileNavLink = ({
  title,
  href,
  className,
  ...props
}: MobileNavLinkProps) => {
  return (
    <div
      {...props}
      className={cn(
        "text-[28px] text-black relative hover:text-black/50 ",
        className
      )}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default MobileNavLink;
