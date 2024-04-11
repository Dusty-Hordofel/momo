// import Sidebar from "@/components/Sidebar";

import SideNav from "../_components/SideNav";

// import SideNav from "@/components/SideNav";

const TestLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
      <div className="md:w-[72px] xl:w-[220px] 3xl:w-[311px] flex-none md:border-r transition-all px-3 pt-2 pb-5">
        <SideNav />
      </div>
      <section className="bg-yellow-300 w-full">{children}</section>
    </div>
  );
};

export default TestLayout;
