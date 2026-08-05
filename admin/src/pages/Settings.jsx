import { useState } from 'react'
import {
  Building2, Target, Percent, CreditCard,
  Bell, FileBarChart, Save, CheckCircle2,
  MapPin, Phone, Mail, Globe, Clock,
  TrendingUp, Users, Banknote, QrCode,
  ChevronRight,
} from 'lucide-react'

/* ── Toggle switch ────────────────────────────────────────────── */
function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`toggle ${checked ? 'toggle--on' : ''}`}
    >
      <span className="toggle__thumb" />
    </button>
  )
}

/* ── Form row helpers ─────────────────────────────────────────── */
function Field({ label, hint, children }) {
  return (
    <div className="sfield">
      <div className="sfield__meta">
        <label className="sfield__label">{label}</label>
        {hint && <p className="sfield__hint">{hint}</p>}
      </div>
      <div className="sfield__control">{children}</div>
    </div>
  )
}

function Input({ value, onChange, prefix, type = 'text', ...rest }) {
  return (
    <div className="sinput-wrap">
      {prefix && <span className="sinput-prefix">{prefix}</span>}
      <input
        className={`sinput ${prefix ? 'sinput--prefixed' : ''}`}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    </div>
  )
}

function Select({ value, onChange, options }) {
  return (
    <select className="sinput" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}

function ToggleRow({ label, hint, checked, onChange }) {
  return (
    <div className="stoggle-row">
      <div>
        <p className="stoggle-label">{label}</p>
        {hint && <p className="sfield__hint">{hint}</p>}
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  )
}

function SectionTitle({ children }) {
  return <h4 className="ssection-title">{children}</h4>
}

function Divider() {
  return <div className="sdivider" />
}

/* ── Save button with success flash ──────────────────────────── */
function SaveButton({ onClick, saved }) {
  return (
    <button className={`btn-save ${saved ? 'btn-save--saved' : ''}`} onClick={onClick}>
      {saved ? <><CheckCircle2 size={15} /> Salvo!</> : <><Save size={15} /> Salvar alterações</>}
    </button>
  )
}

/* ── Commission bar ───────────────────────────────────────────── */
function CommBar({ name, role, value, onChange, color }) {
  return (
    <div className="comm-row">
      <div className="comm-row__info">
        <div className="comm-row__avatar" style={{ background: color + '22', color }}>{name[0]}</div>
        <div>
          <p className="comm-row__name">{name}</p>
          <p className="comm-row__role">{role}</p>
        </div>
      </div>
      <div className="comm-row__slider-wrap">
        <input
          type="range" min={20} max={50} step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="comm-slider"
          style={{ '--pct': `${((value - 20) / 30) * 100}%`, '--clr': color }}
        />
        <span className="comm-row__pct" style={{ color }}>{value}%</span>
      </div>
    </div>
  )
}

/* ── Payment method card ──────────────────────────────────────── */
function PayCard({ icon: Icon, label, active, onToggle, children }) {
  return (
    <div className={`pay-card ${active ? 'pay-card--active' : ''}`}>
      <div className="pay-card__top">
        <div className="pay-card__icon-wrap">
          <Icon size={18} />
        </div>
        <span className="pay-card__label">{label}</span>
        <Toggle checked={active} onChange={onToggle} />
      </div>
      {active && children && <div className="pay-card__body">{children}</div>}
    </div>
  )
}

/* ── Tab definitions ──────────────────────────────────────────── */
const TABS = [
  { id: 'negocio',      icon: Building2,    label: 'Negócio' },
  { id: 'metas',        icon: Target,       label: 'Metas de Vendas' },
  { id: 'comissoes',    icon: Percent,      label: 'Comissões' },
  { id: 'pagamentos',   icon: CreditCard,   label: 'Pagamentos' },
  { id: 'notificacoes', icon: Bell,         label: 'Notificações' },
  { id: 'relatorios',   icon: FileBarChart, label: 'Relatórios' },
]

/* ── Main component ───────────────────────────────────────────── */
export default function Settings() {
  const [tab, setTab] = useState('negocio')
  const [saved, setSaved] = useState(false)

  /* Business */
  const [biz, setBiz] = useState({
    nome: 'Aurora Beauty Studio',
    cnpj: '12.345.678/0001-90',
    endereco: 'Rua das Flores, 123',
    cidade: 'Florianópolis – SC',
    cep: '88000-000',
    telefone: '(48) 99999-9999',
    email: 'contato@aurora.com.br',
    site: 'www.aurora.com.br',
    abertura: '09:00',
    fechamento: '19:00',
    diasFuncionamento: 'Segunda a Sábado',
  })

  /* Sales goals */
  const [goals, setGoals] = useState({
    metaMensal: '15000',
    metaAnual: '180000',
    alertaPercent: '80',
    alertaMeta: true,
    metaPorProfissional: true,
    julianaMeta: '5500',
    camilaMeta: '4000',
    fernandaMeta: '4500',
    crescimentoAlvo: '15',
  })

  /* Commissions */
  const [comm, setComm] = useState({
    juliana: 35,
    camila: 30,
    fernanda: 32,
    bonusServicosEspeciais: '5',
    bonusMeta: '3',
    pagamentoDia: '5',
  })

  /* Payments */
  const [pay, setPay] = useState({
    dinheiro: true,
    pix: true,
    pixChave: 'contato@aurora.com.br',
    debito: true,
    credito: true,
    creditoParcelamento: '3',
    taxaAdm: '2.5',
    descontoAVista: '5',
    valePresente: false,
  })

  /* Notifications */
  const [notif, setNotif] = useState({
    email: 'admin@aurora.com.br',
    alerta50: false,
    alerta80: true,
    alertaMeta100: true,
    novosClientes: true,
    cancelamentos: true,
    relatorioSemanal: false,
    relatorioMensal: true,
    whatsappAlertas: false,
  })

  /* Reports */
  const [report, setReport] = useState({
    relatorioSemanal: false,
    relatorioMensal: true,
    relatorioAnual: true,
    formato: 'pdf',
    emailDestino: 'admin@aurora.com.br',
    diaMes: '1',
    incluirGraficos: true,
    incluirRanking: true,
    incluirComissoes: true,
    compararAnterior: true,
  })

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2200)
  }

  return (
    <div className="settings-layout">
      {/* Left nav */}
      <nav className="settings-nav">
        <p className="settings-nav__title">Configurações</p>
        {TABS.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            className={`settings-nav__item ${tab === id ? 'settings-nav__item--active' : ''}`}
            onClick={() => setTab(id)}
          >
            <Icon size={16} className="settings-nav__icon" />
            <span>{label}</span>
            <ChevronRight size={14} className="settings-nav__arrow" />
          </button>
        ))}
      </nav>

      {/* Right panel */}
      <div className="settings-panel">

        {/* ── NEGÓCIO ───────────────────────────────────────── */}
        {tab === 'negocio' && (
          <div className="settings-section">
            <div className="settings-header">
              <Building2 size={20} className="settings-header__icon" />
              <div>
                <h2 className="settings-header__title">Informações do Negócio</h2>
                <p className="settings-header__sub">Dados cadastrais exibidos em relatórios e documentos</p>
              </div>
            </div>

            <SectionTitle>Dados Cadastrais</SectionTitle>
            <Field label="Nome Fantasia">
              <Input value={biz.nome} onChange={(v) => setBiz({ ...biz, nome: v })} />
            </Field>
            <Field label="CNPJ" hint="Somente para fins de registro">
              <Input value={biz.cnpj} onChange={(v) => setBiz({ ...biz, cnpj: v })} />
            </Field>

            <Divider />
            <SectionTitle>Localização</SectionTitle>
            <Field label="Endereço" >
              <Input value={biz.endereco} onChange={(v) => setBiz({ ...biz, endereco: v })} prefix={<MapPin size={14} />} />
            </Field>
            <Field label="Cidade / Estado">
              <Input value={biz.cidade} onChange={(v) => setBiz({ ...biz, cidade: v })} />
            </Field>
            <Field label="CEP">
              <Input value={biz.cep} onChange={(v) => setBiz({ ...biz, cep: v })} style={{ maxWidth: 160 }} />
            </Field>

            <Divider />
            <SectionTitle>Contato</SectionTitle>
            <Field label="Telefone / WhatsApp">
              <Input value={biz.telefone} onChange={(v) => setBiz({ ...biz, telefone: v })} prefix={<Phone size={14} />} />
            </Field>
            <Field label="E-mail">
              <Input value={biz.email} onChange={(v) => setBiz({ ...biz, email: v })} type="email" prefix={<Mail size={14} />} />
            </Field>
            <Field label="Site">
              <Input value={biz.site} onChange={(v) => setBiz({ ...biz, site: v })} prefix={<Globe size={14} />} />
            </Field>

            <Divider />
            <SectionTitle>Horário de Funcionamento</SectionTitle>
            <Field label="Dias" hint="Usados para bloqueio de agendamentos">
              <Select
                value={biz.diasFuncionamento}
                onChange={(v) => setBiz({ ...biz, diasFuncionamento: v })}
                options={[
                  { value: 'Segunda a Sexta', label: 'Segunda a Sexta' },
                  { value: 'Segunda a Sábado', label: 'Segunda a Sábado' },
                  { value: 'Segunda a Domingo', label: 'Segunda a Domingo' },
                  { value: 'Todos os dias', label: 'Todos os dias' },
                ]}
              />
            </Field>
            <Field label="Abertura">
              <Input value={biz.abertura} onChange={(v) => setBiz({ ...biz, abertura: v })} type="time" prefix={<Clock size={14} />} style={{ maxWidth: 150 }} />
            </Field>
            <Field label="Fechamento">
              <Input value={biz.fechamento} onChange={(v) => setBiz({ ...biz, fechamento: v })} type="time" prefix={<Clock size={14} />} style={{ maxWidth: 150 }} />
            </Field>

            <div className="settings-footer">
              <SaveButton onClick={handleSave} saved={saved} />
            </div>
          </div>
        )}

        {/* ── METAS DE VENDAS ───────────────────────────────── */}
        {tab === 'metas' && (
          <div className="settings-section">
            <div className="settings-header">
              <Target size={20} className="settings-header__icon" />
              <div>
                <h2 className="settings-header__title">Metas de Vendas</h2>
                <p className="settings-header__sub">Defina objetivos mensais, anuais e por profissional</p>
              </div>
            </div>

            <SectionTitle>Metas Gerais</SectionTitle>

            <div className="goal-cards">
              <div className="goal-card">
                <p className="goal-card__label">Meta Mensal</p>
                <div className="sinput-wrap">
                  <span className="sinput-prefix">R$</span>
                  <input
                    className="sinput sinput--prefixed sinput--large"
                    type="number"
                    value={goals.metaMensal}
                    onChange={(e) => setGoals({ ...goals, metaMensal: e.target.value })}
                  />
                </div>
                <p className="goal-card__current">
                  Atual: <strong style={{ color: 'var(--primary)' }}>R$ 13.850</strong>
                  <span className="badge badge--warning" style={{ marginLeft: 8 }}>92% da meta</span>
                </p>
              </div>
              <div className="goal-card">
                <p className="goal-card__label">Meta Anual</p>
                <div className="sinput-wrap">
                  <span className="sinput-prefix">R$</span>
                  <input
                    className="sinput sinput--prefixed sinput--large"
                    type="number"
                    value={goals.metaAnual}
                    onChange={(e) => setGoals({ ...goals, metaAnual: e.target.value })}
                  />
                </div>
                <p className="goal-card__current">
                  Atual: <strong style={{ color: 'var(--primary)' }}>R$ 65.820</strong>
                  <span className="badge badge--success" style={{ marginLeft: 8 }}>36% do ano</span>
                </p>
              </div>
              <div className="goal-card">
                <p className="goal-card__label">Crescimento Alvo (%)</p>
                <div className="sinput-wrap">
                  <input
                    className="sinput sinput--large"
                    type="number"
                    value={goals.crescimentoAlvo}
                    onChange={(e) => setGoals({ ...goals, crescimentoAlvo: e.target.value })}
                    style={{ maxWidth: 120 }}
                  />
                  <span className="sinput-suffix">% ao ano</span>
                </div>
                <p className="goal-card__current">
                  Projeção 2027: <strong>R$ 207.000</strong>
                </p>
              </div>
            </div>

            <Divider />
            <SectionTitle>Alertas de Meta</SectionTitle>
            <Field label="Alertar ao atingir" hint="Notificação enviada ao email do administrador">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  className="sinput"
                  type="number"
                  min={10} max={100}
                  value={goals.alertaPercent}
                  onChange={(e) => setGoals({ ...goals, alertaPercent: e.target.value })}
                  style={{ maxWidth: 90 }}
                />
                <span className="sinput-suffix">% da meta</span>
              </div>
            </Field>
            <ToggleRow
              label="Ativar alertas de meta"
              hint="Receber notificação quando o percentual configurado for atingido"
              checked={goals.alertaMeta}
              onChange={(v) => setGoals({ ...goals, alertaMeta: v })}
            />

            <Divider />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <SectionTitle>Metas por Profissional</SectionTitle>
              <Toggle
                checked={goals.metaPorProfissional}
                onChange={(v) => setGoals({ ...goals, metaPorProfissional: v })}
              />
            </div>

            {goals.metaPorProfissional && (
              <div className="prof-goals">
                {[
                  { key: 'julianaMeta', name: 'Juliana', color: '#f0077b' },
                  { key: 'camilaMeta', name: 'Camila', color: '#8b5cf6' },
                  { key: 'fernandaMeta', name: 'Fernanda', color: '#10b981' },
                ].map(({ key, name, color }) => (
                  <div className="prof-goal-row" key={key}>
                    <div className="comm-row__avatar" style={{ background: color + '20', color }}>{name[0]}</div>
                    <span className="prof-goal-row__name">{name}</span>
                    <div className="sinput-wrap" style={{ flex: 1, maxWidth: 200 }}>
                      <span className="sinput-prefix">R$</span>
                      <input
                        className="sinput sinput--prefixed"
                        type="number"
                        value={goals[key]}
                        onChange={(e) => setGoals({ ...goals, [key]: e.target.value })}
                      />
                    </div>
                    <span className="sinput-suffix">/mês</span>
                  </div>
                ))}
              </div>
            )}

            <div className="settings-footer">
              <SaveButton onClick={handleSave} saved={saved} />
            </div>
          </div>
        )}

        {/* ── COMISSÕES ─────────────────────────────────────── */}
        {tab === 'comissoes' && (
          <div className="settings-section">
            <div className="settings-header">
              <Percent size={20} className="settings-header__icon" />
              <div>
                <h2 className="settings-header__title">Comissões</h2>
                <p className="settings-header__sub">Percentuais pagos às profissionais sobre as vendas</p>
              </div>
            </div>

            <SectionTitle>Comissão Base por Profissional</SectionTitle>
            <p className="ssection-desc">Arraste o controle para ajustar. Calculado sobre o valor líquido do serviço.</p>

            <div className="comm-list">
              <CommBar
                name="Juliana" role="Cabelo & Coloração" value={comm.juliana} color="#f0077b"
                onChange={(v) => setComm({ ...comm, juliana: v })}
              />
              <CommBar
                name="Camila" role="Unhas & Maquiagem" value={comm.camila} color="#8b5cf6"
                onChange={(v) => setComm({ ...comm, camila: v })}
              />
              <CommBar
                name="Fernanda" role="Estética & Spa" value={comm.fernanda} color="#10b981"
                onChange={(v) => setComm({ ...comm, fernanda: v })}
              />
            </div>

            <Divider />
            <SectionTitle>Bonificações</SectionTitle>

            <Field label="Bônus — Serviços Especiais" hint="Adicional sobre serviços como Dia da Noiva e Pacotes">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  className="sinput"
                  type="number" min={0} max={20}
                  value={comm.bonusServicosEspeciais}
                  onChange={(e) => setComm({ ...comm, bonusServicosEspeciais: e.target.value })}
                  style={{ maxWidth: 90 }}
                />
                <span className="sinput-suffix">% extra</span>
              </div>
            </Field>

            <Field label="Bônus — Cumprimento de Meta" hint="Adicional quando a profissional atinge 100% da meta mensal">
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  className="sinput"
                  type="number" min={0} max={20}
                  value={comm.bonusMeta}
                  onChange={(e) => setComm({ ...comm, bonusMeta: e.target.value })}
                  style={{ maxWidth: 90 }}
                />
                <span className="sinput-suffix">% extra</span>
              </div>
            </Field>

            <Divider />
            <SectionTitle>Pagamento de Comissões</SectionTitle>
            <Field label="Dia de pagamento" hint="Dia fixo do mês para repasse às profissionais">
              <Select
                value={comm.pagamentoDia}
                onChange={(v) => setComm({ ...comm, pagamentoDia: v })}
                options={['5','10','15','20','25'].map((d) => ({ value: d, label: `Todo dia ${d}` }))}
              />
            </Field>

            <div className="comm-preview">
              <p className="comm-preview__title">Simulação — Receita de junho (R$ 13.850)</p>
              <div className="comm-preview__rows">
                {[
                  { name: 'Juliana', share: 0.42, pct: comm.juliana, color: '#f0077b' },
                  { name: 'Camila',  share: 0.30, pct: comm.camila,  color: '#8b5cf6' },
                  { name: 'Fernanda', share: 0.28, pct: comm.fernanda, color: '#10b981' },
                ].map(({ name, share, pct, color }) => {
                  const base = 13850 * share
                  const val  = (base * pct / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
                  return (
                    <div className="comm-preview__row" key={name}>
                      <span style={{ color, fontWeight: 600 }}>{name}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        {pct}% de R$ {base.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="comm-preview__val">R$ {val}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="settings-footer">
              <SaveButton onClick={handleSave} saved={saved} />
            </div>
          </div>
        )}

        {/* ── PAGAMENTOS ────────────────────────────────────── */}
        {tab === 'pagamentos' && (
          <div className="settings-section">
            <div className="settings-header">
              <CreditCard size={20} className="settings-header__icon" />
              <div>
                <h2 className="settings-header__title">Formas de Pagamento</h2>
                <p className="settings-header__sub">Configure os métodos aceitos e taxas aplicadas</p>
              </div>
            </div>

            <SectionTitle>Métodos Aceitos</SectionTitle>

            <div className="pay-grid">
              <PayCard icon={Banknote} label="Dinheiro" active={pay.dinheiro} onToggle={(v) => setPay({ ...pay, dinheiro: v })}>
                <Field label="Desconto à vista">
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input className="sinput" type="number" min={0} max={20} value={pay.descontoAVista}
                      onChange={(e) => setPay({ ...pay, descontoAVista: e.target.value })} style={{ maxWidth: 80 }} />
                    <span className="sinput-suffix">%</span>
                  </div>
                </Field>
              </PayCard>

              <PayCard icon={QrCode} label="PIX" active={pay.pix} onToggle={(v) => setPay({ ...pay, pix: v })}>
                <Field label="Chave PIX">
                  <Input value={pay.pixChave} onChange={(v) => setPay({ ...pay, pixChave: v })} />
                </Field>
              </PayCard>

              <PayCard icon={CreditCard} label="Débito" active={pay.debito} onToggle={(v) => setPay({ ...pay, debito: v })} />

              <PayCard icon={CreditCard} label="Crédito" active={pay.credito} onToggle={(v) => setPay({ ...pay, credito: v })}>
                <Field label="Parcelamento sem juros">
                  <Select
                    value={pay.creditoParcelamento}
                    onChange={(v) => setPay({ ...pay, creditoParcelamento: v })}
                    options={['1','2','3','6','12'].map((n) => ({ value: n, label: `até ${n}x sem juros` }))}
                  />
                </Field>
                <Field label="Taxa administrativa">
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input className="sinput" type="number" min={0} max={10} step={0.1} value={pay.taxaAdm}
                      onChange={(e) => setPay({ ...pay, taxaAdm: e.target.value })} style={{ maxWidth: 80 }} />
                    <span className="sinput-suffix">%</span>
                  </div>
                </Field>
              </PayCard>

              <PayCard icon={TrendingUp} label="Vale Presente" active={pay.valePresente} onToggle={(v) => setPay({ ...pay, valePresente: v })}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Permite emissão e resgate de vouchers presenteáveis para serviços.
                </p>
              </PayCard>
            </div>

            <Divider />
            <SectionTitle>Resumo de Taxas</SectionTitle>
            <div className="taxa-summary">
              <div className="taxa-row">
                <span>Dinheiro / PIX</span>
                <span className="badge badge--success">0% taxa</span>
                {pay.descontoAVista > 0 && <span style={{ color: 'var(--success)', fontSize: '0.8rem' }}>– {pay.descontoAVista}% desconto ao cliente</span>}
              </div>
              <div className="taxa-row">
                <span>Débito</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Taxas da maquininha (externas)</span>
              </div>
              <div className="taxa-row">
                <span>Crédito (até {pay.creditoParcelamento}x)</span>
                <span className="badge badge--warning">{pay.taxaAdm}% taxa adm.</span>
              </div>
            </div>

            <div className="settings-footer">
              <SaveButton onClick={handleSave} saved={saved} />
            </div>
          </div>
        )}

        {/* ── NOTIFICAÇÕES ──────────────────────────────────── */}
        {tab === 'notificacoes' && (
          <div className="settings-section">
            <div className="settings-header">
              <Bell size={20} className="settings-header__icon" />
              <div>
                <h2 className="settings-header__title">Notificações</h2>
                <p className="settings-header__sub">Alertas automáticos sobre metas e movimentações</p>
              </div>
            </div>

            <SectionTitle>Destino</SectionTitle>
            <Field label="E-mail principal" hint="Recebe todos os alertas e relatórios">
              <Input value={notif.email} onChange={(v) => setNotif({ ...notif, email: v })} type="email" prefix={<Mail size={14} />} />
            </Field>

            <Divider />
            <SectionTitle>Alertas de Meta</SectionTitle>
            <ToggleRow
              label="Alerta aos 50% da meta mensal"
              hint="Aviso quando a receita atingir metade do objetivo do mês"
              checked={notif.alerta50}
              onChange={(v) => setNotif({ ...notif, alerta50: v })}
            />
            <ToggleRow
              label="Alerta aos 80% da meta mensal"
              hint="Lembrete para intensificar esforços antes do fim do mês"
              checked={notif.alerta80}
              onChange={(v) => setNotif({ ...notif, alerta80: v })}
            />
            <ToggleRow
              label="Alerta ao cumprir 100% da meta"
              hint="Celebração — notificação quando o objetivo for atingido"
              checked={notif.alertaMeta100}
              onChange={(v) => setNotif({ ...notif, alertaMeta100: v })}
            />

            <Divider />
            <SectionTitle>Alertas Operacionais</SectionTitle>
            <ToggleRow
              label="Novos clientes cadastrados"
              hint="Notificação a cada novo cliente registrado no sistema"
              checked={notif.novosClientes}
              onChange={(v) => setNotif({ ...notif, novosClientes: v })}
            />
            <ToggleRow
              label="Cancelamentos de agendamento"
              hint="Alerta imediato quando um agendamento for cancelado"
              checked={notif.cancelamentos}
              onChange={(v) => setNotif({ ...notif, cancelamentos: v })}
            />
            <ToggleRow
              label="Alertas via WhatsApp"
              hint="Encaminha os alertas também para o WhatsApp do administrador"
              checked={notif.whatsappAlertas}
              onChange={(v) => setNotif({ ...notif, whatsappAlertas: v })}
            />

            <Divider />
            <SectionTitle>Resumos Automáticos</SectionTitle>
            <ToggleRow
              label="Resumo semanal"
              hint="Todo domingo às 20h: agendamentos, receita e destaques da semana"
              checked={notif.relatorioSemanal}
              onChange={(v) => setNotif({ ...notif, relatorioSemanal: v })}
            />
            <ToggleRow
              label="Resumo mensal"
              hint="No primeiro dia do mês: fechamento completo com comparativo"
              checked={notif.relatorioMensal}
              onChange={(v) => setNotif({ ...notif, relatorioMensal: v })}
            />

            <div className="settings-footer">
              <SaveButton onClick={handleSave} saved={saved} />
            </div>
          </div>
        )}

        {/* ── RELATÓRIOS ────────────────────────────────────── */}
        {tab === 'relatorios' && (
          <div className="settings-section">
            <div className="settings-header">
              <FileBarChart size={20} className="settings-header__icon" />
              <div>
                <h2 className="settings-header__title">Relatórios Automáticos</h2>
                <p className="settings-header__sub">Geração e envio periódico de relatórios de desempenho</p>
              </div>
            </div>

            <SectionTitle>Frequência</SectionTitle>
            <ToggleRow
              label="Relatório semanal"
              hint="Enviado toda segunda-feira com o balanço da semana anterior"
              checked={report.relatorioSemanal}
              onChange={(v) => setReport({ ...report, relatorioSemanal: v })}
            />
            <ToggleRow
              label="Relatório mensal"
              hint="Enviado no primeiro dia útil do mês"
              checked={report.relatorioMensal}
              onChange={(v) => setReport({ ...report, relatorioMensal: v })}
            />
            <ToggleRow
              label="Relatório anual"
              hint="Enviado em 2 de janeiro com o consolidado do ano anterior"
              checked={report.relatorioAnual}
              onChange={(v) => setReport({ ...report, relatorioAnual: v })}
            />

            {report.relatorioMensal && (
              <Field label="Dia de envio mensal" hint="Dia fixo do mês para relatórios mensais">
                <Select
                  value={report.diaMes}
                  onChange={(v) => setReport({ ...report, diaMes: v })}
                  options={['1','2','3','5'].map((d) => ({ value: d, label: `Dia ${d} do mês` }))}
                />
              </Field>
            )}

            <Divider />
            <SectionTitle>Entrega</SectionTitle>
            <Field label="E-mail de destino" hint="Pode ser diferente do email de notificações">
              <Input value={report.emailDestino} onChange={(v) => setReport({ ...report, emailDestino: v })} type="email" prefix={<Mail size={14} />} />
            </Field>
            <Field label="Formato do arquivo">
              <Select
                value={report.formato}
                onChange={(v) => setReport({ ...report, formato: v })}
                options={[
                  { value: 'pdf',   label: 'PDF' },
                  { value: 'excel', label: 'Excel (.xlsx)' },
                  { value: 'ambos', label: 'PDF + Excel' },
                ]}
              />
            </Field>

            <Divider />
            <SectionTitle>Conteúdo do Relatório</SectionTitle>
            <ToggleRow
              label="Incluir gráficos e visualizações"
              checked={report.incluirGraficos}
              onChange={(v) => setReport({ ...report, incluirGraficos: v })}
            />
            <ToggleRow
              label="Ranking de profissionais"
              hint="Tabela com desempenho individual ordenado por receita"
              checked={report.incluirRanking}
              onChange={(v) => setReport({ ...report, incluirRanking: v })}
            />
            <ToggleRow
              label="Demonstrativo de comissões"
              hint="Detalhamento dos valores devidos a cada profissional"
              checked={report.incluirComissoes}
              onChange={(v) => setReport({ ...report, incluirComissoes: v })}
            />
            <ToggleRow
              label="Comparativo com período anterior"
              hint="Variação percentual em relação ao mesmo período do mês/ano passado"
              checked={report.compararAnterior}
              onChange={(v) => setReport({ ...report, compararAnterior: v })}
            />

            <div className="info-box">
              <Users size={15} style={{ flexShrink: 0, marginTop: 1 }} />
              <p>
                Os relatórios são gerados automaticamente com base nos dados do sistema.
                O envio acontece apenas se houver movimentação no período.
              </p>
            </div>

            <div className="settings-footer">
              <button className="btn-outline" style={{ marginRight: 8 }}>
                <FileBarChart size={14} /> Gerar relatório agora
              </button>
              <SaveButton onClick={handleSave} saved={saved} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
