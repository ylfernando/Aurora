import { useState } from 'react'
import { Download, Filter, TrendingUp, DollarSign, ShoppingBag, Star, ArrowUpRight } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts'
import { quarterData, serviceRevenue, topClients } from '../data/mockData'

const summaryCards = [
  { label: 'Receita Semestral', value: 'R$ 65.820', icon: DollarSign, color: '#f0077b', change: '+28%' },
  { label: 'Total de Vendas', value: '930', icon: ShoppingBag, color: '#8b5cf6', change: '+19%' },
  { label: 'Melhor Mês', value: 'Junho', icon: TrendingUp, color: '#10b981', change: 'R$ 13.850' },
  { label: 'Avaliação Média', value: '4,9 / 5', icon: Star, color: '#f59e0b', change: '+0,2' },
]

function BarTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }}>
          {entry.name}: {`R$ ${Number(entry.value).toLocaleString('pt-BR')}`}
        </p>
      ))}
    </div>
  )
}

export default function SalesReport() {
  const [period, setPeriod] = useState('semestre')

  return (
    <div className="dashboard">
      <div className="page-controls">
        <div className="period-tabs">
          {['semana', 'mês', 'semestre', 'ano'].map((p) => (
            <button
              key={p}
              className={`period-tab${period === p ? ' period-tab--active' : ''}`}
              onClick={() => setPeriod(p)}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <div className="page-controls__actions">
          <button className="btn-outline">
            <Filter size={14} /> Filtrar
          </button>
          <button className="btn-primary">
            <Download size={14} /> Exportar
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {summaryCards.map((s) => {
          const Icon = s.icon
          return (
            <div className="stat-card" key={s.label}>
              <div className="stat-card__top">
                <div className="stat-card__icon" style={{ background: s.color + '18', color: s.color }}>
                  <Icon size={20} />
                </div>
                <span className="stat-card__change stat-card__change--up">
                  <ArrowUpRight size={13} />{s.change}
                </span>
              </div>
              <p className="stat-card__value">{s.value}</p>
              <p className="stat-card__label">{s.label}</p>
            </div>
          )
        })}
      </div>

      <div className="charts-row">
        <div className="chart-card chart-card--wide">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Receita vs Meta</h3>
              <p className="chart-card__sub">Janeiro — Junho 2026</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={quarterData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barGap={5}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0d8e4" vertical={false} />
              <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#9a7588' }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fontSize: 12, fill: '#9a7588' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<BarTooltip />} />
              <Legend wrapperStyle={{ fontSize: 13, paddingTop: 12 }} />
              <Bar dataKey="receita" name="Receita" fill="#f0077b" radius={[5, 5, 0, 0]} maxBarSize={40} />
              <Bar dataKey="meta" name="Meta" fill="#f0d8e4" radius={[5, 5, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-card__header">
            <div>
              <h3 className="chart-card__title">Por Serviço</h3>
              <p className="chart-card__sub">Receita distribuída</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={210}>
            <PieChart>
              <Pie data={serviceRevenue} cx="50%" cy="50%" outerRadius={90} dataKey="value" paddingAngle={2}>
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
            <h3 className="chart-card__title">Top Clientes</h3>
            <p className="chart-card__sub">Por receita gerada no semestre</p>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Cliente</th>
                <th>Visitas</th>
                <th>Último Serviço</th>
                <th>Última Visita</th>
                <th>Total Gasto</th>
              </tr>
            </thead>
            <tbody>
              {topClients.map((c, i) => (
                <tr key={c.id}>
                  <td className="td-rank">{i + 1}°</td>
                  <td className="td-bold">{c.nome}</td>
                  <td>{c.visitas}x</td>
                  <td>{c.servico}</td>
                  <td>{c.ultimo}</td>
                  <td className="td-value">{c.gasto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
