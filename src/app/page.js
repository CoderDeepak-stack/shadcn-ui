// import React from "react";
import Component from "@/components/comp-467"
import { Button } from "@/components/ui/button"
import { DialogDemo } from "@/components/ui/dialogdemo"
import { DrawerDemo } from "@/components/ui/drawerdemo"
import { cn } from "@/lib/utils"
import { Link } from "lucide-react"


const Page = () => {
  return (
    <>
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
        <Component/>
      </section>
    </>
  )
}

export default Page