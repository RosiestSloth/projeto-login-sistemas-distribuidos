const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Credenciais estáticas
const USUARIO_VALIDO = 'admin';
const SENHA_VALIDA = '123';

app.post('/login', (req, res) => {
  const {
    username,
    password
  } = req.body;

  // Validação 1: Requisição incorreta
  if (!username || !password) {
    return res.status(400).json({
      erro: 'Bad Request',
      mensagem: 'Usuário e senha são obrigatórios.'
    });
  }

  // Validação 2: Credenciais válidas
  if (username === USUARIO_VALIDO && password === SENHA_VALIDA) {
    return res.status(200).json({
      sucesso: true,
      mensagem: 'Login realizado com sucesso!'
    });
  }

  // Validação 3: Credenciais inválidas
  return res.status(401).json({
    erro: 'Unauthorized',
    mensagem: 'Usuário ou senha incorretos.'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});