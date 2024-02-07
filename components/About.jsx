import NersImg from "./NersImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  PhoneCallIcon,
  Calendar,
  GraduationCapIcon,
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
    title: "Educational",
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
    title: "Experience",
    data: [
      {
        university: "Rumah Sakit Respati Yogyakarta",
        qualification: "Perawat",
        years: "2015 - 2019",
      },
      {
        university: "Rumah Sakit Respati Yogyakarta",
        qualification: "Perawat",
        years: "2015 - 2019",
      },
      {
        university: "Rumah Sakit Respati Yogyakarta",
        qualification: "Perawat",
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

const About = () => {
  return (
    <section className="md:h-[868px] pb-12 md:py-24">
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
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 md:mt-8">
              <TabsContent value="personal">Personal Info</TabsContent>
              <TabsContent value="qualifications">Qualifications Info</TabsContent>
              <TabsContent value="skills">Skill Info</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
