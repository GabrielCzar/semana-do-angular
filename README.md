# semana-do-angular

- Angular CLI
	- ng new nome_project
	- ng serve
	- ng generate component nome_component
	- ng new nome_project --style=sass
	

- Ambiente de produção:
	- Para testar localmente use:
		- JIT - Just in time
		``` ng serve --prod ```
		- AOT - Ahead of time
		``` ng serve --prod --aot ```
	- Para gerar a build de producao onde será gerada a pasta contendo o conteudo minificado para o servidor
		- AOT
		``` ng build --prod --aot ```
	- Para fazer deploy no Github Pages
		- Gere a build AOT da aplicacao
		- Crie um arquivo 404.html com o mesmos dados do index.html (Gamb master)
		- Crie o link para repositorio na pasta dist gerada no build e envie os dados para o github
		- Sua aplicação ja deve estar funcionando normalmente
		- Para otimizar as tarefas:
			Quando se envia a build e tentar fazer alguma alteracao localmente, será excluida a pasta dist
			na hora de execucao do ng serve, com isso pode-se criar um script para otimizar toda essa atividade no package.json. Segue um exemplo:
			``` "build:prod" : ng build --prod --aot ```
			```	"deploy:ghp"  : "npm run build:prod && cd dist && cp index.html 404.html && git init && git add . && git commit -m 'deploy' && git remote add origin https://github.com/user-deploy/repositorio-deploy.github.io && git push origin master --force" ```