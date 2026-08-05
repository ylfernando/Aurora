import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import SalesReport from './pages/SalesReport'
import Clients from './pages/Clients'
import Appointments from './pages/Appointments'
import Services from './pages/Services'
import Settings from './pages/Settings'

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className={`app-layout ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="page-content">{children}</main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/vendas" element={<Layout><SalesReport /></Layout>} />
        <Route path="/clientes" element={<Layout><Clients /></Layout>} />
        <Route path="/agendamentos" element={<Layout><Appointments /></Layout>} />
        <Route path="/servicos" element={<Layout><Services /></Layout>} />
        <Route path="/configuracoes" element={<Layout><Settings /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
