import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Camera from './components/Camera.jsx'
import AssistenteIA from './components/AssistenteIA.jsx'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  const [user, setUser] = useState(null)
  const [view, setView] = useState('login') // login, cadastro, app
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    nome: '',
    servico: 'Polimento',
    horario: '08:00'
  })

  useEffect(() => {
    // Verificar se usuário já está logado
    const session = supabase.auth.getSession()
    session.then(({ data }) => {
      if (data.session) {
        setUser(data.session.user)
        setView('app')
      }
    })

    // Listener para mudanças de auth
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user)
          setView('app')
        } else {
          setUser(null)
          setView('login')
        }
      }
    )

    return () => authListener.subscription.unsubscribe()
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.senha
    })
    if (error) alert('Erro no login: ' + error.message)
  }

  const cadastrar = async () => {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.senha
    })
    if (error) alert('Erro ao cadastrar: ' + error.message)
    else alert('Conta criada com sucesso!')
  }

  const agendar = async () => {
    if (!formData.nome) {
      alert('Digite seu nome')
      return
    }
    const { error } = await supabase
      .from('agendamentos')
      .insert([{ nome: formData.nome, servico: formData.servico, horario: formData.horario, status: 'pendente' }])
    if (error) alert('Erro ao agendar: ' + error.message)
    else alert('Agendado com sucesso!')
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  if (view === 'login') {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>DETAILER LUCAS MORAES</h1>
        <input name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <input name="senha" type="password" placeholder="Senha" value={formData.senha} onChange={handleInputChange} />
        <button onClick={login}>Entrar</button>
        <button onClick={() => setView('cadastro')}>Criar Conta</button>
      </div>
    )
  }

  if (view === 'cadastro') {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Cadastro</h1>
        <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleInputChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <input name="senha" type="password" placeholder="Senha" value={formData.senha} onChange={handleInputChange} />
        <button onClick={cadastrar}>Cadastrar</button>
        <button onClick={() => setView('login')}>Voltar</button>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>DETAILER LUCAS MORAES</h1>
      <p>Excelência em cuidado automotivo</p>
      <input name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleInputChange} />
      <select name="servico" value={formData.servico} onChange={handleInputChange}>
        <option>Polimento</option>
        <option>Vitrificação</option>
        <option>Lavagem Completa</option>
      </select>
      <select name="horario" value={formData.horario} onChange={handleInputChange}>
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
      </select>
      <button onClick={agendar}>Agendar</button>
      <button onClick={logout}>Sair</button>
      <Camera />
      <AssistenteIA />
    </div>
  )
}

export default App