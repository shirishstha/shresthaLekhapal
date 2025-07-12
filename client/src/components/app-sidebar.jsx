import * as React from "react"
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

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shirish",
    email: "sthasiriz123@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
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

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
