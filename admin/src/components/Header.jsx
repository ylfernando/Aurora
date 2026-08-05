import { Bell, Search, Menu } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/vendas': 'Relatório de Vendas',
  '/clientes': 'Clientes',
  '/agendamentos': 'Agendamentos',
  '/servicos': 'Serviços',
  '/configuracoes': 'Configurações',
}

export default function Header({ onMenuToggle }) {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Aurora Admin'
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-btn" onClick={onMenuToggle} title="Alternar menu">
          <Menu size={19} />
        </button>
        <div>
          <h1 className="header__title">{title}</h1>
          <p className="header__date">{today}</p>
        </div>
      </div>

      <div className="header__right">
        <div className="header__search">
          <Search size={15} className="header__search-icon" />
          <input
            type="text"
            placeholder="Buscar..."
            className="header__search-input"
          />
        </div>

        <button className="header__notif" title="Notificações">
          <Bell size={19} />
          <span className="header__notif-badge">3</span>
        </button>

        <div className="header__avatar" title="Perfil">JF</div>
      </div>
    </header>
  )
}
