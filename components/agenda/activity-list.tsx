import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Pencil, Trash } from 'lucide-react'

export function ActivityList() {
  const weeklyActivities = [
    {
      id: '1',
      title: 'Música',
      description: 'Aula de musicalização com instrumentos de percussão',
      day: 'Segunda-feira',
      time: '09:00 - 10:00',
      classroom: 'Jardim',
      teacher: 'Maria Silva',
    },
    {
      id: '2',
      title: 'Artes',
      description: 'Atividade de pintura com guache',
      day: 'Segunda-feira',
      time: '14:00 - 15:00',
      classroom: 'Maternal II',
      teacher: 'Ana Santos',
    },
    {
      id: '3',
      title: 'Educação Física',
      description: 'Brincadeiras com bola',
      day: 'Terça-feira',
      time: '09:30 - 10:30',
      classroom: 'Jardim',
      teacher: 'João Oliveira',
    },
    {
      id: '4',
      title: 'Hora do Conto',
      description: 'Leitura de histórias',
      day: 'Terça-feira',
      time: '15:00 - 16:00',
      classroom: 'Todas',
      teacher: 'Ana Santos',
    },
    {
      id: '5',
      title: 'Culinária',
      description: 'Preparo de salada de frutas',
      day: 'Quarta-feira',
      time: '09:00 - 10:00',
      classroom: 'Maternal I',
      teacher: 'Pedro Costa',
    },
    {
      id: '6',
      title: 'Educação Ambiental',
      description: 'Plantio de sementes',
      day: 'Quinta-feira',
      time: '10:00 - 11:00',
      classroom: 'Maternal II e Jardim',
      teacher: 'Maria Silva',
    },
    {
      id: '7',
      title: 'Recreação',
      description: 'Jogos cooperativos no pátio',
      day: 'Sexta-feira',
      time: '14:00 - 15:30',
      classroom: 'Todas',
      teacher: 'João Oliveira',
    },
  ]
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividades Semanais</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Segunda-feira">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="Segunda-feira">Segunda</TabsTrigger>
            <TabsTrigger value="Terça-feira">Terça</TabsTrigger>
            <TabsTrigger value="Quarta-feira">Quarta</TabsTrigger>
            <TabsTrigger value="Quinta-feira">Quinta</TabsTrigger>
            <TabsTrigger value="Sexta-feira">Sexta</TabsTrigger>
          </TabsList>
          
          {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'].map((day) => (
            <TabsContent key={day} value={day} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{day}</h3>
                <Button variant="outline" size="sm">
                  Adicionar Atividade
                </Button>
              </div>
              
              {weeklyActivities.filter(activity => activity.day === day).length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Nenhuma atividade cadastrada para este dia
                </div>
              ) : (
                <div className="space-y-4">
                  {weeklyActivities
                    .filter(activity => activity.day === day)
                    .map((activity) => (
                      <div key={activity.id} className="border p-4 rounded-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge>{activity.time}</Badge>
                            <h3 className="font-medium mt-1">{activity.title}</h3>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {activity.description}
                        </p>
                        <div className="mt-4 flex justify-between text-xs">
                          <div>
                            <span className="text-muted-foreground">Turma: </span>
                            <Badge variant="outline">{activity.classroom}</Badge>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Responsável: </span>
                            <span>{activity.teacher}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}