## SISTEMA INTEGRADO FANTASYTOCA & FESTASYS v1.0
---
**Destinatário:** Corpo Docente / Avaliador de Extensão
**Discente / Autor:** Equipe de Extensão Tecnológica 
**Empresa Parceira:** Fantasytoca - Luzes e Magia Ltda. (Estabelecida em 2018)  
**Contexto Acadêmico:** Aplicação prática de tecnologias computacionais para expansão operacional de microempresas comunitárias.

---

## 1. INTRODUÇÃO E ENTENDIMENTO ADMISSÍVEL DO PROJETO

O presente projeto de extensão universitária foi estruturado visando solucionar uma demanda real de mercado apresentada pela microempresa **Fantasytoca - Luzes e Magia Ltda.**, localizada na Rua Alegre, nº 45, Bairro Jardim das Flores. Desde 2018, a empresa fomenta o universo lúdico infanto-juvenil através da locação de trajes temáticos sob demanda e do fornecimento de insumos e kits de decoração de festas personalizados.

Para otimizar o fluxo de triagem, a captação de clientes locais e a organização interna do acervo, foi concebida uma arquitetura dupla:
1. **Plataforma de Exposição e Orçamentos Web Estética (`[04] Web`)**: Focada na atratividade do consumidor final, permitindo navegação fluida, filtragem instantânea de categorias, verificação de tamanhos e envio ágil de orçamentos integrados ao CRM do WhatsApp.
2. **Terminal Desktop FestaSys em Linguagem C (`[05] Algoritmo_C`)**: Um software interno para a equipe operacional realizar rotinas de inventário, listagens de estoque, cadastramento de temas e exclusões seguras em memória de forma extremamente performática.

A retaguarda desses softwares é fundamentada em uma modelagem relacional rigorosa de dados representada na pasta de Banco de Dados.

---

## 2. ARQUITETURA DE PASTAS E COMPONENTES DO PROJETO

O ecossistema é modularizado em 6 diretórios principais organizados numericamente, garantindo fácil navegação e auditoria acadêmica:

```text
/Projeto_Extensao_Fantasytoca/
├── [01] Objetivos_e_Documentacao/
│   └── objetivos.txt              <-- Contexto institucional e impacto acadêmico-social do projeto.
├── [02] Modelagem_Banco_de_Dados/
│   └── modelagem.txt              <-- Modelo conceitual de tabelas e especificação técnica dos dicionários de dados.
├── [03] SQL/
│   └── script.sql                 <-- Script DDL/DML com queries, gatilhos lógicos e relatórios analíticos de tomada de decisão.
├── [04] Web/
│   ├── index.html                 <-- Fachada principal, vitrine de marcas, catálogo rico e sistema de filtragem responsiva.
│   ├── contato.html               <-- Formulário de agendamento acoplado ao acervo por passagem dinâmica de parâmetros.
│   ├── login.html                 <-- Portal estético de autenticação de sessão do staff.
│   ├── admin.html                 <-- Dashboard administrativo interno (CRUD de fantasias e central de propostas).
│   ├── script.js                  <-- Motor inteligente de persistência (localStorage) e renderização gráfica em vetor SVG.
│   ├── style.css                  <-- Estilos de fidelidade, animações fluidas e efeitos translúcidos adicionais.
│   └── imagens/                   <-- Repositório físico para as capinhas lúdicas e logotipo.
├── [05] Algoritmo_C/
│   └── main.c                     <-- Algoritmo compilado em C para o terminal FestaSys, implementando gerenciamento em memória.
├── [06] Conclusao_e_Referencias/
│   ├── conclusao.txt              <-- Relatório crítico avaliando o impacto social e o aperfeiçoamento didático.
│   └── referencias.txt            <-- Referências científicas, normas da ABNT e tecnologias consolidadas aplicadas.
└── DOCUMENTACAO_PARA_O_PROFESSOR.md <-- Este manual conceitual analítico completo.
```

---

## 3. MODELAGEM RELACIONAL E ESTRUTURA SQL (`[02]` & `[03]`)

A modelagem de dados foi estruturada utilizando a **Terceira Forma Normal (3FN)** para mitigar redundâncias e anomalias de escrita.

### 3.1 Entidades Utilizadas
- **Tema (`tema`)**: Representa o núcleo conceitual do acervo lúdico (ex: *Frozen*, *Batman*, *Safari*, *Unicórnio*). Armazena o valor diário de locação integrado.
- **Fantasia (`fantasia`)**: Refere-se à peça física de vestuário atribuída a um tema. Possui grade de tamanho específico e contador de popularidade para tomadas de decisão comercial.
- **Item de Decoração (`item_decoracao`)**: Compreende os suprimentos de mesa de comemoração (pratos, copos e adereços temáticos descartáveis) anexados a um tema principal.

