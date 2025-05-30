import { UserRound, Users, CalendarDays, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ActivityCalendar } from '@/components/dashboard/activity-calendar'
import { RecentEvents } from '@/components/dashboard/recent-events'
import { AttendanceChart } from '@/components/dashboard/attendance-chart'
import { ClassesSummary } from '@/components/dashboard/classes-summary'
import { FinancialsChart } from '@/components/dashboard/financials-chart'
import { BirthdayCake } from '@/components/dashboard/birthday-cake'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral da creche Criança Feliz</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total de Crianças" 
          value={50}
          icon={UserRound}
          description="2 novas matrículas esta semana"
        />
        <StatsCard 
          title="Funcionários" 
          value={12}
          icon={Users}
          description="9 educadores e 3 auxiliares"
        />
        <StatsCard 
          title="Eventos Hoje" 
          value={3}
          icon={CalendarDays}
          variant="success"
          description="Próximo: Reunião 18:00"
        />
        <StatsCard 
          title="Mensalidades Atrasadas" 
          value={4}
          icon={AlertCircle}
          variant="danger"
          description="Total: AOA 4.000,00"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ActivityCalendar />
        
        <div className="space-y-4 lg:col-span-2">
          <AttendanceChart />
          <div className="grid gap-4 md:grid-cols-2">
            <FinancialsChart />
            <ClassesSummary />
          </div>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <RecentEvents />
        <Card className="flex flex-col items-center justify-center p-8 h-[372px]">
          <BirthdayCake className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Aniversariantes do Mês</h3>
          <div className="text-center space-y-2">
            <div className="flex flex-col items-center p-2 rounded-md bg-primary/5">
              <span className="text-sm font-semibold">Luísa Mendes - 5 anos</span>
              <span className="text-xs text-muted-foreground">15/06 - Turma Jardim</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md bg-primary/5">
              <span className="text-sm font-semibold">Pedro Costa - 3 anos</span>
              <span className="text-xs text-muted-foreground">22/06 - Turma Maternal II</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md bg-primary/5">
              <span className="text-sm font-semibold">Sofia Lima - 4 anos</span>
              <span className="text-xs text-muted-foreground">28/06 - Turma Maternal II</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}