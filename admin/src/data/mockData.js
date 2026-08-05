export const monthlyRevenue = [
  { month: 'Jan', receita: 8420, agendamentos: 124 },
  { month: 'Fev', receita: 9150, agendamentos: 138 },
  { month: 'Mar', receita: 11200, agendamentos: 156 },
  { month: 'Abr', receita: 10800, agendamentos: 149 },
  { month: 'Mai', receita: 12400, agendamentos: 172 },
  { month: 'Jun', receita: 13850, agendamentos: 191 },
]

export const quarterData = [
  { mes: 'Jan', receita: 8420, meta: 9000 },
  { mes: 'Fev', receita: 9150, meta: 9000 },
  { mes: 'Mar', receita: 11200, meta: 10000 },
  { mes: 'Abr', receita: 10800, meta: 10500 },
  { mes: 'Mai', receita: 12400, meta: 11000 },
  { mes: 'Jun', receita: 13850, meta: 12000 },
]

export const serviceRevenue = [
  { name: 'Cabelo', value: 35, color: '#f0077b' },
  { name: 'Unhas', value: 20, color: '#ff4da6' },
  { name: 'Estética', value: 18, color: '#c90063' },
  { name: 'Spa & Relax', value: 12, color: '#ff85c2' },
  { name: 'Maquiagem', value: 10, color: '#ffacd5' },
  { name: 'Dia da Noiva', value: 5, color: '#ffd4ea' },
]

export const recentTransactions = [
  { id: 1, cliente: 'Ana Silva', servico: 'Coloração + Corte', valor: 'R$ 280,00', data: '23/06/2026', status: 'Concluído', profissional: 'Juliana' },
  { id: 2, cliente: 'Maria Oliveira', servico: 'Manicure + Pedicure', valor: 'R$ 95,00', data: '23/06/2026', status: 'Concluído', profissional: 'Camila' },
  { id: 3, cliente: 'Beatriz Santos', servico: 'Facial Anti-aging', valor: 'R$ 180,00', data: '23/06/2026', status: 'Em andamento', profissional: 'Fernanda' },
  { id: 4, cliente: 'Larissa Costa', servico: 'Spa Relax', valor: 'R$ 220,00', data: '23/06/2026', status: 'Agendado', profissional: 'Juliana' },
  { id: 5, cliente: 'Patrícia Lima', servico: 'Maquiagem Festa', valor: 'R$ 150,00', data: '22/06/2026', status: 'Concluído', profissional: 'Camila' },
  { id: 6, cliente: 'Renata Ferreira', servico: 'Dia da Noiva', valor: 'R$ 850,00', data: '22/06/2026', status: 'Concluído', profissional: 'Fernanda' },
  { id: 7, cliente: 'Juliana Mendes', servico: 'Escova Progressiva', valor: 'R$ 320,00', data: '22/06/2026', status: 'Concluído', profissional: 'Juliana' },
]

export const topClients = [
  { id: 1, nome: 'Ana Paula Rodrigues', visitas: 24, gasto: 'R$ 3.840,00', ultimo: '23/06/2026', servico: 'Coloração' },
  { id: 2, nome: 'Maria Clara Souza', visitas: 21, gasto: 'R$ 2.940,00', ultimo: '21/06/2026', servico: 'Manicure' },
  { id: 3, nome: 'Fernanda Lima', visitas: 18, gasto: 'R$ 3.240,00', ultimo: '20/06/2026', servico: 'Facial' },
  { id: 4, nome: 'Juliana Carvalho', visitas: 16, gasto: 'R$ 4.800,00', ultimo: '19/06/2026', servico: 'Dia da Noiva' },
  { id: 5, nome: 'Beatriz Alves', visitas: 15, gasto: 'R$ 1.800,00', ultimo: '18/06/2026', servico: 'Spa & Relax' },
]

export const appointments = [
  { id: 1, cliente: 'Ana Silva', servico: 'Coloração + Corte', profissional: 'Juliana', horario: '09:00', data: '23/06/2026', duracao: '2h', status: 'Confirmado' },
  { id: 2, cliente: 'Maria Oliveira', servico: 'Manicure + Pedicure', profissional: 'Camila', horario: '10:30', data: '23/06/2026', duracao: '1h30', status: 'Confirmado' },
  { id: 3, cliente: 'Beatriz Santos', servico: 'Facial Anti-aging', profissional: 'Fernanda', horario: '11:00', data: '23/06/2026', duracao: '1h', status: 'Em andamento' },
  { id: 4, cliente: 'Larissa Costa', servico: 'Spa Relax', profissional: 'Juliana', horario: '14:00', data: '23/06/2026', duracao: '2h', status: 'Agendado' },
  { id: 5, cliente: 'Patricia Lima', servico: 'Maquiagem', profissional: 'Camila', horario: '15:00', data: '23/06/2026', duracao: '1h30', status: 'Agendado' },
  { id: 6, cliente: 'Carla Mendes', servico: 'Corte + Escova', profissional: 'Juliana', horario: '16:30', data: '23/06/2026', duracao: '1h', status: 'Agendado' },
]

