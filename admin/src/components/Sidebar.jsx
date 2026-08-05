import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, TrendingUp, Users, Calendar,
  Scissors, Settings, ChevronLeft, ChevronRight,
  LogOut, Sparkles,
} from 'lucide-react'

const navGroups = [
  {
    group: 'Visão Geral',
    items: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    ],
  },
  {
    group: 'Negócios',
    items: [
      { to: '/vendas', icon: TrendingUp, label: 'Relatório de Vendas' },
      { to: '/agendamentos', icon: Calendar, label: 'Agendamentos' },
      { to: '/clientes', icon: Users, label: 'Clientes' },
      { to: '/servicos', icon: Scissors, label: 'Serviços' },
    ],
  },
  {
    group: 'Sistema',
    items: [
      { to: '/configuracoes', icon: Settings, label: 'Configurações' },
    ],
  },
]

export default function Sidebar({ open, onToggle }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : 'sidebar--collapsed'}`}>
      <div className="sidebar__header">
        <div className="sidebar__brand">
          <Sparkles size={20} className="sidebar__brand-icon" />
          {open && (
            <span className="sidebar__brand-name">
              Aurora<span className="sidebar__brand-dot">.</span>
            </span>
          )}
        </div>
        <button className="sidebar__toggle" onClick={onToggle} title={open ? 'Recolher' : 'Expandir'}>
          {open ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
        </button>
      </div>

      {open && (
        <div className="sidebar__profile">
          <div className="sidebar__avatar">JF</div>
          <div className="sidebar__profile-info">
            <p className="sidebar__profile-name">Juliana Freitas</p>
            <p className="sidebar__profile-role">Administradora</p>
          </div>
        </div>
      )}

      {!open && (
        <div className="sidebar__avatar sidebar__avatar--centered">JF</div>
      )}

      <nav className="sidebar__nav">
        {navGroups.map(({ group, items }) => (
          <div key={group} className="sidebar__group">
            {open && <p className="sidebar__group-label">{group}</p>}
            {items.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                title={!open ? label : undefined}
                className={({ isActive }) =>
                  `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
                }
              >
                <Icon size={17} className="sidebar__link-icon" />
                {open && <span className="sidebar__link-label">{label}</span>}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar__footer">
        <button className="sidebar__link sidebar__logout" title={!open ? 'Sair' : undefined}>
          <LogOut size={17} className="sidebar__link-icon" />
          {open && <span className="sidebar__link-label">Sair</span>}
        </button>
      </div>
    </aside>
  )
}
