
# Loja AgilStore

AgilStore é uma aplicação em Node.js desenvolvida para gerenciar o inventário de uma loja de eletrônicos. Ela permite adicionar, listar, atualizar, excluir e buscar produtos de forma eficiente, utilizando um arquivo JSON para a persistência de dados.


## Funcionalidades

- Adicionar Produto: Permite cadastrar novos produtos com nome, categoria, quantidade em estoque e preço.

- Listar Produtos: Exibe todos os produtos cadastrados em formato de tabela.

- Atualizar Produto: Atualiza informações de produtos existentes (nome, categoria, quantidade ou preço).

- Excluir Produto: Remove produtos do inventário com confirmação.

- Buscar Produto: Permite buscar produtos pelo ID ou nome.




## Stack utilizada

- **Node.js:** Plataforma utilizada para criar a aplicação.

- **readline-sync:** Biblioteca para interação com o usuário no terminal.

- **fs (File System):** Módulo nativo do Node.js utilizado para manipulação do arquivo JSON.




## Requisitos

- **Node.js** instalado na máquina.
## Instruções para Rodar a Aplicação


    1. Clone o repositório:

        ```bash
        git clone <URL_DO_REPOSITORIO>
        cd agilstore
        ```
    
    2. Instale as dependências:

        ```bash
        npm install
        ```
    
    3. Prepare o arquivo JSON: Certifique-se de que o arquivo data/products.json existe e contém um array vazio:

        ```bash
        []
        ```

    4. Inicie a aplicação:

        ```bash
        node index.js
        ```
    
    5. Use o menu interativo: O programa apresentará um menu com as opções disponíveis:

        - Adicionar Produto

        - Listar Produtos

        - Atualizar Produto

        - Excluir Produto

        - Buscar Produto

        - Sair
## Notas

Os dados dos produtos são persistidos automaticamente no arquivo products.json para que sejam mantidos mesmo após o encerramento da aplicação.

Certifique-se de que o arquivo products.json tenha permissão de leitura e escrita.

