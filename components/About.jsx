import NersImg from "./NersImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  PhoneCallIcon,
  Calendar,
  Briefcase,
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
  return <section>
    <div className="continer mx-auto">
      <h2 className="about-section mb-8 xl:mb-16 text-center ">About Us</h2>
    </div>
  </section>;
};

export default About;
