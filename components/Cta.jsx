import { Button } from "./ui/button"
import Link from "next/link"
const Cta = () => {
  return (
    <section className="py-12 bg-primary/10 dark:bg-accent/40">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h3 mx-w-xl text-center mb-8">
                    Prepare to your health into reality? I'm here to help
                </h2>
                <Link href='/contact'>
                    <Button className="btn-contact">Contact Us</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta