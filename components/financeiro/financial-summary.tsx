"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { DollarSign, TrendingUp, TrendingDown, Clock } from 'lucide-react'

interface Payment {
  id: string
  value: number
  status: 'pago' | 'pendente' | 'atrasado'
}

interface FinancialSummaryProps {
  payments: Payment[]
}

export function FinancialSummary({ payments }: FinancialSummaryProps) {
  const totalPaid = payments
    .filter(payment => payment.status === 'pago')
    .reduce((acc, payment) => acc + payment.value, 0)
  
  const totalPending = payments
    .filter(payment => payment.status === 'pendente')
    .reduce((acc, payment) => acc + payment.value, 0)
  
  const totalOverdue = payments
    .filter(payment => payment.status === 'atrasado')
    .reduce((acc, payment) => acc + payment.value, 0)
  
  const total = totalPaid + totalPending + totalOverdue
  
  const chartData = [
    { name: 'Pago', value: totalPaid },
    { name: 'Pendente', value: totalPending },
    { name: 'Atrasado', value: totalOverdue },
  ]
  
  const COLORS = ['#10b981', '#f59e0b', '#ef4444']
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total do Mês
          </CardTitle>
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            <DollarSign className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">AOA {total.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Para o mês atual
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Pagamentos Recebidos
          </CardTitle>
          <div className="p-2 rounded-full bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
            <TrendingUp className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">AOA {totalPaid.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {Math.round((totalPaid / total) * 100)}% do total
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Pendentes
          </CardTitle>
          <div className="p-2 rounded-full bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400">
            <Clock className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">AOA {totalPending.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {Math.round((totalPending / total) * 100)}% do total
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Atrasados
          </CardTitle>
          <div className="p-2 rounded-full bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400">
            <TrendingDown className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">AOA {totalOverdue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {Math.round((totalOverdue / total) * 100)}% do total
          </p>
        </CardContent>
      </Card>
      
      <Card className="col-span-full lg:col-span-2 lg:row-span-2">
        <CardHeader>
          <CardTitle>Distribuição de Pagamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`AOA ${Number(value).toFixed(2)}`, 'Valor']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="col-span-full lg:col-span-2 lg:row-span-2">
        <CardHeader>
          <CardTitle>Resumo Financeiro</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Receitas</p>
                <div className="font-bold text-lg">AOA 45.000,00</div>
                <p className="text-xs text-muted-foreground">Mensalidades e matrículas</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Despesas</p>
                <div className="font-bold text-lg">AOA 32.500,00</div>
                <p className="text-xs text-muted-foreground">Salários e custos operacionais</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Saldo</p>
                <div className="font-bold text-lg text-green-600 dark:text-green-400">AOA 12.500,00</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}