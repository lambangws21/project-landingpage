import Link from "next/link"
import Image from "next/image"
const Logo = () => {
  return <Link href="/">
    <div className="flex justify-center items-center">
    <Image src="/Logo.svg" alt="logo" width={36} height={36} />
    <h1 className="flex items-center text-lg font-extrabold">NurseCare <span className="text-primary text-5xl items-center flex -mt-4 animate-pulse">.</span></h1>
    </div>
  </Link>
}

export default Logo