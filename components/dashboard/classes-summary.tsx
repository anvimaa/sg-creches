import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'

interface ClassItemProps {
  name: string
  teacher: string
  childrenCount: number
  capacity: number
}

const classes: ClassItemProps[] = [
  {
    name: 'Turma Berçário',
    teacher: 'Profa. Lúcia Silva',
    childrenCount: 8,
    capacity: 10
  },
  {
    name: 'Turma Maternal I',
    teacher: 'Profa. Camila Souza',
    childrenCount: 12,
    capacity: 15
  },
  {
    name: 'Turma Maternal II',
    teacher: 'Profa. Eduardo Santos',
    childrenCount: 14,
    capacity: 15
  },
  {
    name: 'Turma Jardim',
    teacher: 'Profa. Patricia Oliveira',
    childrenCount: 16,
    capacity: 20
  },
]

export function ClassesSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Turmas</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[250px]">
          <div className="space-y-6">
            {classes.map((classItem, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-sm">{classItem.name}</h3>
                  <span className="text-xs text-muted-foreground">
                    {classItem.childrenCount}/{classItem.capacity}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">{classItem.teacher}</div>
                <Progress 
                  value={(classItem.childrenCount / classItem.capacity) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}