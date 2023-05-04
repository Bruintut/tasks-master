Task Manager API
Este é um projeto de API de gerenciamento de tarefas criado com o framework NestJS, utilizando o TypeORM como ORM e o banco de dados MySQL.

Instalação
Para instalar as dependências do projeto, execute o seguinte comando:

Copy code
npm install
Configuração do banco de dados
Este projeto requer um servidor MySQL em execução e acessível para funcionar corretamente. Para configurar a conexão com o banco de dados, crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

makefile
Copy code
DB_HOST=seu_host_mysql
DB_PORT=sua_porta_mysql
DB_USERNAME=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_DATABASE=nome_do_seu_banco_de_dados
Execução
Para executar o servidor de desenvolvimento, utilize o seguinte comando:

arduino
Copy code
npm run start:dev
O servidor estará disponível em http://localhost:3000.

Endpoints
A API possui os seguintes endpoints:

GET /tasks
Retorna uma lista de todas as tarefas cadastradas.

GET /tasks/:id
Retorna uma única tarefa pelo seu ID.

POST /tasks
Cria uma nova tarefa.

PUT /tasks/:id
Atualiza uma tarefa existente.

DELETE /tasks/:id
Remove uma tarefa existente.

Contribuindo
Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou um pull request.

Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.