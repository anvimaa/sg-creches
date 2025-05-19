import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CalendarDays, MessageCircle, Users, User } from 'lucide-react'

interface EventItem {
  id: string
  title: string
  time: string
  type: 'calendar' | 'message' | 'children' | 'staff'
  content: string
}

const recentEvents: EventItem[] = [
  {
    id: '1',
    title: 'Reunião de Pais',
    time: 'Hoje às 18:00',
    type: 'calendar',
    content: 'Discussão sobre o desenvolvimento das crianças no último trimestre'
  },
  {
    id: '2',
    title: 'Matrícula: Sofia Mendes',
    time: 'Hoje às 14:30',
    type: 'children',
    content: 'Nova criança matriculada na turma do Maternal'
  },
  {
    id: '3',
    title: 'Comunicado Importante',
    time: 'Ontem às 10:15',
    type: 'message',
    content: 'Ajuste no cardápio da semana devido a produtos sazonais'
  },
  {
    id: '4',
    title: 'Nova Educadora',
    time: 'Ontem às 08:00',
    type: 'staff',
    content: 'Contratação da educadora Mariana para a turma do Maternal'
  },
  {
    id: '5',
    title: 'Passeio no Parque',
    time: '23/06 às 09:00',
    type: 'calendar',
    content: 'Passeio ao parque ecológico com as turmas do Maternal e Jardim'
  },
]

export function RecentEvents() {
  const getIcon = (type: EventItem['type']) => {
    switch (type) {
      case 'calendar':
        return <CalendarDays className="h-4 w-4 text-blue-500" />
      case 'message':
        return <MessageCircle className="h-4 w-4 text-purple-500" />
      case 'children':
        return <User className="h-4 w-4 text-green-500" />
      case 'staff':
        return <Users className="h-4 w-4 text-orange-500" />
      default:
        return <CalendarDays className="h-4 w-4" />
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Eventos Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div key={event.id} className="flex gap-3">
                <div className="mt-0.5 p-1.5 rounded-full bg-muted">
                  {getIcon(event.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">{event.title}</h4>
                    <span className="text-xs text-muted-foreground">{event.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{event.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}