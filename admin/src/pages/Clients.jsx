import { useState } from 'react'
import { Search, UserPlus } from 'lucide-react'
import { clients } from '../data/mockData'

function StatusBadge({ status }) {
  const cls = {
    VIP: 'badge--vip',
    Ativo: 'badge--success',
    Novo: 'badge--info',
    Inativo: 'badge--muted',
  }
  return <span className={`badge ${cls[status] || ''}`}>{status}</span>
}

export default function Clients() {
  const [search, setSearch] = useState('')
  const filtered = clients.filter((c) =>
    c.nome.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="dashboard">
      <div className="page-controls">
        <div className="header__search" style={{ width: 300 }}>
          <Search size={15} className="header__search-icon" />
          <input
            className="header__search-input"
            placeholder="Buscar cliente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <button className="btn-primary">
          <UserPlus size={15} /> Novo Cliente
        </button>
      </div>

      <div className="clients-stats">
        {[
          { label: 'Total', value: clients.length, color: '#f0077b' },
          { label: 'VIP', value: clients.filter(c => c.status === 'VIP').length, color: '#f0077b' },
          { label: 'Ativos', value: clients.filter(c => c.status === 'Ativo').length, color: '#10b981' },
          { label: 'Novos', value: clients.filter(c => c.status === 'Novo').length, color: '#6366f1' },
        ].map((s) => (
          <div className="mini-stat" key={s.label}>
            <span className="mini-stat__value" style={{ color: s.color }}>{s.value}</span>
            <span className="mini-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="table-card">
        <div className="table-card__header">
          <div>
            <h3 className="chart-card__title">Clientes</h3>
            <p className="chart-card__sub">{filtered.length} clientes encontrados</p>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>WhatsApp</th>
                <th>E-mail</th>
                <th>Visitas</th>
                <th>Total Gasto</th>
                <th>Cliente Desde</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td className="td-bold">{c.nome}</td>
                  <td>{c.whatsapp}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{c.email}</td>
                  <td>{c.visitas}x</td>
                  <td className="td-value">{c.gasto}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{c.desde}</td>
                  <td><StatusBadge status={c.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
