import { AppSidebar } from "@/components/app-sidebar"
import { NavMain } from "@/components/nav-main"
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import axios from "axios"
import {
    Settings2,
} from "lucide-react"
import { useEffect, useState } from "react"

import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export const SelectCmp = () => {
    const token = useSelector(state => state.token);
    const [companies, setCompanies] = useState();
    const sidebarData = {
        NavMain: [
            {
                title: "Create Company",
                url: "#",
                icon: Settings2
            },
            {
                title: "Alter Company",
                url: "#",
                icon: Settings2,
            },

            {
                title: "Delete Company",
                url: "#",
                icon: Settings2,
            }

        ]

    }
    const navigate = useNavigate();
    const handleCmpSelect = (company) => {
        navigate(`/private/${company}`)
    }

    useEffect(()=>{
        const fetchAllCompany = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKENDAPI}/cmp/getAll-company`,{
          headers : {
            Authorization: `Bearer ${token}`
          }
        });
                if(res.data.success){
                    setCompanies(res.data.companies);
                }
                
            } catch (error) {
                console.log(error.message);
                toast.error(error.message);
            }

        }
        fetchAllCompany();
    },[])
    return (
        <div className="grid grid-cols-8 h-screen">
            <div className="col-span-2">
                <SidebarProvider>
                    <AppSidebar navMain={sidebarData.NavMain} />
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
                                {companies && companies.map((company) => (
                                    <CommandItem key={company._id} onSelect={()=>handleCmpSelect(company._id)}><Settings2 />{company.name}</CommandItem>
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