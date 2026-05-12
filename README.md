# Detailer-App

Um aplicativo para agendamento de serviços de detalhamento automotivo, construído com React e Capacitor.

## Funcionalidades

- Autenticação de usuários (login/cadastro)
- Agendamento de serviços (Polimento, Vitrificação, Lavagem)
- Câmera para tirar fotos do carro
- Assistente IA para perguntas

## Configuração

1. Copie o arquivo `.env.local` e configure suas chaves:

```bash
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key
```

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para build de produção:
   ```bash
   npm run build
   ```

4. Para Capacitor (mobile):
   ```bash
   npx cap sync
   npx cap run android  # ou ios
   ```

## Estrutura do projeto

- `src/App.jsx`: Componente principal com autenticação e agendamento
- `src/components/Camera.jsx`: Componente da câmera
- `src/components/AssistenteIA.jsx`: Assistente IA
- `capacitor.config.json`: Configuração do Capacitor
- `.env.local`: Variáveis de ambiente (não commitar)