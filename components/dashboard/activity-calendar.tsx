"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export function ActivityCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  return (
    <Card className="col-span-1 row-span-2">
      <CardHeader>
        <CardTitle>Calendário de Atividades</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="mt-4">
          <h3 className="font-medium text-sm">Atividades para {date?.toLocaleDateString('pt-BR')}</h3>
          <ul className="mt-2 space-y-2">
            <li className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md text-xs">
              <span className="font-medium">09:00 - 10:00</span>
              <p>Atividade de Música - Turma Jardim</p>
            </li>
            <li className="bg-green-50 dark:bg-green-900/20 p-2 rounded-md text-xs">
              <span className="font-medium">10:30 - 11:30</span>
              <p>Hora do Conto - Todas as Turmas</p>
            </li>
            <li className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-md text-xs">
              <span className="font-medium">15:00 - 16:00</span>
              <p>Educação Física - Turma Maternal</p>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}