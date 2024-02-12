"use client";
import React, { useState } from "react";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
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
    category: "Home Care",
    name: "Nursing Care",
    discription:
      "Pelayanan nursing care adalah perawatan holistik yang memberikan perhatian penuh pada pasien.",
    link: "/",
    facebook: "/",
  },
  {
    image: "/work/2.png",
    category: "Infusion Care",
    name: "Infusion Care",
    discription:
      "Pelayanan nursing care adalah perawatan holistik yang memberikan perhatian penuh pada pasien.",
    link: "/",
    facebook: "/",
  },
  {
    image: "/work/1.png",
    category: "Cupping therapy",
    name: "Nursing Care",
    discription:
      "Pelayanan nursing care adalah perawatan holistik yang memberikan perhatian penuh pada pasien.",
    link: "/",
    facebook: "/",
  },
];

// Remove category duplicate

const uniqueCategory = [
  "all projects",
  ...new Set(projectData.map((project) => project.category)),
];
const Services = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="title-section mb-8 xl:mb-16 text-center mx-auto">
          Serivices
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:mx-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
