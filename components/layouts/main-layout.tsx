"use client"

import React from 'react'
import { Sidebar } from '@/components/sidebar/sidebar'
import { Header } from '@/components/header/header'
import { useSidebar } from '@/components/providers/sidebar-provider'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isOpen } = useSidebar()

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className={cn(
        "flex-1 transition-all duration-300 flex flex-col",
        isOpen ? "lg:ml-64" : "lg:ml-20"
      )}>
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}