import { AppSidebar } from "@/components/app-sidebar"
import { NavMain } from "@/components/nav-main"
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import axios from "axios"
import {
    Building,
    Pencil,
    Plus,
    Settings2,
    Trash,
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
                url: "/private/createcmp",
                icon: Plus
            },
            {
                title: "Alter Company",
                url: "#",
                icon: Pencil,
            },

            {
                title: "Delete Company",
                url: "#",
                icon: Trash,
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
        <div className="w-full flex h-screen">
            <div >
                <SidebarProvider>
                    <AppSidebar navMain={sidebarData.NavMain} />
                    <SidebarInset>
                        <div className="flex items-center gap-2 px-4 py-4.5">
                            <SidebarTrigger className="-ml-1" ></SidebarTrigger>
                        </div>
                    </SidebarInset>

                </SidebarProvider>


            </div>
            <div className="w-[100%] p-10 pl-20">
                    <p className="text-3xl font-medium ">Welcome back, <span className=" text-orange-600">Shirish</span> </p>
                    <p className="text-gray-500 text-sm">Let's start with choosing a company to work with.</p>
                    <div className="mt-10 w-[90%] shadow-xl rounded-lg p-8">
                        <p className="text-sm">Select Company</p>

                        <Command  >
                            <CommandInput  placeholder="Search for a company" />
                            <CommandList className="max-h-[450px] " >
                                <CommandEmpty>No Company Found.</CommandEmpty>
                                {companies && companies.map((company) => (
                                    <CommandItem key={company._id} onSelect={()=>handleCmpSelect(company._id)}><Building className="text-orange-600"/>{company.name}</CommandItem>
                                ))}
                            </CommandList>
                        </Command>


                    </div>
               
               
            </div>

        </div>
    )
}