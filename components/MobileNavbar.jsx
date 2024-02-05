import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Social from "./Social";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navbar
              containerStyles="flex flex-col gap-y-5 items-center"
              linkStyles="text-2xl font-semibold"
            />
          </div>
          <Social
            containerStyles=" flex  item-center justify-center    gap-x-4 mt-10"
            iconsStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
