import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./input";


const SheetDemo = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger aschild>
                    <Button>

                        Open Sheet
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                            <div className="grid flex-1 auto-rows-min gap-6 px-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="sheet-demo-name">Name</Label>
                                    <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="sheet-demo-username">Username</Label>
                                    <Input id="sheet-demo-username" defaultValue="@peduarte" />
                                </div>
                            </div>

                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default SheetDemo;