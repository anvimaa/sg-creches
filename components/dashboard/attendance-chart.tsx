"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const attendanceData = [
  { name: 'Seg', presente: 18, ausente: 2 },
  { name: 'Ter', presente: 15, ausente: 5 },
  { name: 'Qua', presente: 17, ausente: 3 },
  { name: 'Qui', presente: 19, ausente: 1 },
  { name: 'Sex', presente: 16, ausente: 4 },
]

export function AttendanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequência Semanal</CardTitle>
        <CardDescription>Presença das crianças na última semana</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={attendanceData}
              stackOffset="expand"
              margin={{
                top: 10,
                right: 10,
                left: -10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <Tooltip 
                formatter={(value, name) => [`${value} crianças`, name === "presente" ? "Presentes" : "Ausentes"]}
                labelFormatter={(label) => `${label}-feira`}
              />
              <Legend formatter={(value) => (value === "presente" ? "Presentes" : "Ausentes")} />
              <Bar 
                dataKey="presente" 
                stackId="a" 
                fill="hsl(var(--chart-2))" 
                radius={[4, 4, 0, 0]} 
                name="presente"
              />
              <Bar 
                dataKey="ausente" 
                stackId="a" 
                fill="hsl(var(--chart-5))" 
                radius={[4, 4, 0, 0]} 
                name="ausente"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}