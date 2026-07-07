/***********************************************************************
 * FANTASYTOCA - LUZES E MAGIA LTDA. (SISTEMA DESKTOP - FESTASYS v1.0)
 ***********************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_ITEMS 50

// Estrutura de dados para Temas
typedef struct {
    int id;
    char nome[50];
    char descricao[150];
    float preco_aluguel;
} Tema;

// Estrutura de dados para Fantasias
typedef struct {
    int id;
    char nome[100];
    char tamanho[5];
    int id_tema;
    int disponivel; // 1 = Sim, 0 = Não
    int vezes_emprestada;
} Fantasia;

// Estrutura de dados para Itens de Decoração
typedef struct {
    int id;
    char nome[100];
    int quantidade_estoque;
    int id_tema;
} ItemDecoracao;

// Banco de Dados em Memória (Carregamento inicial)
Tema banco_temas[MAX_ITEMS] = {
    {1, "Frozen", "Um reino congelante cheio de vestidos brilhantes, Elsa e Anna.", 250.00},
    {2, "Batman", "Aventuras com capas pretas e mascaras detalhadas.", 220.00},
    {3, "Safari", "Expedicao para pequenos aventureiros com bichos de pelucia.", 180.00},
    {4, "Unicornio", "Arco-iris, purpurina e um universo de tons pastel encantadores.", 200.00}
};
int total_temas = 4;

Fantasia banco_fantasias[MAX_ITEMS] = {
    {1, "Vestido da Elsa com Capa de Brilho", "G", 1, 1, 14},
    {2, "Vestido de Viagem da Anna", "M", 1, 1, 9},
    {3, "Traje Batman Cavaleiro das Trevas", "M", 2, 1, 18},
    {4, "Colete de Explorador Safari", "P", 3, 1, 12},
    {5, "Vestido de Unicornio Arco-Iris", "G", 4, 1, 15}
};
int total_fantasias = 5;

ItemDecoracao banco_itens[MAX_ITEMS] = {
    {1, "Pratos Floco de Neve Azul (Pkt c/ 20)", 15, 1},
    {2, "Copos Elsa e Anna (Pkt c/ 20)", 8, 1},
    {3, "Painel Gigante Floresta Safari", 2, 3},
    {4, "Pratos Unicórnio Dourado (Pkt c/ 20)", 7, 4}
};
int total_itens = 4;

// Função utilitária para limpar o buffer de entrada do teclado
void limpar_buffer() {
    int c;
    while ((c = getchar()) != '\n' && c != EOF);
}

// Cabeçalhos de Funções do CRUD
void cadastrar_tema();
void listar_temas();
void cadastrar_fantasia();
void listar_fantasias();
void pesquisar_fantasia();
void excluir_fantasia();

int main() {
    int opcao = -1;
    
    while (opcao != 0) {
        printf("\n========================================================\n");
        printf("              FESTASYS v1.0 - FANTASYTOCA               \n");
        printf("        SISTEMA INTERNO DE GESTAO DE ACERVO            \n");
        printf("========================================================\n");
        printf(" 1. Cadastrar Novo Tema Decorativo\n");
        printf(" 2. Listar Todos os Temas\n");
        printf(" 3. Cadastrar Nova Fantasia Infantil\n");
        printf(" 4. Listar Estoque de Fantasias\n");
        printf(" 5. Pesquisar Fantasia Individual (Busca por ID)\n");
        printf(" 6. Dar Baixa / Excluir Fantasia do Sistema\n");
        printf(" 0. Sair do FestaSys\n");
        printf("--------------------------------------------------------\n");
        printf("Digite a opcao desejada: ");
        
        // Captura robusta impedindo travamento se o usuário digitar letras
        if (scanf("%d", &opcao) != 1) {
            printf("\n[ERRO]: Entrada invalida! Digite apenas numeros.\n");
            limpar_buffer();
            continue;
        }
        limpar_buffer();
        
        switch (opcao) {
            case 1:
                cadastrar_tema();
                break;
            case 2:
                listar_temas();
                break;
            case 3:
                cadastrar_fantasia();
                break;
            case 4:
                listar_fantasias();
                break;
            case 5:
                pesquisar_fantasia();
                break;
            case 6:
                excluir_fantasia();
                break;
            case 0:
                printf("\nFechando sistema FestaSys. Obrigado por trabalhar com a Fantasytoca!\n");
                break;
            default:
                printf("\n[ATENCAO]: Opcao inexistente no menu corporativo! Tente outra.\n");
        }
    }
    
    return 0;
}

// 1. CRIAR TEMA (CREATE)
void cadastrar_tema() {
    if (total_temas >= MAX_ITEMS) {
        printf("\n[ERRO]: Limite maximo de temas cadastrados atingido!\n");
        return;
    }
    Tema novo;
    novo.id = total_temas + 1;
    
    printf("\n>>> CADASTRAR NOVO TEMA INTERNO\n");
    printf("Nome do Tema (Ex: Moana): ");
    fgets(novo.nome, sizeof(novo.nome), stdin);
    novo.nome[strcspn(novo.nome, "\n")] = '\0'; // Remove o enter
    
    printf("Descricao Breve: ");
    fgets(novo.descricao, sizeof(novo.descricao), stdin);
    novo.descricao[strcspn(novo.descricao, "\n")] = '\0';
    
    printf("Preco Locacao Diaria (R$): ");
    if (scanf("%f", &novo.preco_aluguel) != 1) {
        printf("\n[ERRO]: Valor monetario incorreto! Cadastro cancelado.\n");
        limpar_buffer();
        return;
    }
    limpar_buffer();
    
    banco_temas[total_temas] = novo;
    total_temas++;
    printf("\n[SUCESSO]: Tema '%s' cadastrado sob ID corporativo #%d!\n", novo.nome, novo.id);
}

// 2. LISTAR/LER TEMAS (READ)
void listar_temas() {
    printf("\n========================================================\n");
    printf("             RELAÇÃO DE TEMAS DE FESTAS                 \n");
    printf("========================================================\n");
    printf("%-4s | %-12s | %-12s | %-30s\n", "ID", "Tema", "Preco (R$)", "Descricao");
    printf("--------------------------------------------------------\n");
    for (int i = 0; i < total_temas; i++) {
        printf("%04d | %-12s | R$ %-9.2f | %-30s\n", 
               banco_temas[i].id, 
               banco_temas[i].nome, 
               banco_temas[i].preco_aluguel, 
               banco_temas[i].descricao);
    }
    printf("========================================================\n");
}

// 3. CRIAR FANTASIA (CREATE)
void cadastrar_fantasia() {
    if (total_fantasias >= MAX_ITEMS) {
        printf("\n[ERRO]: Capacidade de estoque do sistema lotada!\n");
        return;
    }
    Fantasia nova;
    nova.id = total_fantasias + 1;
    nova.vezes_emprestada = 0;
    nova.disponivel = 1;
    
    printf("\n>>> REGISTRAR NOVO TRAJE TEMATICO NO ACERVO\n");
    printf("Nome da Fantasia (Ex: Vestido de Luxo): ");
    fgets(nova.nome, sizeof(nova.nome), stdin);
    nova.nome[strcspn(nova.nome, "\n")] = '\0';
    
    printf("Tamanho (P, M, G, GG, U): ");
    fgets(nova.tamanho, sizeof(nova.tamanho), stdin);
    nova.tamanho[strcspn(nova.tamanho, "\n")] = '\0';
    
    listar_temas();
    printf("Vincular a qual ID de Tema acima? ");
    if (scanf("%d", &nova.id_tema) != 1) {
        printf("\n[ERRO]: ID de tema invalido! Cadastro abortado.\n");
        limpar_buffer();
        return;
    }
    limpar_buffer();
    
    banco_fantasias[total_fantasias] = nova;
    total_fantasias++;
    printf("\n[SUCESSO]: Traje '%s' (Tam %s) foi integrado ao acervo sob ID #%d!\n", 
           nova.nome, nova.tamanho, nova.id);
}

// 4. LISTAR/LER FANTASIAS (READ)
void listar_fantasias() {
    printf("\n========================================================================\n");
    printf("                       INVENTARIO DE FANTASIAS                          \n");
    printf("========================================================================\n");
    printf("%-4s | %-32s | %-7s | %-12s | %-10s\n", "ID", "Nome da Fantasia Infantil", "Tamanho", "Status", "Alugueis");
    printf("------------------------------------------------------------------------\n");
    for (int i = 0; i < total_fantasias; i++) {
        char status_txt[15];
        if (banco_fantasias[i].disponivel == 1) {
            strcpy(status_txt, "Disponivel");
        } else {
            strcpy(status_txt, "Alugada");
        }
        
        printf("%04d | %-32s | %-7s | %-12s | %-10d\n", 
               banco_fantasias[i].id, 
               banco_fantasias[i].nome, 
               banco_fantasias[i].tamanho, 
               status_txt, 
               banco_fantasias[i].vezes_emprestada);
    }
    printf("========================================================================\n");
}

// 5. CONSULTAR/PESQUISAR FANTASIA (QUERY)
void pesquisar_fantasia() {
    int id_busca;
    printf("\nDigite o ID do traje que deseja consultar: ");
    if (scanf("%d", &id_busca) != 1) {
        printf("\n[ERRO]: ID numerico invalido!\n");
        limpar_buffer();
        return;
    }
    limpar_buffer();
    
    for (int i = 0; i < total_fantasias; i++) {
        if (banco_fantasias[i].id == id_busca) {
            printf("\n============================================\n");
            printf("            DETALHES DO ITEM ENCONTRADO     \n");
            printf("============================================\n");
            printf(" ID do Traje: #%04d\n", banco_fantasias[i].id);
            printf(" Nome da Peca: %s\n", banco_fantasias[i].nome);
            printf(" Grade/Tamanho: %s\n", banco_fantasias[i].tamanho);
            printf(" ID do Tema Vinculado: %d\n", banco_fantasias[i].id_tema);
            printf(" Status de Disponibilidade: %s\n", 
                   banco_fantasias[i].disponivel == 1 ? "Disponivel para Locacao" : "Alugado/Indisponivel");
            printf(" Popularidade de Saidas: %d Vezes Alugada\n", banco_fantasias[i].vezes_emprestada);
            printf("============================================\n");
            return;
        }
    }
    printf("\n[ATENCAO]: Nenhuma fantasia encontrada com o ID #%d informado.\n", id_busca);
}

// 6. EXCLUIR FANTASIA (DELETE / Remover)
void excluir_fantasia() {
    int id_excluir;
    printf("\nDigite o ID do traje do qual deseja dar baixa e remover: ");
    if (scanf("%d", &id_excluir) != 1) {
        printf("\n[ERRO]: ID invalido!\n");
        limpar_buffer();
        return;
    }
    limpar_buffer();
    
    int index_encontrado = -1;
    for (int i = 0; i < total_fantasias; i++) {
        if (banco_fantasias[i].id == id_excluir) {
            index_encontrado = i;
            break;
        }
    }
    
    if (index_encontrado == -1) {
        printf("\n[ERRO]: Traje com ID #%d nao existe no estoque do FestaSys.\n", id_excluir);
        return;
    }
    
    // Removendo e reordenando o array utilizando deslocamento
    char nome_excluido[100];
    strcpy(nome_excluido, banco_fantasias[index_encontrado].nome);
    
    for (int i = index_encontrado; i < total_fantasias - 1; i++) {
        banco_fantasias[i] = banco_fantasias[i + 1];
    }
    total_fantasias--;
    
    printf("\n[SUCESSO]: Baixa efetuada com sucesso! Traje '%s' (ID #%d) removido do FestaSys.\n", 
           nome_excluido, id_excluir);
}
