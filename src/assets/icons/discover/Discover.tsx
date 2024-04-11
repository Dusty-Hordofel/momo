"use client";
import { SVGProps } from "react";

const Discover: React.FC<SVGProps<SVGSVGElement>> = ({
  stroke = "black",
  ...props
}) => (
  <svg
    aria-label="Découvrir"
    className="x1lliihq x1n2onr6 x5n08af"
    fill="currentColor"
    // fill="#ffffff"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <title>Découvrir</title>
    <polygon
      fill="none"
      points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polygon>
    <polygon
      fillRule="evenodd"
      points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
    ></polygon>
    <circle
      cx="12.001"
      cy="12.005"
      fill="none"
      r="10.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></circle>
  </svg>
);

export default Discover;
