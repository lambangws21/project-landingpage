import { GanttChartSquare, BlocksIcon, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Booster infusion",
    discription:
      "Infus booster adalah layanan menyediakan infus cairan dengan tambahan vitamin dan mineral.",
  },
  {
    icon: <BlocksIcon size={72} strokeWidth={0.8} />,
    title: "Cupping therapy",
    discription:
      "Cupping terapi adalah metode pengobatan alternatif dengan menempelkan cangkir pada kulit untuk mengurangi nyeri.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Akupuntur",
    discription:
      "Akupuntur adalah metode pengobatan tradisional Tiongkok yang menggunakan jarum untuk merangsang titik-titik energi.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="title-section mb-12 xl:mb-24 text-center mx-auto">Our Services</h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">{servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                    <CardTitle className="mb-4">{item.title}</CardTitle >
                    <CardDescription className="text-lg">{item.discription}</CardDescription>
                </CardContent>
              </Card>
            );
        })}</div>
      </div>
    </section>
  );
};

export default Services;
