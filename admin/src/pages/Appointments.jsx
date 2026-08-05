import { CalendarPlus, Clock } from 'lucide-react'
import { appointments } from '../data/mockData'

function StatusBadge({ status }) {
  const cls = {
    Confirmado: 'badge--success',
    'Em andamento': 'badge--warning',
    Agendado: 'badge--info',
    Cancelado: 'badge--danger',
  }
  return <span className={`badge ${cls[status] || ''}`}>{status}</span>
}

const todayStats = [
  { label: 'Total Hoje', value: appointments.length, color: '#f0077b' },
  { label: 'Confirmados', value: appointments.filter(a => a.status === 'Confirmado').length, color: '#10b981' },
  { label: 'Em Andamento', value: appointments.filter(a => a.status === 'Em andamento').length, color: '#f59e0b' },
  { label: 'Aguardando', value: appointments.filter(a => a.status === 'Agendado').length, color: '#6366f1' },
]

export default function Appointments() {
  return (
    <div className="dashboard">
      <div className="page-controls">
        <div style={{ display: 'flex', gap: 12 }}>
          {todayStats.map((s) => (
            <div className="mini-stat" key={s.label}>
              <span className="mini-stat__value" style={{ color: s.color }}>{s.value}</span>
              <span className="mini-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
        <button className="btn-primary">
          <CalendarPlus size={15} /> Novo Agendamento
        </button>
      </div>

      <div className="table-card">
        <div className="table-card__header">
          <div>
            <h3 className="chart-card__title">Agendamentos de Hoje</h3>
            <p className="chart-card__sub">23 de junho de 2026</p>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Horário</th>
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Profissional</th>
                <th>Duração</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--primary)', fontWeight: 600 }}>
                      <Clock size={14} />
                      {a.horario}
                    </div>
                  </td>
                  <td className="td-bold">{a.cliente}</td>
                  <td>{a.servico}</td>
                  <td>{a.profissional}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{a.duracao}</td>
                  <td><StatusBadge status={a.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
