"use client";
import Link from "next/link";
import { Button } from "./ui/button";
// swipper styles
import "swiper/css";
import "swiper/css/navigation";
// requred modules
import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/4.png",
    category: "Home Care",
    name: "Nursing Care",
    discription:
      "Pelayanan nursing care adalah perawatan holistik yang memberikan perhatian penuh pada pasien.",
    link: "/",
    facebook: "/",
  },
  {
    image: "/work/3.png",
    category: "Home Care",
    name: "Nursing Care",
    discription:
      "Pelayanan nursing care adalah perawatan holistik yang memberikan perhatian penuh pada pasien.",
    link: "/",
    facebook: "/",
  },
  {
    image: "/work/2.png",
    category: "Home Care",
    name: "Nursing Care",
    discription:
      "Pelayanan nursing care adalah perawatan holistik yang memberikan perhatian penuh pada pasien.",
    link: "/",
    facebook: "/",
  },
  {
    image: "/work/1.png",
    category: "Home Care",
    name: "Nursing Care",
    discription:
      "Pelayanan nursing care adalah perawatan holistik yang memberikan perhatian penuh pada pasien.",
    link: "/",
    facebook: "/",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="bg-slate-200/20 dark:bg-accent p-3 rounded-[30px] max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="title-section mb-4">Latest Services</h2>
          <p className="title mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
            distinctio?
          </p>
          <Link href="/project">
            <Button>All Our Services</Button>
          </Link>
        </div>
        {/* slider */}
        <div>
            
        </div>
      </div>
    </section>
  );
};

export default Work;
