import { useState } from 'react'
import { Scissors, Plus } from 'lucide-react'
import { services } from '../data/mockData'

const categories = ['Todos', ...new Set(services.map((s) => s.categoria))]

export default function Services() {
  const [cat, setCat] = useState('Todos')
  const filtered = cat === 'Todos' ? services : services.filter((s) => s.categoria === cat)

  return (
    <div className="dashboard">
      <div className="page-controls">
        <div className="period-tabs">
          {categories.map((c) => (
            <button
              key={c}
              className={`period-tab${cat === c ? ' period-tab--active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <button className="btn-primary">
          <Plus size={15} /> Novo Serviço
        </button>
      </div>

      <div className="table-card">
        <div className="table-card__header">
          <div>
            <h3 className="chart-card__title">Serviços</h3>
            <p className="chart-card__sub">{filtered.length} serviços cadastrados</p>
          </div>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Duração</th>
                <th>Profissionais</th>
                <th>Agendamentos</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Scissors size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      <span className="td-bold">{s.nome}</span>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge--info">{s.categoria}</span>
                  </td>
                  <td className="td-value">{s.preco}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{s.duracao}</td>
                  <td>{s.profissionais}</td>
                  <td>{s.agendamentos}x</td>
                  <td><span className="badge badge--success">{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
