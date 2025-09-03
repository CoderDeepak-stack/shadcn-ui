// import React from "react";
import { Button } from "@/components/ui/button"
import {CarouselDemo} from "@/components/ui/CarouselDemo"
import { DialogDemo } from "@/components/ui/dialogdemo"
import DrawerDemo from "@/components/ui/DrawerDemo"
import { ModeToggle } from "@/components/ui/ModeToggle"
import PasswordValidator from "@/components/ui/PasswordValidator"
import SheetDemo from "@/components/ui/SheetDemo"
import SonnerDemo from "@/components/ui/SonnerDemo"
import { cn } from "@/lib/utils"
import { Link } from "lucide-react"


const Page = () => {
  return (
    <>
    <section className="grid place-items-center">
      <h1 className="text-vinod">Hello Dark Mode</h1>
      <section>
        <ModeToggle/>
      </section>
      <p className = {cn(
        "bg-black text-white", 
        "bg-amber-300 text-blue-700"
      )} 
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum optio quod aliquam nam provident.
      </p>
      <Button asChild={true} variant={"default"} >
        <Link href= "https://www.youtube.com/">
        
        Click Me
        </Link>
        
      </Button>

      <section>
        <DialogDemo/>
      </section>

      <section>
        <DrawerDemo/>
      </section>

      <section>
        <CarouselDemo/>
      </section>

      <section>
        <SheetDemo/>
      </section>

       <section>
        <SonnerDemo/>
      </section>

      <section>
        <PasswordValidator/>
      </section>

    </section>
      
    </>
  )
}

export default Page