"use client";
import { SVGProps } from "react";

const Search: React.FC<SVGProps<SVGSVGElement>> = ({
  stroke = "black",
  ...props
}) => (
  <svg
    aria-label="Search"
    className="x1lliihq x1n2onr6 x5n08af"
    fill="currentColor"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <title>Search</title>
    <path
      d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      x1="16.511"
      x2="22"
      y1="16.511"
      y2="22"
    ></line>
  </svg>
);

export default Search;
