# Projeto Reencontrar - Plataforma de Achados e Perdidos

## 1. Visão Geral
Criar uma plataforma inteligente e geolocalizada para conectar pessoas que perderam e encontraram objetos ou pets, superando a fragmentação atual dos grupos de redes sociais.

## 2. Objetivos e Público-Alvo
*   **Objetivo**: Reduzir o tempo de recuperação de itens perdidos através de cruzamento de dados automático.
*   **Público**: Pessoas físicas (perda de documentos/pets) e estabelecimentos comerciais (shoppings, bares, transportes) que acumulam itens achados.

## 3. Personas
*   **O Desesperado**: Perdeu algo valioso (afetiva ou financeiramente) e precisa de alcance rápido.
*   **O Bom Samaritano**: Achou algo e quer devolver sem burocracia ou exposição de dados pessoais.

## 4. Requisitos Funcionais (Funcionalidades)

### A. Cadastro de Itens (Perdi / Achei)
*   **Upload de Fotos**: Múltiplas imagens com compressão automática.
*   **Geolocalização**: Seleção no mapa do local exato ou aproximado do evento.
*   **Categorização Inteligente**: Tags automáticas (Ex: "Chave", "Cachorro", "Carteira").

### B. O Diferencial Tecnológico (O "Match")
*   **Sistema de Cruzamento**: O sistema deve alertar o usuário "A" se o item postado pelo usuário "B" tiver 70% de similaridade (categoria + local + data).
*   **Privacidade**: Chat interno mascarado (estilo OLX) para combinar a entrega sem expor o número de telefone de imediato.

### C. Geração de Materiais
*   **Gerador de Cartaz**: Botão que gera automaticamente um PDF/Imagem "PROCURA-SE" com QR Code para impressão ou compartilhamento em Stories.

## 5. Requisitos Não Funcionais
*   **Mobile First**: O site deve ser uma PWA (Progressive Web App) para funcionar como app sem precisar de download na Play Store.
*   **LGPD**: Criptografia de dados sensíveis e opção de exclusão definitiva de anúncios.
*   **Segurança**: Filtro de palavras ofensivas e denúncia de anúncios falsos/golpes.

## 6. User Experience (Fluxo do Usuário)
*   **Home**: Busca rápida por categoria e mapa de calor de itens próximos.
*   **Botão "Perdi algo"**: Fluxo de 3 passos (Foto -> Local -> Contato).
*   **Dashboard**: Gerenciamento de alertas ativos.

## 7. Roadmap de Lançamento (Fases)
*   **V1 (MVP)**: Cadastro simples, mapa básico e chat interno.
*   **V2**: Implementação de IA para reconhecimento de imagem (comparar fotos de pets).
*   **V3**: Parcerias com prefeituras e empresas de transporte para integrar os "achados" oficiais deles no seu mapa.

## 8. Métricas de Sucesso
*   **Taxa de Match**: Quantos itens foram marcados como "Devolvidos".
*   **Tempo de Resolução**: Tempo médio entre o anúncio e a devolução.
