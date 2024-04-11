// import {
//   Clapperboard,
//   Compass,
//   Heart,
//   Home,
//   LucideProps,
//   MessageCircle,
//   PlusSquare,
//   Search,
// } from "lucide-react";
// import { LucideIcon } from "lucide-react";
// "use server";
import {
  NewRelease,
  Home,
  Notifications,
  Messages,
  Discover,
  Reels,
  Search,
  Profile,
} from "..";
// import { SVGProps } from "react";

// type instagramLinks = {
//   href: string;
//   icon: React.FC<SVGProps<SVGSVGElement>>;
//   hideOnMobile?: boolean;
// };
// : Record<string, instagramLinks>
export const instagramLinks = {
  Home: { href: "/dashboard", icon: Home },
  Search: {
    href: "/dashboard/search",
    icon: Search,
    hideOnMobile: true,
  },
  Explore: { href: "/dashboard/explore", icon: Discover },
  Reels: {
    href: "/dashboard/reels",
    icon: Reels,
  },
  Messages: {
    href: "/dashboard/messages",
    icon: Messages,
  },
  Notifications: {
    href: "/dashboard/notifications",
    icon: Notifications,
    hideOnMobile: true,
  },
  Create: {
    href: "/dashboard/create",
    icon: NewRelease,
  },
  Profile: {
    href: "/dashboard/profile",
    icon: Profile,
  },
};
