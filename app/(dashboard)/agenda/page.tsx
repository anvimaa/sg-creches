"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { ActivityList } from '@/components/agenda/activity-list'
import { ClassSchedule } from '@/components/agenda/class-schedule'

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState('calendario')
  
  // Simulate some events for the calendar
  const events = [
    new Date(2023, 5, 5),
    new Date(2023, 5, 12),
    new Date(2023, 5, 15),
    new Date(2023, 5, 22),
    new Date(2023, 5, 24),
    new Date(2023, 5, 28),
  ]
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agenda</h1>
          <p className="text-muted-foreground">Planejamento de atividades e horários</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Atividade
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="calendario">Calendário</TabsTrigger>
          <TabsTrigger value="atividades">Atividades</TabsTrigger>
          <TabsTrigger value="horarios">Horários</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calendario" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Calendário</CardTitle>
                <CardDescription>Selecione uma data para ver as atividades</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    hasEvent: events,
                  }}
                  modifiersStyles={{
                    hasEvent: { 
                      backgroundColor: 'hsl(var(--primary)/15%)',
                      fontWeight: 'bold',
                      borderRadius: '0.25rem',
                    },
                  }}
                />
                
                <div className="mt-4 space-y-2 border-t pt-4">
                  <h3 className="text-sm font-medium">Legenda</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded bg-primary/15"></div>
                    <span className="text-xs">Atividades programadas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>{date ? date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'Selecione uma data'}</CardTitle>
                <CardDescription>Atividades programadas para este dia</CardDescription>
              </CardHeader>
              <CardContent>
                {date ? (
                  <div className="space-y-4">
                    <div className="border p-3 rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge>09:00 - 10:00</Badge>
                          <h3 className="font-medium mt-1">Atividade de Música</h3>
                        </div>
                        <Badge variant="outline">Turma Jardim</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Aula de musicalização com instrumentos de percussão. As crianças aprenderão ritmos básicos.
                      </p>
                      <div className="text-xs text-muted-foreground mt-4">
                        Responsável: Profa. Maria Silva
                      </div>
                    </div>
                    
                    <div className="border p-3 rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge>10:30 - 11:30</Badge>
                          <h3 className="font-medium mt-1">Hora do Conto</h3>
                        </div>
                        <Badge variant="outline">Todas as Turmas</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Leitura do livro "A Pequena Semente" com atividade de plantio.
                      </p>
                      <div className="text-xs text-muted-foreground mt-4">
                        Responsável: Profa. Ana Santos
                      </div>
                    </div>
                    
                    <div className="border p-3 rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge>15:00 - 16:00</Badge>
                          <h3 className="font-medium mt-1">Educação Física</h3>
                        </div>
                        <Badge variant="outline">Turma Maternal</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Circuito de atividades motoras com obstáculos no pátio.
                      </p>
                      <div className="text-xs text-muted-foreground mt-4">
                        Responsável: Prof. João Oliveira
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Selecione uma data no calendário para ver as atividades
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="atividades">
          <ActivityList />
        </TabsContent>
        
        <TabsContent value="horarios">
          <ClassSchedule />
        </TabsContent>
      </Tabs>
    </div>
  )
}