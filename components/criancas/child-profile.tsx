"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { MoreVertical, Pencil, UserRound, Calendar, FileText, User, MessageSquare } from 'lucide-react'
import { Child } from '@/components/criancas/children-table'
import { mockGuardians } from '@/lib/data/mock-data'

interface ChildProfileProps {
  child: Child
}

export function ChildProfile({ child }: ChildProfileProps) {
  const [activeTab, setActiveTab] = useState('info')
  const router = useRouter()
  
  // Find child's guardians
  const childGuardians = mockGuardians.filter(guardian => 
    guardian.childrenIds.includes(child.id)
  )
  
  const childAge = () => {
    const birthDate = new Date(child.dateOfBirth)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    
    return age
  }
  
  const dateOfBirth = new Date(child.dateOfBirth).toLocaleDateString('pt-BR')
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={child.image} alt={child.name} />
                <AvatarFallback className="text-lg">{child.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h2 className="text-2xl font-bold">{child.name}</h2>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {childAge()} anos
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {child.classroom}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Nascimento: {dateOfBirth}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Responsável: {childGuardians[0]?.name || 'Não cadastrado'}</span>
                  </div>
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push(`/criancas/${child.id}/editar`)}>
                    <Pencil className="mr-2 h-4 w-4" />
                    <span>Editar</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Enviar Mensagem</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="info">
            <UserRound className="h-4 w-4 mr-2" />
            Informações
          </TabsTrigger>
          <TabsTrigger value="attendance">
            <Calendar className="h-4 w-4 mr-2" />
            Frequência
          </TabsTrigger>
          <TabsTrigger value="health">
            <FileText className="h-4 w-4 mr-2" />
            Saúde
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="info" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Informações da Criança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Nome Completo</h3>
                  <p className="text-sm text-muted-foreground">{child.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Data de Nascimento</h3>
                  <p className="text-sm text-muted-foreground">{dateOfBirth} ({childAge()} anos)</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Turma</h3>
                  <p className="text-sm text-muted-foreground">{child.classroom}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Alergias</h3>
                  {child.allergies.length > 0 ? (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {child.allergies.map((allergy, index) => (
                        <Badge key={index} variant="outline">{allergy}</Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Nenhuma alergia registrada</p>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium">Restrições Alimentares</h3>
                  <p className="text-sm text-muted-foreground">Nenhuma restrição registrada</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Responsáveis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {childGuardians.length > 0 ? (
                  childGuardians.map((guardian, index) => (
                    <div key={guardian.id} className="space-y-2">
                      {index > 0 && <Separator />}
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium">{guardian.name}</h3>
                          <p className="text-xs text-muted-foreground">{guardian.relation}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => router.push(`/responsaveis/${guardian.id}`)}>
                          Ver Perfil
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Email:</span>
                          <p>{guardian.email}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Telefone:</span>
                          <p>{guardian.phone}</p>
                        </div>
                      </div>
                      
                      <div className="mt-2">
                        <h4 className="text-xs font-medium">Pessoas Autorizadas para Retirada</h4>
                        <ul className="mt-1 space-y-1">
                          {guardian.authorizedPeople.map((person, index) => (
                            <li key={index} className="text-xs">
                              <span className="font-medium">{person.name}</span> ({person.relation})
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground">Nenhum responsável cadastrado</p>
                    <Button 
                      variant="link" 
                      className="mt-2"
                      onClick={() => router.push('/responsaveis/novo')}
                    >
                      Cadastrar Responsável
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Presença</CardTitle>
              <CardDescription>Registro de presença dos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {Array.from({ length: 30 }).map((_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - i);
                  const isPresent = Math.random() > 0.2; // 80% chance of being present
                  
                  return (
                    <div 
                      key={i} 
                      className={`flex flex-col items-center justify-center h-12 w-12 rounded-md border ${
                        isPresent 
                          ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300' 
                          : 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
                      }`}
                    >
                      <span className="text-xs font-medium">{date.getDate()}</span>
                      <span className="text-xs">{['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][date.getDay()]}</span>
                    </div>
                  )
                })}
              </div>
              
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Presente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">Ausente</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="health" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ficha de Saúde</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Alergias</h3>
                {child.allergies.length > 0 ? (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {child.allergies.map((allergy, index) => (
                      <Badge key={index} variant="outline">{allergy}</Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Nenhuma alergia registrada</p>
                )}
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Tipo Sanguíneo</h3>
                <p className="text-sm text-muted-foreground">A+</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Medicação Regular</h3>
                <p className="text-sm text-muted-foreground">Nenhuma medicação registrada</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Condições Médicas</h3>
                <p className="text-sm text-muted-foreground">Nenhuma condição registrada</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Contato de Emergência</h3>
                <p className="text-sm">{childGuardians[0]?.name || 'Não cadastrado'}</p>
                <p className="text-sm text-muted-foreground">{childGuardians[0]?.phone || ''}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Ocorrências de Saúde</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border p-3 rounded-md">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">Febre</h3>
                    <span className="text-xs text-muted-foreground">10/05/2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Apresentou febre de 38,2°C durante a tarde. Medicado com paracetamol conforme autorização dos pais.
                  </p>
                </div>
                
                <div className="border p-3 rounded-md">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">Pequeno corte</h3>
                    <span className="text-xs text-muted-foreground">23/03/2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Machucado leve no joelho durante brincadeira no pátio. Feita higienização e curativo simples.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}