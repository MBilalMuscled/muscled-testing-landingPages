import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { SVGProps } from "../../../types/types";

interface IProps {
  children?: ReactNode;
  className?: string;
  title: string;
  desc: string;
  HeroIcon: React.FC<SVGProps>;
}

const Hero14: NextPage<IProps> = ({
  className,
  title,
  desc,
  children,
  HeroIcon,
}) => {
  const router = useRouter();

  return (
    <div
      className={`h-[767px] bg-black-70 justify-center  items-center text-white flex ${className}`}
    >
      <div className="w-[720px] mr-[84px] flex flex-col gap-y-4 justify-start">
        <p className="text-lg">
          <span>Home {router.asPath.replace("/", " > ")}</span>
        </p>
        <h1 className="my-5 leading-[72.8px] text-[56px]">{title}</h1>
        <p className="text-xl font-normal leading-[38.9px] mb-[30px]">{desc}</p>
        <div className="flex flex-start">
          {/* @ts-ignore */}
          {children.map((item: JSX.Element, idx: number) => (
            <div key={title + idx.toString()} onClick={() => console.log(idx)}>
              {item}
            </div>
          ))}{" "}
        </div>
      </div>
      <HeroIcon className="w-[436px]" />
    </div>
  );
};

export default Hero14;
