export const mockChildren = [
  {
    id: '1',
    name: 'Miguel Santos',
    dateOfBirth: '2019-04-15',
    age: 5,
    classroom: 'Jardim',
    allergies: ['Amendoim', 'Lactose'],
    image: 'https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '2',
    name: 'Sophia Oliveira',
    dateOfBirth: '2020-07-23',
    age: 4,
    classroom: 'Maternal II',
    allergies: [],
    image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '3',
    name: 'Arthur Lima',
    dateOfBirth: '2021-01-10',
    age: 3,
    classroom: 'Maternal I',
    allergies: ['Frutos do mar'],
    image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '4',
    name: 'Manuela Costa',
    dateOfBirth: '2022-08-05',
    age: 2,
    classroom: 'Berçário',
    allergies: ['Ovo', 'Glúten'],
    image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '5',
    name: 'Davi Pereira',
    dateOfBirth: '2020-11-30',
    age: 4,
    classroom: 'Maternal II',
    allergies: [],
    image: 'https://images.pexels.com/photos/1620932/pexels-photo-1620932.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '6',
    name: 'Alice Rodrigues',
    dateOfBirth: '2019-09-12',
    age: 5,
    classroom: 'Jardim',
    allergies: ['Corantes artificiais'],
    image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '7',
    name: 'Pedro Almeida',
    dateOfBirth: '2021-05-20',
    age: 3,
    classroom: 'Maternal I',
    allergies: [],
    image: 'https://images.pexels.com/photos/1620932/pexels-photo-1620932.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '8',
    name: 'Laura Ferreira',
    dateOfBirth: '2022-02-14',
    age: 2,
    classroom: 'Berçário',
    allergies: ['Lactose'],
    image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=100',
  },
]

export const mockGuardians = [
  {
    id: '1',
    name: 'Carlos Santos',
    email: 'carlos.santos@email.com',
    phone: '(11) 98765-4321',
    relation: 'Pai',
    childrenIds: ['1'],
    authorizedPeople: [
      { name: 'Ana Santos', relation: 'Mãe', document: '123.456.789-00' },
      { name: 'João Santos', relation: 'Avô', document: '987.654.321-00' },
    ]
  },
  {
    id: '2',
    name: 'Mariana Oliveira',
    email: 'mariana.oliveira@email.com',
    phone: '(11) 91234-5678',
    relation: 'Mãe',
    childrenIds: ['2'],
    authorizedPeople: [
      { name: 'Roberto Oliveira', relation: 'Pai', document: '234.567.890-00' },
    ]
  },
  {
    id: '3',
    name: 'Ricardo Lima',
    email: 'ricardo.lima@email.com',
    phone: '(11) 99876-5432',
    relation: 'Pai',
    childrenIds: ['3'],
    authorizedPeople: [
      { name: 'Fernanda Lima', relation: 'Mãe', document: '345.678.901-00' },
      { name: 'Beatriz Lima', relation: 'Tia', document: '456.789.012-00' },
    ]
  },
  {
    id: '4',
    name: 'Juliana Costa',
    email: 'juliana.costa@email.com',
    phone: '(11) 98765-1234',
    relation: 'Mãe',
    childrenIds: ['4'],
    authorizedPeople: [
      { name: 'Paulo Costa', relation: 'Pai', document: '567.890.123-00' },
    ]
  },
  {
    id: '5',
    name: 'Fernando Pereira',
    email: 'fernando.pereira@email.com',
    phone: '(11) 91234-9876',
    relation: 'Pai',
    childrenIds: ['5'],
    authorizedPeople: [
      { name: 'Camila Pereira', relation: 'Mãe', document: '678.901.234-00' },
      { name: 'Roberta Pereira', relation: 'Avó', document: '789.012.345-00' },
    ]
  }
]

export const mockEmployees = [
  {
    id: '1',
    name: 'Maria Silva',
    role: 'Educadora',
    schedule: '08:00 - 17:00',
    classroom: 'Jardim',
    image: 'https://images.pexels.com/photos/7516339/pexels-photo-7516339.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '2',
    name: 'João Oliveira',
    role: 'Educador',
    schedule: '08:00 - 17:00',
    classroom: 'Maternal II',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '3',
    name: 'Ana Santos',
    role: 'Auxiliar',
    schedule: '07:30 - 16:30',
    classroom: 'Maternal I',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '4',
    name: 'Pedro Costa',
    role: 'Educador',
    schedule: '09:00 - 18:00',
    classroom: 'Berçário',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: '5',
    name: 'Lúcia Ferreira',
    role: 'Diretora Pedagógica',
    schedule: '08:00 - 18:00',
    classroom: null,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  }
]

