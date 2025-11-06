Exemplo de comandos no CMD:

curl http://localhost:3000/api

curl http://localhost:3000/api/livros

curl http://localhost:3000/api/livros/1

curl -X POST http://localhost:3000/api/livros -H "Content-Type: application/json" -d "{\"titulo\": \"Novo Livro\", \"autor\": \"Autor Exemplo\", \"editora\": \"Editora XPTO\", \"categoria\": \"Informática\", \"ano\": 2024, \"numeroPaginas\": 320}"

curl -X PUT http://localhost:3000/api/livros/1 -H "Content-Type: application/json" -d "{\"titulo\":\"Livro Atualizado\",\"autor\":\"Autor Atualizado\",\"editora\":\"Nova Editora\",\"categoria\":\"Tecnologia\",\"ano\":2025,\"numeroPaginas\":400}"

curl -X DELETE http://localhost:3000/api/livros/1

curl -i -c cookies.txt -H "Content-Type: application/json" -d "{\"username\":\"alice\",\"nome\":\"Alice Silva\",\"email\":\"alice@mail.com\",\"password\":\"123456\"}" http://localhost:3000/api/auth/register

curl -b cookies.txt -c cookies.txt http://localhost:3000/api/auth/me

curl -b cookies.txt -X POST http://localhost:3000/api/auth/logout

curl -i -c cookies.txt -H "Content-Type: application/json" -d "{\"username\":\"alice\",\"password\":\"123456\"}" http://localhost:3000/api/auth/login
