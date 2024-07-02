
# API LadoDown

<p align="center">
	<img src="https://raw.githubusercontent.com/luan-vilela/LadoDown/main/src/assets/logo220x112.png" width="180" alt="Logo LadoDown" />
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com) [![build](https://github.com/aseprite/aseprite/actions/workflows/build.yml/badge.svg)](https://github.com/aseprite/aseprite/actions/workflows/build.yml) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://raw.githubusercontent.com/luan-vilela/LadoDown/main/LICENSE)

LadoDown é um aplicativo voltado para o registro de informações de crianças com Síndrome de Down. Pais e responsáveis podem usar o aplicativo para acompanhar a curva de crescimento específica para SD, gerenciar vacinas, receber alertas, participar de fóruns e acessar conteúdos do blog.


### Ferramentas Necessárias

-   **Node.js** (versão 14 ou superior)
-   **npm** (geralmente incluído com o Node.js) ou **Yarn** como gerenciador de pacotes
-   **MYSQL** Qualquer um de sua preferência
-   **NESTJS**
-   **Git** 


 ## Instalação 

Para instalar a api LadoDown, siga os passos abaixo:

    git clone https://github.com/luan-vilela/LadoDownAPI.git
    cd ladodownapi
    npm install
    
  ## Configuração do Ambiente

Api LadoDown utiliza variáveis de ambiente para configurar a API. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

.env

	SECRET=Sua_chave_hash_jwt
   	SERVER_PORT= 3001
  	DB_TYPE=mariadb
	DB_HOST=localhost
	DB_PORT=3306
	DB_USERNAME=user
	DB_PASSWORD=123
	DB_DATABASE=myDataBase
	DB_SYNCHRONIZE=false

   


Gerar um hash para o jwt segura, cuidado ao colocar  em produção não pode peder essa hash, se a hash for trocada terá que fazer update em todas as senhas salvas.

    openssl rand -base64 32


## Executar e Depurar

Para iniciar o servidor de desenvolvimento, utilize o comando:

    npm run start

Para compilar o servidor.

    npm run build

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

1.  Faça um fork do projeto.
2.  Crie uma nova branch (`git checkout -b feature/nova-feature`).
3.  Faça suas modificações.
4.  Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
5.  Push para a branch (`git push origin feature/nova-feature`).
6.  Abra um Pull Request.

## Contato

Para suporte ou feedback, você pode entrar em contato através de luan.vilela.comp@gmail.com 

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://raw.githubusercontent.com/luan-vilela/LadoDown/main/LICENSE) para mais detalhes.
