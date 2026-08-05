import { TrendingUp, Users, Calendar, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import {
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { monthlyRevenue, serviceRevenue, recentTransactions } from '../data/mockData'

const stats = [
  {
    label: 'Receita Total (Jun)',
    value: 'R$ 13.850',
    change: '+11,7%',
    up: true,
    sub: 'vs. mês anterior',
    icon: DollarSign,
    color: '#f0077b',
  },
  {
    label: 'Agendamentos (Jun)',
    value: '191',
    change: '+11,0%',
    up: true,
    sub: 'vs. mês anterior',
    icon: Calendar,
    color: '#8b5cf6',
  },
  {
    label: 'Clientes Novos',
    value: '34',
    change: '+21,4%',
    up: true,
    sub: 'vs. mês anterior',
    icon: Users,
    color: '#10b981',
  },
  {
    label: 'Ticket Médio',
    value: 'R$ 72,51',
    change: '-2,3%',
    up: false,
    sub: 'vs. mês anterior',
    icon: TrendingUp,
    color: '#f59e0b',
  },
]

const RADIAN = Math.PI / 180
function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  if (percent < 0.07) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={700}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }}>
          {`R$ ${Number(entry.value).toLocaleString('pt-BR')}`}
        </p>
      ))}
    </div>
  )
}

function StatusBadge({ status }) {
  const cls = {
    'Concluído': 'badge--success',
    'Em andamento': 'badge--warning',
    'Agendado': 'badge--info',
    'Cancelado': 'badge--danger',
  }
  return <span className={`badge ${cls[status] || ''}`}>{status}</span>
}

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats-grid">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div className="stat-card" key={s.label}>
              <div className="stat-card__top">
                <div className="stat-card__icon" style={{ background: s.color + '18', color: s.color }}>
                  <Icon size={20} />
                </div>
                <span className={`stat-card__change ${s.up ? 'stat-card__change--up' : 'stat-card__change--down'}`}>
                  {s.up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                  {s.change}
                </span>
              </div>
              <p className="stat-card__value">{s.value}</p>
              <p className="stat-card__label">{s.label}</p>
              <p className="stat-card__sub">{s.sub}</p>
            </div>
          )
        })}
      </div>

      <div className="charts-row">
        <div className="chart-card chart-card--wide">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Receita Mensal</h3>
              <p className="chart-card__sub">Janeiro — Junho 2026</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={monthlyRevenue} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gradReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f0077b" stopOpacity={0.22} />
                  <stop offset="95%" stopColor="#f0077b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0d8e4" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9a7588' }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fontSize: 12, fill: '#9a7588' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="receita"
                stroke="#f0077b"
                strokeWidth={2.5}
                fill="url(#gradReceita)"
                dot={{ fill: '#f0077b', r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Por Serviço</h3>
              <p className="chart-card__sub">Receita distribuída</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={190}>
            <PieChart>
              <Pie
                data={serviceRevenue}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
                labelLine={false}
                label={PieLabel}
              >
                {serviceRevenue.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-legend">
            {serviceRevenue.map((item) => (
              <div key={item.name} className="pie-legend__item">
                <span className="pie-legend__dot" style={{ background: item.color }} />
                <span className="pie-legend__name">{item.name}</span>
                <span className="pie-legend__value">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="table-card">
        <div className="table-card__header">
          <div>
            <h3 className="chart-card__title">Transações Recentes</h3>
            <p className="chart-card__sub">Últimas movimentações</p>
          </div>
          <button className="btn-outline">Ver todas</button>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Profissional</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((t) => (
                <tr key={t.id}>
                  <td className="td-bold">{t.cliente}</td>
                  <td>{t.servico}</td>
                  <td>{t.profissional}</td>
                  <td>{t.data}</td>
                  <td className="td-value">{t.valor}</td>
                  <td><StatusBadge status={t.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
