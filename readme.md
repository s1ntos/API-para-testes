# 📌 Projeto To-Do List (Lista de Tarefas)

Este é um projeto **Fullstack** simples para gerenciar tarefas. Ele contém um **backend** em Node.js com um banco de dados SQLite e um **frontend** em HTML, CSS e JavaScript.

---
## 🚀 Tecnologias Utilizadas
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, SQLite

---
## 📂 Estrutura do Projeto

```
todo-app/
│── backend/     (API Node.js)
│    ├── index.js
│    ├── database.js
│── frontend/    (Interface Web)
│    ├── index.html
│    ├── style.css
│    ├── script.js
│── README.md
```

---
## ⚙️ Como Rodar o Projeto

### 1️⃣ Configurar o Backend (API)

1. Navegue até a pasta do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor:
   ```sh
   node index.js
   ```
4. O servidor será iniciado em `http://localhost:3000`

### 2️⃣ Rodar o Frontend
1. Abra o arquivo `index.html` no navegador.
2. Para melhor experiência, utilize a extensão **Live Server** no VS Code.

---
## 📡 Endpoints da API (Para Testes)

| Método | Rota          | Descrição |
|--------|--------------|-----------|
| `GET`  | `/tasks`     | Retorna todas as tarefas |
| `POST` | `/tasks`     | Adiciona uma nova tarefa (JSON: `{ "title": "Minha Tarefa" }`) |
| `PUT`  | `/tasks/:id` | Atualiza o status de uma tarefa (JSON: `{ "completed": true }`) |
| `DELETE` | `/tasks/:id` | Remove uma tarefa pelo ID |


### 🔹 Exemplo de Teste via **Postman** ou **cURL**
Criar uma nova tarefa:
```sh
curl -X POST http://localhost:3000/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "Comprar leite"}'
```

---
## 🎯 Próximas Melhorias
- [ ] Implementar banco de dados PostgreSQL para ambiente de produção
- [ ] Criar sistema de usuários e autenticação JWT
- [ ] Melhorar o design do frontend com Bootstrap ou TailwindCSS

---
## 📌 Autor
Desenvolvido por João Paulo 🚀

