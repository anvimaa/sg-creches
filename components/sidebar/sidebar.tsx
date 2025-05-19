"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/components/providers/sidebar-provider'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  Users, 
  UserRound, 
  CalendarDays, 
  FileText, 
  DollarSign, 
  FolderOpen, 
  UtensilsCrossed,
  Cog,
  ChevronRight,
  School,
  LogOut
} from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  isCollapsed: boolean
}

function SidebarItem({ icon: Icon, label, href, isCollapsed }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <TooltipProvider disableHoverableContent delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn(
              "flex items-center py-2 px-3 rounded-md text-sm group transition-colors",
              isActive
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-accent"
            )}
          >
            <Icon className={cn("h-5 w-5", isCollapsed ? "mx-auto" : "mr-2")} />
            {!isCollapsed && <span>{label}</span>}
          </Link>
        </TooltipTrigger>
        {isCollapsed && (
          <TooltipContent side="right" className="flex items-center gap-4">
            {label}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}

export function Sidebar() {
  const { isOpen } = useSidebar()
  
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex flex-col border-r bg-background transition-all duration-300",
        isOpen ? "w-64" : "w-[80px]"
      )}
    >
      <div className={cn(
        "flex h-16 items-center border-b px-4",
        isOpen ? "justify-between" : "justify-center"
      )}>
        {isOpen ? (
          <Link href="/dashboard" className="flex items-center gap-2">
            <School className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Criança Feliz</span>
          </Link>
        ) : (
          <Link href="/dashboard">
            <School className="h-6 w-6 text-primary" />
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn("hidden lg:flex", !isOpen && "hidden")}
          onClick={() => {/* toggle collapse */}}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="flex flex-col gap-1 px-2">
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Dashboard" 
            href="/dashboard" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={UserRound} 
            label="Crianças" 
            href="/criancas" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={Users} 
            label="Responsáveis" 
            href="/responsaveis" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={Users} 
            label="Funcionários" 
            href="/funcionarios" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={CalendarDays} 
            label="Agenda" 
            href="/agenda" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={DollarSign} 
            label="Financeiro" 
            href="/financeiro" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={FolderOpen} 
            label="Documentos" 
            href="/documentos" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={UtensilsCrossed} 
            label="Alimentação" 
            href="/alimentacao" 
            isCollapsed={!isOpen} 
          />
          <SidebarItem 
            icon={FileText} 
            label="Relatórios" 
            href="/relatorios" 
            isCollapsed={!isOpen} 
          />
        </nav>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-1 px-2">
          <SidebarItem 
            icon={Cog} 
            label="Configurações" 
            href="/configuracoes" 
            isCollapsed={!isOpen} 
          />
          <Link
            href="/logout"
            className="flex items-center py-2 px-3 rounded-md text-sm group transition-colors text-destructive hover:bg-destructive/10"
          >
            <LogOut className={cn("h-5 w-5", !isOpen ? "mx-auto" : "mr-2")} />
            {isOpen && <span>Sair</span>}
          </Link>
        </nav>
      </ScrollArea>
    </aside>
  )
}