# 🖨️ API Estamparia (Print-on-Demand)

Uma API RESTful robusta e escalável construída em Node.js para o gerenciamento completo de um negócio de estamparia e personalização de produtos. O sistema orquestra o catálogo de insumos, o cadastro de clientes e o ciclo de vida dos pedidos.

## 🎯 O Problema que Resolve

Desenvolvido para automatizar o backoffice de estúdios de personalização, o sistema lida com regras de negócios complexas envolvendo diferentes tipos de produtos e serviços, tais como:
* Insumos físicos (Canecas de cerâmica, capas de almofada, azulejos para sublimação).
* Serviços sob demanda (Impressão DTF têxtil, aplicação de filme UV).

## 🚀 Stack de Tecnologias

* **Runtime:** Node.js
* **Framework Web:** Express.js
* **Banco de Dados:** PostgreSQL
* **ORM:** Prisma
* **Infraestrutura:** Docker & Docker Compose

## 🏗️ Arquitetura de Software

O projeto adota o padrão **MVC (Model-View-Controller)** aliado ao **Service Layer Pattern**. Essa escolha garante:
1. **Separação de Responsabilidades:** Controladores lidam exclusivamente com requisições/respostas HTTP, enquanto os Serviços encapsulam a regra de negócio e o acesso ao banco de dados.
2. **Escalabilidade e Manutenção:** Evita o anti-pattern de "Fat Controllers", facilitando a criação de testes automatizados e a manutenção a longo prazo.

## ⚙️ Como Executar Localmente

### 1. Pré-requisitos
* Node.js instalado.
* Docker Desktop rodando.

### 2. Subir a Infraestrutura (Banco de Dados)
O projeto utiliza um container Docker para o PostgreSQL, mapeado para a porta `5433` (evitando conflitos com instalações nativas do Windows).

```bash
docker compose up -d