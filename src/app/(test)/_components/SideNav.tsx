// import { instagramLinks } from "@/assets/icons/others/links";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
// import DropdownMenu from "./BurgerMenu";
import ThreadsLink from "./ThreadsLink";
import { instagramLinks } from "@/assets/icons/others/links";
// import MoreDropDown from "./MoreDropdown";

const SideNav = () => {
  // console.log("🚀 ~ instagramLinks: SideNav", instagramLinks);

  return (
    <div className="flex h-full flex-col py-4 items-center bg-black justify-between">
      <div className="bg-white border-t dark:bg-black  w-full">
        <Logo />
        <NavLinks instagramLinks={instagramLinks} />
      </div>
      <div className="bg-white w-full">
        {/* <MoreDropDown /> */}
        <ThreadsLink />
        {/* <DropdownMenu /> */}
        {/* <MoreDropDown /> */}
      </div>
    </div>
  );
};

export default SideNav;