### 3.2 Relacionamento de Integridade Referencial
O modelo estabelece conexões de **1:N (Um para Muitos)**:
*   `tema ──(1:N)──> fantasia` (Uma categoria temática encobre diversos tamanhos ou modelos de trajes).
*   `tema ──(1:N)──> item_decoracao` (Um tema possui diversos adereços descartáveis).

No código de criação das tabelas (`script.sql`), as chaves estrangeiras (`FOREIGN KEY`) utilizam a cláusula **`ON DELETE CASCADE`**. Isso garante a manutenção automática das tabelas subordinadas; caso o gestor remova o tema "Safari", todas as fantasias e decorações ligadas a este tema serão excluídas automaticamente, evitando órfãos digitais e corrupção referencial no sistema.

### 3.3 Views Estratégicas para Tomada de Decisão (Relatórios Analíticos)
1.  **`v_fantasias_populares`**: Agrupa dados cruzando tabelas utilizando junção interna (`INNER JOIN`) e lista as fantasias ordenadas pelo campo `vezes_emprestada` em ordem decrescente. Permite ao administrador identificar quais produtos geram maior tração operacional para direcionar novos investimentos de compra de tecido e tamanhos.
2.  **`v_estoque_critico`**: Filtra insumos (como copos e pratos) cuja quantidade caiba abaixo de 10 unidades (`quantidade_estoque < 10`). Oferece alertas proativos de reposição antecipada antes do agendamento dos eventos de finais de semana.

---

## 4. SISTEMA DESKTOP EM LINGUAGEM C (`[05] Algoritmo_C`)

O software **FestaSys v1.0** representa uma aplicação ideal para terminais administrativos offline, com ênfase em alto desempenho, segurança de memória e ausência de dependências externas.

### 4.1 Estrutura de Registros (`typedef struct`)
O sistema gerencia estruturas compostas para representar perfeitamente o dicionário físico no ambiente computacional:
*   `Tema`: Código numérico identificador (`id`), nome, descrição geral e preço de locação (`preco_aluguel`).
*   `Fantasia`: Código, nome completo do traje, tamanho em caractere (`tamanho`), código do tema correspondente, status lógico de disponibilidade (`disponivel` sendo 1 para sim e 0 para não) e contagem de locações efetuadas.
*   `ItemDecoracao`: Código, nome do insumo de mesa, quantidade em estoque físico e código de tema mapeado.

### 4.2 Lógica das Operações Fundamentais do CRUD
- **Leitura Segura de Teclado**: O sistema utiliza persistentemente o utilitário `fgets` acoplado ao redimensionamento de string por `strcspn` para remover o caractere de quebra de linha `\n`. Isso previne brechas de segurança de estouro de memória (*buffer overflow*) e aceita de forma concisa nomes de produtos compostos por espaços.
- **Tratamento Defensivo contra Entradas Inválidas (`limpar_buffer()`)**: Caso o operador insira de maneira acidental letras em campos estritamente inteiros (como os IDs ou opções de menu), funções como `scanf` falhariam e causariam loops contínuos de travamento. O sistema intercepta o retorno avaliando `if (scanf(...) != 1)`, limpa o fluxo por meio da função `limpar_buffer()` (que consome todos os caracteres pendentes no `stdin`), exibe uma mensagem amigável de erro corporativo e retorna ao menu de segurança de forma intacta.
- **Exclusão Física via Algoritmo de Deslocamento (*Array Shifting*)**: Ao dar baixa em um traje, localiza-se seu índice na memória ram. O elemento selecionado é removido e todas as posições subsequentes são transladadas uma casa para a esquerda através de uma estrutura de repetição incremental `for (int i = index_encontrado; i < total_fantasias - 1; i++)`. O contador geral das posições (`total_fantasias`) é decrescido de maneira unitária, mantendo a contiguidade do vetor sem criar fragmentos nulos na estrutura.

---

## 5. PLATAFORMA DE EXPOSIÇÃO E CRM WEB (`[04] Web`)

A interface da Fantasytoca na Web foi desenvolvida sob uma perspectiva moderna, utilizando tecnologias consolidadas de frontend para criar uma experiência de usuário (UX) confortável e interativa:

