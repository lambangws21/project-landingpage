import Link from "next/link";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownLine,
} from "react-icons/ri";

import NersImg from "./NersImg";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="py-12 md:py-24 h-[84vh] md:pt-28 bg-hero bg-cover bg-bottom bg-no-repeat dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/*Text*/}
          <div className="flex flex-col items-center justify-center mx-auto max-w-[700px] md:mx-0 text-center md:text-right">
            <h1 className="text-7xl md:text-8xl font-bold md:text-left leading-[1.1] text-center">
              Your <span className="text-primary">Health</span>, <br /> is Our
              Top Priority.
            </h1>
            <p className="mt-2 mb-20 max-w-[590px] mx-auto font-medium md:mx-0 md:text-start md:-ml-0 sm:ml-0 xl:-ml-14 tracking-normal">
              Your health, our priority. Discover personalized care at Nursecare
              for a happier, healthier you!
            </p>
            {/* Button */}
            <div className="btn-contact w-full md:flex">
              <Link href="/contact">
                <Button className="dark:text-white gap-x-2 w-64 text-lg ">
                  Contact Us <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* Social */}
            <Social
              containerStyles="flex gap-x-3 mt-8 mx-auto justify-center item-center md:mx-0"
              iconsStyles="text-foreground text-[34px] hover:text-primary hover:scale-125 transition-all"
            />
          </div>

          {/* Image */}

          <div className="hidden md:flex relative">
              {/* badge 1*/}
              <Badge
            containerStyles={`absolute top-[10%] -left-[5rem]`}
              icon={<RiBriefcase4Fill />}
              endCounNum={5}
              bagdeText={"Years Experience"}
            />
            {/* badge 2*/}
            <Badge
            containerStyles={`absolute top-[75%] -left-[1rem]`}
              icon={<RiTodoFill />}
              endCounNum={1}
              endCountText="k
"              bagdeText={"Patients"}
            />
            {/* badge 3 */}
            <Badge
            containerStyles={`absolute top-[59%] -right-8`}
              icon={<RiTeamFill />}
              endCounNum={2}
              endCountText="k
"              bagdeText={"Happy Patients"}
            />
            <div className="bg-hero_light dark:bg-hero_dark w-[500px] h-[500px] bg-no-repeat -top-1 -right-2">
              <NersImg
                containerStyles=" bg-hero_shape w-[510px] h-[462px] relative bg-no-repeat bg-bottom bg-cover dark:bg-none"
                imgSrc="/hero/herosection.svg"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-48 md:bottom-12 lg:hidden xl:hidden animate-bounce">
          <RiArrowDownLine className="text-3xl text-primary dark:bg-accent rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
