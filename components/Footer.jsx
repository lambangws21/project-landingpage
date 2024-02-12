import Social from "./Social";

const Footer = () => {
  return (
    <footer className="bg-slate-700 dark:bg-accent py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Social
            containerStyles="flex gap-x-6"
            iconsStyles="text-primary text-[20px] xl:mx-0 mb-4 hover:scale-125 hover:text-white transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Herlambang Wicaksono. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