export const mockPayments = [
  {
    id: '1',
    childName: 'Miguel Santos',
    guardianName: 'Carlos Santos',
    month: 'Junho 2023',
    value: 800.00,
    dueDate: '2023-06-10',
    paymentDate: '2023-06-08',
    status: 'pago',
  },
  {
    id: '2',
    childName: 'Sophia Oliveira',
    guardianName: 'Mariana Oliveira',
    month: 'Junho 2023',
    value: 800.00,
    dueDate: '2023-06-10',
    paymentDate: null,
    status: 'pendente',
  },
  {
    id: '3',
    childName: 'Arthur Lima',
    guardianName: 'Ricardo Lima',
    month: 'Junho 2023',
    value: 750.00,
    dueDate: '2023-06-10',
    paymentDate: '2023-06-09',
    status: 'pago',
  },
  {
    id: '4',
    childName: 'Manuela Costa',
    guardianName: 'Juliana Costa',
    month: 'Junho 2023',
    value: 900.00,
    dueDate: '2023-06-10',
    paymentDate: null,
    status: 'atrasado',
  },
  {
    id: '5',
    childName: 'Davi Pereira',
    guardianName: 'Fernando Pereira',
    month: 'Junho 2023',
    value: 800.00,
    dueDate: '2023-06-10',
    paymentDate: '2023-06-05',
    status: 'pago',
  }
]

export const mockMenuItems = [
  {
    day: 'Segunda-feira',
    meals: [
      { type: 'Café da manhã', description: 'Pão com manteiga e leite com chocolate' },
      { type: 'Lanche da manhã', description: 'Maçã e banana' },
      { type: 'Almoço', description: 'Arroz, feijão, frango grelhado e salada de tomate' },
      { type: 'Lanche da tarde', description: 'Biscoito integral e suco de laranja' },
      { type: 'Jantar', description: 'Sopa de legumes' }
    ]
  },
  {
    day: 'Terça-feira',
    meals: [
      { type: 'Café da manhã', description: 'Mingau de aveia com banana' },
      { type: 'Lanche da manhã', description: 'Melão e pera' },
      { type: 'Almoço', description: 'Macarrão com molho de tomate, carne moída e salada de alface' },
      { type: 'Lanche da tarde', description: 'Bolo de cenoura e suco de uva' },
      { type: 'Jantar', description: 'Purê de batata com peito de frango desfiado' }
    ]
  },
  {
    day: 'Quarta-feira',
    meals: [
      { type: 'Café da manhã', description: 'Pão de queijo e vitamina de frutas' },
      { type: 'Lanche da manhã', description: 'Mamão e abacaxi' },
      { type: 'Almoço', description: 'Arroz, feijão, peixe assado e salada de cenoura' },
      { type: 'Lanche da tarde', description: 'Iogurte com granola' },
      { type: 'Jantar', description: 'Canja de galinha' }
    ]
  },
  {
    day: 'Quinta-feira',
    meals: [
      { type: 'Café da manhã', description: 'Tapioca com queijo e suco de laranja' },
      { type: 'Lanche da manhã', description: 'Morango e uva' },
      { type: 'Almoço', description: 'Arroz, lentilha, bife e legumes no vapor' },
      { type: 'Lanche da tarde', description: 'Bolo de maçã e leite' },
      { type: 'Jantar', description: 'Omelete de legumes' }
    ]
  },
  {
    day: 'Sexta-feira',
    meals: [
      { type: 'Café da manhã', description: 'Cuscuz com ovo e café com leite' },
      { type: 'Lanche da manhã', description: 'Laranja e kiwi' },
      { type: 'Almoço', description: 'Arroz, feijão, almôndegas e brócolis' },
      { type: 'Lanche da tarde', description: 'Pipoca e suco de maracujá' },
      { type: 'Jantar', description: 'Risoto de frango' }
    ]
  }
]