import React, { FC } from "react";

const playIcon: FC = () => {
  return (
    <svg
      width="481"
      height="281"
      viewBox="0 0 481 281"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.5"
        width="481"
        height="280"
        rx="7"
        fill="#C40000"
        fillOpacity="0.26"
      />
      <rect
        width="107"
        height="76"
        transform="translate(187 102.5)"
        fill="#C40000"
        fillOpacity="0.63"
        className="cursor-pointer"
      />
      <path
        d="M254 140.5L227 130.5V150.5L254 140.5Z"
        fill="white"
        fillOpacity="0.85"
        className="cursor-pointer"
      />
    </svg>
  );
};

export default playIcon;
