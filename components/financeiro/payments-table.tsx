"use client"

import { useState } from 'react'
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
import { MoreHorizontal, Pencil, FileText, Check, AlertCircle, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Payment {
  id: string
  childName: string
  guardianName: string
  month: string
  value: number
  dueDate: string
  paymentDate: string | null
  status: 'pago' | 'pendente' | 'atrasado'
}

interface PaymentsTableProps {
  payments: Payment[]
}

export function PaymentsTable({ payments }: PaymentsTableProps) {
  const [search, setSearch] = useState('')
  
  const filteredPayments = payments.filter(payment => 
    payment.childName.toLowerCase().includes(search.toLowerCase()) ||
    payment.guardianName.toLowerCase().includes(search.toLowerCase()) ||
    payment.month.toLowerCase().includes(search.toLowerCase())
  )
  
  const getStatusBadge = (status: Payment['status']) => {
    switch (status) {
      case 'pago':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
            <Check className="mr-1 h-3 w-3" />
            Pago
          </Badge>
        )
      case 'pendente':
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800">
            <Clock className="mr-1 h-3 w-3" />
            Pendente
          </Badge>
        )
      case 'atrasado':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800">
            <AlertCircle className="mr-1 h-3 w-3" />
            Atrasado
          </Badge>
        )
    }
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Buscar pagamento..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Button>
          Registrar Pagamento
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Criança</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Mês</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Vencimento</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  Nenhum pagamento encontrado.
                </TableCell>
              </TableRow>
            ) : (
              filteredPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.childName}</TableCell>
                  <TableCell>{payment.guardianName}</TableCell>
                  <TableCell>{payment.month}</TableCell>
                  <TableCell>AOA {payment.value.toFixed(2)}</TableCell>
                  <TableCell>{new Date(payment.dueDate).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell>{getStatusBadge(payment.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          <span>Ver Detalhes</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        {payment.status !== 'pago' && (
                          <DropdownMenuItem>
                            <Check className="mr-2 h-4 w-4" />
                            <span>Marcar como Pago</span>
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}