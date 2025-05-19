"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Pencil, UtensilsCrossed, Apple, Coffee, Soup } from 'lucide-react'

interface MenuItem {
  day: string
  meals: {
    type: string
    description: string
  }[]
}

interface WeeklyMenuProps {
  menuItems: MenuItem[]
}

export function WeeklyMenu({ menuItems }: WeeklyMenuProps) {
  const [activeTab, setActiveTab] = useState('Segunda-feira')
  
  const getMealIcon = (type: string) => {
    if (type.toLowerCase().includes('café')) {
      return <Coffee className="h-4 w-4" />
    } else if (type.toLowerCase().includes('lanche')) {
      return <Apple className="h-4 w-4" />
    } else if (type.toLowerCase().includes('almoço') || type.toLowerCase().includes('jantar')) {
      return <Soup className="h-4 w-4" />
    } else {
      return <UtensilsCrossed className="h-4 w-4" />
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Cardápio Semanal</CardTitle>
            <CardDescription>Cardápio da semana de 24 a 28 de junho de 2023</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Pencil className="mr-2 h-4 w-4" />
            Editar Cardápio
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 mb-6">
            {menuItems.map((item) => (
              <TabsTrigger key={item.day} value={item.day}>
                {item.day.split('-')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {menuItems.map((item) => (
            <TabsContent key={item.day} value={item.day} className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                {item.meals.map((meal, index) => (
                  <Card key={index} className="flex-1">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        {getMealIcon(meal.type)}
                        {meal.type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{meal.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-muted/50 p-4 rounded-md mt-6">
                <h3 className="font-medium text-sm mb-2">Considerações sobre Alergias e Restrições</h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span>Crianças com alergia a amendoim: substituir o pão com manteiga de amendoim por pão com geleia</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                    <span>Crianças com intolerância à lactose: substituir leite comum por leite sem lactose ou bebida vegetal</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span>Crianças com restrição ao glúten: substituir pães e massas tradicionais por versões sem glúten</span>
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}