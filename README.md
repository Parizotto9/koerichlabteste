# Projeto de avaliação

Olá, este é um pequeno projeto em que iremos avaliar sua forma de "kodar" e trabalhar.

Abaixo seguem as intruções para realização do projeto.

### Como criar o repositório

Faça o FORK, torne o privado e me adicione (alexandresebrao) ao repo.

### Entendendo o fluxo

Cada tarefa é descrita da seguinte forma ATIVIDADE-XXX onde XXX é o numero dessa atividade. A cada realização de umas das tarefas deverá ser criado um commit com a seguinte mensagem "ATIVIDADE-XXX Breve Descrição"

### Entendendo este repositório

Nele você verá que temos uma pasta chamada public/ que contem os seguintes arquivos e pastas.

- index.html
- index.js
- index.css
- repositorio.json
- images/ (Diretório com imagens)

O arquivo index.html está em branco, nele deverá ser realizado a codificação do html, css e javascript.

Você não é obrigado a realizar o projeto nesta estrutura, fica a seu critério utilizar um framework de sua preferência.

### TESTES UNITÁRIOS

É esperado criação de teste unitário com o minimo de 70% de cobertura.

### ATIVIDADE-001 Listagem inicial

Deve-se importar o arquivo repositorio.json e exibir os registros em uma tabela com os seguintes colunas

- Nome do Produto
- Quantidade em estoque
- Peças com defeitos
- Peças para vendas

### ATIVIDADE-002 Filtrar registros

Deve-se ter um input texto ao topo para filtrar a tabela e somente exibir os registros que batem no filtro, mas é importante salientar que os usuários não irão se importar com letras maiusculas e minusculas. Também deve ter a possibilidade de exibir somente produtos por quantidades acima de 50 ou acima de 75

### ATIVIDADE-003 Visualização em grid

Entendemos que a tabela sirva legal para um relatório, mas também queremos ter a opção de ver os itens conforme uma grid onde cada quadrado conter as seguintes itens. Imagem do produto, nome do produto, quantidade para venda. O quadrado deve ter 500px de largura, um quadrado não deve encostar em outro, a altura fica a critério do desenvolvedor.
Lembre-se esperamos um resultado responsivo, onde os produtos se reorganizem na tela conforme a largura da janela do navegador.

### ATIVIDADE-004 Ordenar os itens

Quero ter a possibilidade de ordenar os itens por nome do produto, quantidade em estoque, e peças com defeitos.

### ATIVIDADE-005 Exibir valor formatado

Na tabela, agora queremos que adicione a coluna "valor" apresentando o mesmo seguindo o padrão brasileiro. Ex: R$ 1.399,49

### ATIVIDADE-006 Salvar preferências

Ao sair da pagina e retornar, a tela deve ser inicializada conforme o usuário deixou pela última vez, tanto na configuração de exibição como nos filtros.

### ATIVIDADE-007 Estilizar a página

Não queremos um visual padrão, agora queremos a sua criatividade, estilizar a pagina para que fique agradável de visualizar, aqui você pode utilizar qualquer framework de estilo do seu agrado.

### ATIVIDADE-008 (Opcional para vaga front-end obrigatório para FULLSTACK)

Desenvolver um backend em java para cadastrar, editar itens a lista.

### ATIVIDADE-009 Teste unitários (Obrigatório para vaga pleno ou maior)

Desenvolver uma estrutura e aplicar testes unitários com cobertura de 50% do código, tanto Frontend quanto no Backend

### EXECUÇÃO DO TESTE

Estou utilizando a versão v14.19.0 do Node

Ao iniciar o projeto rodar:

    npm install

para rodar localmente o projeto:

    npm start

para compilar o projeto:

    npm build

para testar o projeto:

    npm test

Aqui deve ser editado pelo desenvolvedor a forma de como podemos executar o projeto para avaliação. Incluindo versões das ferramentas necessárias para rodar a aplicação: Ex: NodeJS 15, Java 1.8 etc... Como rodar os testes unitários e ver os resultados e demais informações pertinentes ao projeto.

# ATENÇÃO TESTES SEM INSTRUÇÕES SERÃO REPROVADOS
