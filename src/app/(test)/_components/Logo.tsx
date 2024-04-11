import Link from "next/link";
import Instagram2 from "@/assets/icons/instagram/Instagram2";
import Instagram1 from "@/assets/icons/instagram/Instagram1";

const Logo = () => {
  return (
    <Link href={"/dashboard"} className="w-full ">
      <div className="xl:hidden px-3 h-12 w-12 my-2 flex  justify-start items-center">
        <Instagram1 />
      </div>
      <div className="px-3 pb-4 pt-[25px] h-[73px] mb-[19px] items-center justify-start hidden xl:flex ">
        <Instagram2 />
      </div>
    </Link>
  );
};

export default Logo;
