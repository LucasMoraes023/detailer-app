# 🚗 Detailer Lucas Moraes - App Profissional

Um aplicativo completo e profissional para agendamento de serviços de detalhamento automotivo, desenvolvido com React + Vite + Capacitor.

## ✨ Funcionalidades

- 🔐 **Autenticação Completa** - Login/Cadastro com Supabase
- 📅 **Sistema de Agendamento** - Polimento, Vitrificação, Lavagem, Higienização
- 📸 **Câmera Integrada** - Captura e preview de fotos do veículo
- 🤖 **Assistente IA** - Consultas sobre cuidados automotivos com histórico
- 🎨 **Interface Profissional** - Design moderno com tema automotivo
- 📱 **PWA + Mobile** - Funciona como app web e mobile
- 🔄 **Sincronização** - Dados salvos na nuvem

## 🚀 Como Usar

### Desenvolvimento Local
```bash
npm install
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Mobile (Android)
```bash
npm run android  # Abrir no Android Studio
npm run apk      # Gerar APK
```

## 📋 Configuração

### 1. Variáveis de Ambiente
Edite `src/config.js` com suas chaves reais:

```javascript
export const config = {
  supabase: {
    url: 'SUA_URL_DO_SUPABASE',
    anonKey: 'SUA_CHAVE_ANONIMA'
  },
  huggingface: {
    apiKey: 'SUA_CHAVE_HUGGINGFACE'
  }
};
```

### 2. Chaves de API Necessárias
- **Supabase**: Crie um projeto em [supabase.com](https://supabase.com)
- **Hugging Face**: Obtenha token em [huggingface.co](https://huggingface.co)

### 3. Banco de Dados
Crie a tabela `agendamentos` no Supabase:

```sql
CREATE TABLE agendamentos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  servico TEXT NOT NULL,
  horario TEXT NOT NULL,
  status TEXT DEFAULT 'pendente',
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📱 APK e GitHub Actions

O workflow `.github/workflows/android.yml` gera automaticamente o APK quando você faz push na branch `main`.

### Download do APK
1. Vá para a aba **Actions** no GitHub
2. Selecione o workflow mais recente
3. Baixe o artifact `app-debug.apk`

## 🛠️ Tecnologias

- **Frontend**: React 19 + Vite
- **Mobile**: Capacitor 8
- **Backend**: Supabase
- **IA**: Hugging Face API
- **Build**: Gradle (Android)

## 📂 Estrutura do Projeto

```
src/
├── App.jsx              # Componente principal
├── main.jsx             # Ponto de entrada
├── config.js            # Configurações
└── components/
    ├── Camera.jsx       # Componente da câmera
    └── AssistenteIA.jsx # Assistente IA

android/                 # Projeto Android
dist/                    # Build de produção
public/
└── manifest.json        # PWA
```

## 🎯 Características Profissionais

- ✅ Design moderno e responsivo
- ✅ Estados de loading
- ✅ Tratamento de erros
- ✅ Validação de formulários
- ✅ PWA completa
- ✅ Splash screen
- ✅ Histórico de interações
- ✅ Preview de imagens
- ✅ Segurança de dados

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com Lucas Moraes.

---

**Desenvolvido com ❤️ para profissionais de detalhamento automotivo**