"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
// swipper styles

import "swiper/css";
import "swiper/css/pagination";
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
    facebook: "/facebook.com",
  },
  {
    image: "/work/3.png",
    category: "Infusion Care",
    name: "Infusion Care",
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
        <div className="xl:max-w-[1000px] xl:absolute right-6 top-0">
          <Swiper
            className="h-[480px] w-[820px] gap-y-4"
            slideperview={1}
            breakpoints={{ 340: { slidesPerView: 2 } }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* hanya menampilkankan 4 items slide */}
            {projectData.slice(0.4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
