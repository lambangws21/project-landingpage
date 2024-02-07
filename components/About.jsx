import NersImg from "./NersImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  PhoneCallIcon,
  Calendar,
  GraduationCapIcon,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Lambang Ws",
  },
  {
    icon: <PhoneCallIcon size={20} />,
    text: "+628123456789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Lambangws8@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Agustus 1994",
  },
  {
    icon: <GraduationCapIcon size={20} />,
    text: "S1 Ilmu Keperawatan dan Profesi Keperawatan",
  },
];

const qualificationsData = [
  {
    title: "educational",
    data: [
      {
        university: "Universitas Respati Yogyakarta",
        qualification: "S1 dan Profesi Keperawatan",
        years: "2015 - 2019",
      },
      {
        university: "Universitas Respati Yogyakarta",
        qualification: "S1 dan Profesi Keperawatan",
        years: "2015 - 2019",
      },
      {
        university: "Universitas Respati Yogyakarta",
        qualification: "S1 dan Profesi Keperawatan",
        years: "2015 - 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        university: "Rumah Sakit Respati Yogyakarta",
        role: "Perawat",
        years: "2015 - 2019",
      },
      {
        university: "Rumah Sakit Respati Yogyakarta",
        role: "Perawat",
        years: "2015 - 2019",
      },
      {
        university: "Rumah Sakit Respati Yogyakarta",
        role: "Perawat",
        years: "2015 - 2019",
      },
    ],
  },
];
const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "Pelayanan secara efektif, komunikasi efektif, pemasangan infus, pemberian infus ",
      },
      {
        name: "Pelayanan secara efektif, komunikasi efektif, pemasangan infus, pemberian infus ",
      },
      {
        name: "Pelayanan secara efektif, komunikasi efektif, pemasangan infus, pemberian infus ",
      },
    ],
  },
];

const getData = (data, key) => {
  return data.find((item) => item.title === key);
};
const About = () => {
  return (
    <section className="md:h-[868px] pb-12 md:py-10 mt-10 md:mt-1">
      <div className="container mx-auto">
        <h2 className="about-section mb-8 md:mb-16 text-center ">About Us</h2>
      </div>
      {/* image */}
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:flex flex-1 relative">
          <NersImg
            containerStyles="bg-about_light dark:bg-about_dark w-[505px] h-[505px] relative bg-no-repeat"
            imgSrc="/about/about-image.svg"
          />
        </div>
        {/* tabs */}
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid md:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualifications"
              >
                Qualifications
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 md:mt-8">
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">
                    {" "}
                    Unmacthed service Quality for the best care
                  </h3>
                  <p className="title max-w-xl max-auto xl:mx-0">
                    I Spesialize in care giver and care taker. I have over 5
                    years of experience{" "}
                  </p>
                  <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primaty">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Skills </div>
                    <div className="border-b border-border"></div>
                    <div className="">Infus, Care Giver and Care Taker</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="qualifications">
                <div className="">
                  <h3 className="h3 mb-4 text-center xl:text-left">
                    My Awsome Journey
                  </h3>
                  <div className="flex gap-x-4 items-center text-[22px] text-primary">
                    <Briefcase />
                    <h4 className="capitalize font-medium">
                      {getData(qualificationsData, "experience").title}
                    </h4>
                  </div>
                  <div>
                    {getData(qualificationsData, "experience").data.map(
                      (item, index) => {
                        const { university, role, years } = item;
                        return (
                          <div key={index}>
                            <div>
                              <div>{university}</div>
                              <div>{role}</div>
                              <div>{years}</div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">Skill Info</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
