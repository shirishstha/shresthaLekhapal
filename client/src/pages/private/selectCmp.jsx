import { AppSidebar } from "@/components/app-sidebar"
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"


export const SelectCmp = () => {
    const companies = ["PS kirana pasal", , "Team trade pvt.ltd", "GS Khadya Supplier", "Manichood Finance", "Seto bagh pvt.ltd 2075/2076", "CG group and INdustries","cmp","cmp1","cmp2","cmp3","cmp4","cmp6","cmp7","cmp8","cmp9","cmp10"]
    const sidebarData = {
        navMain: [
            {
            title: "Settings",
            url: "#",
            icon: Settings2
        },
            {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {  title: "hello", url: "#"},
                {  title: "hi", url: "#"}
             
            ]}
    ]

    }
    return (
        <div className="grid grid-cols-8 h-screen">
            <div className="col-span-2">
                <SidebarProvider>
                    <AppSidebar navMain={sidebarData.navMain} />
                    <SidebarInset>
                        <div className="flex items-center gap-2 px-4 py-4.5">
                            <SidebarTrigger className="-ml-1" ></SidebarTrigger>
                        </div>
                    </SidebarInset>

                </SidebarProvider>


            </div>
            <div className="col-span-6">
                <div className="p-10 ">
                    <p className="text-3xl  "><span className="text-orange-600">Welcome back,</span> Shirish</p>
                    <p className="text-gray-500 text-sm">Let's start with choosing a company to work with.</p>
                    <div className="mt-10 w-[90%]">

                        <Command >
                            <CommandInput placeholder="Select a company" />
                            <CommandList className="max-h-[450px] " >
                                <CommandEmpty>No Company Found.</CommandEmpty>
                                {companies.map((company) => (
                                    <CommandItem><Settings2/>{company}</CommandItem>
                                ))}
                            </CommandList>
                        </Command>


                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}