import Threads from "@/assets/icons/threads/Threads";
import Link from "next/link";
import React from "react";

const ThreadsLink = () => {
  return (
    <Link className="navlink group" href="https://www.threads.net/login">
      <div className="flex">
        <Threads />
        <div className="pl-4 hidden xl:flex">
          <span>Threads</span>
        </div>
      </div>
      <div className="w-full justify-end hidden group-hover:flex">
        <svg
          aria-label=""
          className="x1lliihq x1n2onr6 x1cp0k07"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 0 24 24"
          width="16"
        >
          <title></title>
          <path d="M22 14a1 1 0 0 0-1 1v4a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2V5a2.002 2.002 0 0 1 2-2h4a1 1 0 0 0 0-2H5a4.004 4.004 0 0 0-4 4v14a4.004 4.004 0 0 0 4 4h14a4.004 4.004 0 0 0 4-4v-4a1 1 0 0 0-1-1Zm0-13h-7a1 1 0 0 0 0 2h4.586L7.293 15.293a1 1 0 1 0 1.414 1.414L21 4.414V9a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1Z"></path>
        </svg>
      </div>
    </Link>
  );
};

export default ThreadsLink;
