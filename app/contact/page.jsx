import Form from "@/components/Form";
import { HomeIcon, PhoneCallIcon, MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* Text dan gambat */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className=" flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className=" w-[30px] h-[2px] bg-primary"></span>
              Say hello 🎉
            </div>
            <h1 className="text-8xl font-bold max-w-md mb-8 ">
              Let's Contact Us.
            </h1>
            <p className="title max-w-[400px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit!
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_light dark:bg-contact_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info Form & text */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* email icons */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"/>
              <div className="">lambangws8@gmail.com</div>
            </div>
              {/* email alamat */}
              <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary"/>
              <div className="">Duren Sawit, Klender, Jakarta Timur.</div>
            </div>
              {/* email Phone */}
              <div className="flex items-center gap-x-8">
              <PhoneCallIcon size={18} className="text-primary"/>
              <div className="">+628515123456</div>
            </div>
          </div>
          {/* Form Info */}
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
