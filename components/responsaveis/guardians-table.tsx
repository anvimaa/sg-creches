"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { MoreHorizontal, Pencil, FileText, Trash, Mail, Phone } from 'lucide-react'
import { mockChildren } from '@/lib/data/mock-data'
import { ClientOnly } from '@/components/ui/client-only'

export interface Guardian {
  id: string
  name: string
  email: string
  phone: string
  relation: string
  childrenIds: string[]
  authorizedPeople: {
    name: string
    relation: string
    document: string
  }[]
}

interface GuardiansTableProps {
  guardians: Guardian[]
}

export function GuardiansTable({ guardians }: GuardiansTableProps) {
  const [search, setSearch] = useState('')
  const router = useRouter()
  
  const filteredGuardians = guardians.filter(guardian => 
    guardian.name.toLowerCase().includes(search.toLowerCase()) ||
    guardian.email.toLowerCase().includes(search.toLowerCase())
  )
  
  const getChildrenNames = (childrenIds: string[]) => {
    return childrenIds.map(id => {
      const child = mockChildren.find(child => child.id === id)
      return child ? child.name : 'Desconhecido'
    }).join(', ')
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Buscar responsável..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={() => router.push('/responsaveis/novo')}>
          Novo Responsável
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Relação</TableHead>
              <TableHead>Crianças</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredGuardians.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Nenhum responsável encontrado.
                </TableCell>
              </TableRow>
            ) : (
              filteredGuardians.map((guardian) => (
                <TableRow key={guardian.id}>
                  <TableCell>
                    <div className="font-medium">{guardian.name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex items-center text-xs">
                        <ClientOnly>
                          <Mail className="mr-1 h-3 w-3" />
                        </ClientOnly>
                        {guardian.email}
                      </div>
                      <div className="flex items-center text-xs mt-1">
                        <ClientOnly>
                          <Phone className="mr-1 h-3 w-3" />
                        </ClientOnly>
                        {guardian.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{guardian.relation}</TableCell>
                  <TableCell>{getChildrenNames(guardian.childrenIds)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <ClientOnly>
                            <MoreHorizontal className="h-4 w-4" />
                          </ClientOnly>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => router.push(`/responsaveis/${guardian.id}`)}>
                          <ClientOnly>
                            <FileText className="mr-2 h-4 w-4" />
                          </ClientOnly>
                          <span>Ver Perfil</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push(`/responsaveis/${guardian.id}/editar`)}>
                          <ClientOnly>
                            <Pencil className="mr-2 h-4 w-4" />
                          </ClientOnly>
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <ClientOnly>
                            <Trash className="mr-2 h-4 w-4" />
                          </ClientOnly>
                          <span>Excluir</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}