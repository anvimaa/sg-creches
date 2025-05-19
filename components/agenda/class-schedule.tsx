import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const classrooms = [
  'Berçário',
  'Maternal I',
  'Maternal II',
  'Jardim',
]

const timeSlots = [
  '07:30 - 08:00',
  '08:00 - 09:00',
  '09:00 - 10:00',
  '10:00 - 10:30',
  '10:30 - 11:30',
  '11:30 - 12:30',
  '12:30 - 14:00',
  '14:00 - 15:00',
  '15:00 - 15:30',
  '15:30 - 16:30',
  '16:30 - 17:30',
  '17:30 - 18:00',
]

const scheduleData:any = {
  'Berçário': {
    'Segunda-feira': {
      '07:30 - 08:00': 'Acolhimento',
      '08:00 - 09:00': 'Café da manhã / Higiene',
      '09:00 - 10:00': 'Estimulação',
      '10:00 - 10:30': 'Lanche / Higiene',
      '10:30 - 11:30': 'Atividades sensoriais',
      '11:30 - 12:30': 'Almoço / Higiene',
      '12:30 - 14:00': 'Soneca',
      '14:00 - 15:00': 'Atividades lúdicas',
      '15:00 - 15:30': 'Lanche / Higiene',
      '15:30 - 16:30': 'Brincadeiras livre',
      '16:30 - 17:30': 'Jantar / Higiene',
      '17:30 - 18:00': 'Saída',
    },
    // Other days would have similar structure
  },
  // Other classrooms would have similar structure
}

// Function to get cell content or default to empty string
const getCellContent = (classroom: string, day: string, time: string) => {
  try {
    return scheduleData[classroom]?.[day]?.[time] || '';
  } catch {
    return '';
  }
};

export function ClassSchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Horários das Turmas</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Berçário">
          <TabsList className="grid grid-cols-4 mb-6">
            {classrooms.map((classroom) => (
              <TabsTrigger key={classroom} value={classroom}>{classroom}</TabsTrigger>
            ))}
          </TabsList>
          
          {classrooms.map((classroom) => (
            <TabsContent key={classroom} value={classroom}>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Horário</TableHead>
                      <TableHead>Segunda</TableHead>
                      <TableHead>Terça</TableHead>
                      <TableHead>Quarta</TableHead>
                      <TableHead>Quinta</TableHead>
                      <TableHead>Sexta</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timeSlots.map((time) => (
                      <TableRow key={time}>
                        <TableCell className="font-medium text-xs">{time}</TableCell>
                        <TableCell className="text-xs">
                          {getCellContent(classroom, 'Segunda-feira', time) || (
                            classroom === 'Berçário' ? 'Acolhimento' : ''
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          {getCellContent(classroom, 'Terça-feira', time) || (
                            classroom === 'Berçário' ? 'Acolhimento' : ''
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          {getCellContent(classroom, 'Quarta-feira', time) || (
                            classroom === 'Berçário' ? 'Acolhimento' : ''
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          {getCellContent(classroom, 'Quinta-feira', time) || (
                            classroom === 'Berçário' ? 'Acolhimento' : ''
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          {getCellContent(classroom, 'Sexta-feira', time) || (
                            classroom === 'Berçário' ? 'Acolhimento' : ''
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}