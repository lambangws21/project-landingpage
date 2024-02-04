"use client";
import {
  RiYoutubeFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

import Link from "next/link";
import { usePathname } from "next/navigation";
const icons = [
  {
    path: "/",
    name: <RiYoutubeFill/>
  },
  {
    path: "/",
    name: <RiFacebookBoxFill/>
  },
  {
    path: "/",
    name: <RiInstagramFill/>
  },
  {
    path: "/",
    name: <RiLinkedinBoxFill/>
  },
]
const Social = ({containerStyles, iconsStyles}) => {

  return <div className={`${containerStyles}`}>
    {icons.map((icon, index) => {
      return (
        <Link href={icon.path} key={index} className={`${iconsStyles}`}>
          {icon.name}
        </Link>
      );
    })}
  </div>;
};

export default Social;
