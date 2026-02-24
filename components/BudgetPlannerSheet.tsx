import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Bot } from "lucide-react"
import BudgetPlanner from "./BudgetPlanner"
import { Label } from "./ui/label"
import { Input } from "@base-ui/react"

export function BudgetPlannerSheet() {
    return (
        <Sheet>
            <SheetTrigger >
                <Button variant="outline" className="gap-2 border-violet-200 text-violet-700 hover:bg-violet-50">
                    <Bot className="h-4 w-4" />
                    Ask AI Budget Planner
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-violet-800">AI Budget Planner</SheetTitle>
                    <SheetDescription>
                        Tell us your budget, and we&apos;ll create a meal plan and shopping list for you.
                    </SheetDescription>
                </SheetHeader>
                {/* <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-name">Name</Label>
                        <Input id="sheet-demo-name" className={"border-2 "} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-username">Username</Label>
                        <Input id="sheet-demo-username" className={"border-2 "}/>
                    </div>
                </div> */}
                <BudgetPlanner />

            </SheetContent>
        </Sheet>
    )
}