### 5.1 Divisões Semânticas de Arquivos
-   `index.html`: Layout de recepção do consumidor, oferecendo navegação por marca lúdica, catálogo interativo dinâmico, galeria bento-grid de produtos, filtros rápidos de categorias e botões direcionadores para detalhes.
-   `contato.html`: Interface de solicitação de reservas de festas. Recebe parâmetros lógicos para pré-preenchimento e vinculação automatizada de trajes do acervo físico.
-   `login.html`: Tela minimalista e esteticamente focada na proteção visual do staff técnico que opera os dados.
-   `admin.html`: Terminal administrativo para cadastro direto de peças de reposição e triagem de solicitações enviadas.
-   `style.css`: Controla o visual retroativo do design aplicando efeito de painéis translúcidos (*Glassmorphism*), sombreamentos intensificados e transições fluidas de renderização.

### 5.2 Banco de Dados Local Simulado em Memória (`localStorage`)
O arquivo `script.js` carrega um conjunto inicial de temas e produtos se nenhum dado for previamente encontrado em cache. Mediante manipulações em formato de cadeia JSON, qualquer alteração incremental feita via painel administrativo (adição de produto, edição de preço, remoção física ou alteração de status) é persistida de maneira contínua no navegador do usuário. Isso permite simular com exatidão o comportamento de um banco de dados relacional complexo sem necessidade de conexões iniciais complicadas com servidores, sendo excelente para avaliações didáticas e demonstrações prototipadas de alta velocidade.

### 5.3 Motor Gráfico de Backup Dinâmico (SVG Fallback Generator)
Um dos segredos de resiliência visual e arquitetura avançada criados no `script.js` é o sistema de tratamento preventivo de imagens ausentes ou corrompidas. 
Se por algum motivo o arquivo de fotografia de capa não for localizado (erro HTTP 404), arquivo inexistente localmente, ou problemas de carregamento no servidor de rede doméstica, o evento `onerror` do elemento `<img>` aciona a função universal `window.tratarErroImagem(this)`.

Esta função extrai o nome do traje e calcula de maneira inteligente um código matemático único de identificação (*hash*) baseado na soma dos caracteres da string:
```javascript
let hash = 0;
for (let i = 0; i < nome.length; i++) {
    hash = nome.charCodeAt(i) + ((hash << 5) - hash);
}
```
Com base neste código *hash*, o sistema rotaciona entre paletas de cores sofisticadas (Slate Escuro, Preto Cósmico, Zinco etc.) e gera via código um **gráfico vetorial em formato SVG codificado em Base64**. Este gráfico renderiza sob demanda uma etiqueta gráfica polida contendo o nome do item, sua classificação de luxo e uma belíssima coroa estelar decorativa. Desta forma, o layout do catálogo jamais quebra ou exibe ícones brancos de erro de arquivo, assegurando que o professor veja um acabamento visual pristino em qualquer ambiente offline ou simulado.

### 5.4 Integração Inteligente com Canais de Atendimento (CRM WhatsApp)
Ao consolidar a ficha de reserva de festa na página `contato.html`, o script intercepta o envio do formulário, valida os campos e gera uma mensagem formatada de maneira humanizada. 
Por meio de funções globais como `encodeURIComponent()`, os parâmetros de data, tipo de combo e fantasia são serializados e transferidos diretamente para o endereço parametrizado do WhatsApp corporativo da Fantasytoca. No console administrativo, as mensagens permanecem arquivadas para controle de conversões na triagem de propostas, com comandos rápidos de aprovação ou descarte lógico.

---

## 6. CONCLUSÃO E AVALIAÇÃO EXTENSIONISTA

O ecossistema construído para a **Fantasytoca - Luzes e Magia Ltda.** atende plenamente aos requisitos de engenharia de software acadêmica e diretrizes extensionistas da universidade:
1.  **Modularidade Elegante**: Permite reaproveitar dados e conceituações do banco de dados relacional físico em diferentes frentes de interfaces tecnológicas distintas (desktop em terminal de alta velocidade vs web visual).
2.  **Robustez de Validação**: Sistemas de filtragem contra ruídos de teclado em C e interceptador de carregamento de recursos gráficos na Web evitam indisponibilidades do ambiente operacional.
3.  **Utilidade Social**: Fornece ferramentas robustas sem barreiras de custos altos de infraestrutura, demonstrando o compromisso de fomento à inovação em microempresas e aproximando de forma pragmática a teoria universitária da realidade prática do mercado de tecnologia brasileiro.