export const clients = [
  { id: 1, nome: 'Ana Paula Rodrigues', email: 'ana@email.com', whatsapp: '(48) 99901-2345', visitas: 24, gasto: 'R$ 3.840,00', status: 'VIP', desde: 'Jan/2024' },
  { id: 2, nome: 'Maria Clara Souza', email: 'maria@email.com', whatsapp: '(48) 99902-3456', visitas: 21, gasto: 'R$ 2.940,00', status: 'Ativo', desde: 'Mar/2024' },
  { id: 3, nome: 'Fernanda Lima', email: 'fernanda@email.com', whatsapp: '(48) 99903-4567', visitas: 18, gasto: 'R$ 3.240,00', status: 'VIP', desde: 'Fev/2024' },
  { id: 4, nome: 'Juliana Carvalho', email: 'juliana@email.com', whatsapp: '(48) 99904-5678', visitas: 16, gasto: 'R$ 4.800,00', status: 'VIP', desde: 'Jan/2024' },
  { id: 5, nome: 'Beatriz Alves', email: 'beatriz@email.com', whatsapp: '(48) 99905-6789', visitas: 15, gasto: 'R$ 1.800,00', status: 'Ativo', desde: 'Abr/2024' },
  { id: 6, nome: 'Renata Ferreira', email: 'renata@email.com', whatsapp: '(48) 99906-7890', visitas: 12, gasto: 'R$ 1.560,00', status: 'Ativo', desde: 'Mai/2024' },
  { id: 7, nome: 'Carla Mendes', email: 'carla@email.com', whatsapp: '(48) 99907-8901', visitas: 8, gasto: 'R$ 720,00', status: 'Ativo', desde: 'Jun/2024' },
  { id: 8, nome: 'Larissa Costa', email: 'larissa@email.com', whatsapp: '(48) 99908-9012', visitas: 5, gasto: 'R$ 680,00', status: 'Novo', desde: 'Fev/2026' },
  { id: 9, nome: 'Patricia Lima', email: 'patricia@email.com', whatsapp: '(48) 99909-0123', visitas: 3, gasto: 'R$ 380,00', status: 'Novo', desde: 'Abr/2026' },
  { id: 10, nome: 'Camila Souza', email: 'camila@email.com', whatsapp: '(48) 99910-1234', visitas: 1, gasto: 'R$ 95,00', status: 'Novo', desde: 'Jun/2026' },
]

export const services = [
  { id: 1, nome: 'Coloração', categoria: 'Cabelo', preco: 'R$ 120 – R$ 280', duracao: '2-3h', status: 'Ativo', profissionais: 2, agendamentos: 45 },
  { id: 2, nome: 'Corte Feminino', categoria: 'Cabelo', preco: 'R$ 60 – R$ 100', duracao: '1h', status: 'Ativo', profissionais: 3, agendamentos: 62 },
  { id: 3, nome: 'Escova Progressiva', categoria: 'Cabelo', preco: 'R$ 250 – R$ 400', duracao: '3-4h', status: 'Ativo', profissionais: 2, agendamentos: 28 },
  { id: 4, nome: 'Manicure', categoria: 'Unhas', preco: 'R$ 35', duracao: '45min', status: 'Ativo', profissionais: 2, agendamentos: 84 },
  { id: 5, nome: 'Pedicure', categoria: 'Unhas', preco: 'R$ 45', duracao: '50min', status: 'Ativo', profissionais: 2, agendamentos: 71 },
  { id: 6, nome: 'Gel / Acrigel', categoria: 'Unhas', preco: 'R$ 120 – R$ 180', duracao: '2h', status: 'Ativo', profissionais: 1, agendamentos: 33 },
  { id: 7, nome: 'Limpeza de Pele', categoria: 'Estética', preco: 'R$ 90', duracao: '1h', status: 'Ativo', profissionais: 2, agendamentos: 39 },
  { id: 8, nome: 'Facial Anti-aging', categoria: 'Estética', preco: 'R$ 150 – R$ 220', duracao: '1h30', status: 'Ativo', profissionais: 1, agendamentos: 22 },
  { id: 9, nome: 'Spa Relax', categoria: 'Spa', preco: 'R$ 180 – R$ 250', duracao: '2h', status: 'Ativo', profissionais: 2, agendamentos: 30 },
  { id: 10, nome: 'Maquiagem Social', categoria: 'Maquiagem', preco: 'R$ 150', duracao: '1h30', status: 'Ativo', profissionais: 2, agendamentos: 27 },
  { id: 11, nome: 'Dia da Noiva', categoria: 'Especial', preco: 'Sob consulta', duracao: '4-6h', status: 'Ativo', profissionais: 3, agendamentos: 8 },
]
