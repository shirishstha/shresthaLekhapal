import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { Helmet } from "react-helmet"

export const HomePage = () => {
  const sidebarData = {
     navMain: [
    {
      title: "Sales",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Customer",
          url: "#",
        },
        {
          title: "Sales Invoice",
          url: "#",
        },
        {
          title: "Receipt",
          url: "#",
        },
      ],
    },
    {
      title: "Purchase",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Purchase Bill",
          url: "#",
        },
        {
          title: "Supplier",
          url: "#",
        },
        {
          title: "Payment",
          url: "#",
        },
      ],
    },
    {
      title: "Income & Expenses",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Income",
          url: "#",
        },
        {
          title: "Expenses",
          url: "#",
        },
      ],
    },
    {
      title: "Ledgers",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Create Ledger",
          url: "#",
        },
        {
          title: "Update Ledger",
          url: "#",
        },
        {
          title: "Display Ledger",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Daybook",
          url: "#",
        },
        {
          title: "Balance Sheet",
          url: "#",
        },
        {
          title: "Expenses",
          url: "#",
        },

      ],
    },
    {
      title: "Items",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Create Item",
          url: "#",
        },
        {
          title: "Update Item",
          url: "#",
        },
        {
          title: "Display Item",
          url: "#",
        },

      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Update Company",
          url: "#",
        },
        {
          title: "Delete Company",
          url: "#",
        },

      ],
    },
  ],
  }
  return (
    <SidebarProvider>
      <Helmet>
        <title>Lekhapal-Home</title>
        <meta name="description" content="Shrestha lekhapal Home Page"/>
        <meta name="keywords" content="lehapal, shrestha lekhapal, homepage, acccounts"/>
      </Helmet>
      <AppSidebar navMain={sidebarData.navMain}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
