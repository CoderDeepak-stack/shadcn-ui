"use client"

import { toast } from "sonner";
import { Button } from "./button";
// import { Button } from "./button";



const SonnerDemo = () => {
    return(
        <>
        <Button onclick={() => toast("hello deepak")}>
            Toast
        </Button>

        <Button 
        className="toast-button"
        onclick = {() => {
            toast.success("Hi babu")
        }}
        >
            Success
        </Button>
        </>
    )
}

export default SonnerDemo;