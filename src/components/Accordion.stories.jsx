import Accordion from './Accordion/Accordion.vue';
import AccordionItem from './Accordion/AccordionItem.vue';

export default {
  title: 'Scuba/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Permite múltiplos itens abertos simultaneamente'
    },
    defaultOpen: {
      control: 'text',
      description: 'ID(s) do(s) item(ns) aberto(s) por padrão'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { Accordion, AccordionItem },
  setup() {
    return { args };
  },
  template: `
    <Accordion v-bind="args">
      <AccordionItem id="item-1" title="Item 1">
        Conteúdo do item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionItem>
      <AccordionItem id="item-2" title="Item 2">
        Conteúdo do item 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
      <AccordionItem id="item-3" title="Item 3">
        Conteúdo do item 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </AccordionItem>
    </Accordion>
  `,
});
Playground.args = {
  multiple: false,
  defaultOpen: null
};

// Default (Single)
export const Default = () => ({
  components: { Accordion, AccordionItem },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Modo Simples</h2>
      <Accordion>
        <AccordionItem id="faq-1" title="O que é o Scuba Design System?">
          O Scuba Design System é uma biblioteca de componentes Vue 3 com design tokens
          sincronizados com o Figma, proporcionando consistência entre design e desenvolvimento.
        </AccordionItem>
        <AccordionItem id="faq-2" title="Como instalar o sistema?">
          Você pode instalar via npm ou yarn:
          <pre style="margin-top: 8px; padding: 12px; background: #f3f4f6; border-radius: 4px;">npm install @scuba/design-system</pre>
        </AccordionItem>
        <AccordionItem id="faq-3" title="Suporta TypeScript?">
          Sim! Todos os componentes possuem tipagens TypeScript completas para melhor
          experiência de desenvolvimento.
        </AccordionItem>
        <AccordionItem id="faq-4" title="É compatível com Vue 3?">
          Sim, o Scuba foi desenvolvido especificamente para Vue 3 utilizando a Composition API.
        </AccordionItem>
      </Accordion>
    </div>
  `,
});

// Multiple Open
export const Multiple = () => ({
  components: { Accordion, AccordionItem },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Múltiplos Abertos</h2>
      <Accordion :multiple="true">
        <AccordionItem id="section-1" title="Seção 1 - Introdução">
          Esta seção contém informações introdutórias sobre o produto.
          Você pode abrir múltiplas seções simultaneamente neste modo.
        </AccordionItem>
        <AccordionItem id="section-2" title="Seção 2 - Recursos">
          <ul style="margin: 0; padding-left: 20px;">
            <li>Recurso A</li>
            <li>Recurso B</li>
            <li>Recurso C</li>
          </ul>
        </AccordionItem>
        <AccordionItem id="section-3" title="Seção 3 - Preços">
          Informações sobre planos e preços disponíveis.
        </AccordionItem>
        <AccordionItem id="section-4" title="Seção 4 - Suporte">
          Entre em contato conosco através do email: suporte@exemplo.com
        </AccordionItem>
      </Accordion>
    </div>
  `,
});

// Default Open
export const DefaultOpen = () => ({
  components: { Accordion, AccordionItem },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Item Aberto por Padrão</h2>
      <Accordion default-open="config-2">
        <AccordionItem id="config-1" title="Configurações Gerais">
          Defina as configurações gerais do sistema.
        </AccordionItem>
        <AccordionItem id="config-2" title="Configurações de Notificação">
          Gerencie como e quando você recebe notificações. Este item está aberto por padrão.
        </AccordionItem>
        <AccordionItem id="config-3" title="Configurações de Privacidade">
          Controle suas configurações de privacidade e segurança.
        </AccordionItem>
      </Accordion>
    </div>
  `,
});

// Disabled Items
export const WithDisabledItems = () => ({
  components: { Accordion, AccordionItem },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Itens Desabilitados</h2>
      <Accordion>
        <AccordionItem id="item-1" title="Item Ativo">
          Este item pode ser expandido normalmente.
        </AccordionItem>
        <AccordionItem id="item-2" title="Item Desabilitado (em breve)" :disabled="true">
          Este conteúdo não está disponível no momento.
        </AccordionItem>
        <AccordionItem id="item-3" title="Outro Item Ativo">
          Este item também pode ser expandido.
        </AccordionItem>
        <AccordionItem id="item-4" title="Item Desabilitado (premium)" :disabled="true">
          Recurso disponível apenas para plano premium.
        </AccordionItem>
      </Accordion>
    </div>
  `,
});

// Custom Header Content
export const CustomHeader = () => ({
  components: { Accordion, AccordionItem },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Header Personalizado</h2>
      <Accordion>
        <AccordionItem id="task-1">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">✅ Tarefa Concluída</span>
              <span style="margin-left: auto; font-size: 12px; color: #10b981; background: #d1fae5; padding: 4px 8px; border-radius: 4px;">
                Completo
              </span>
            </div>
          </template>
          A tarefa foi concluída com sucesso em 15/01/2024.
        </AccordionItem>

        <AccordionItem id="task-2">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">⏳ Tarefa em Andamento</span>
              <span style="margin-left: auto; font-size: 12px; color: #3b82f6; background: #dbeafe; padding: 4px 8px; border-radius: 4px;">
                60% completo
              </span>
            </div>
          </template>
          Progresso atual: 6 de 10 subtarefas concluídas.
        </AccordionItem>

        <AccordionItem id="task-3">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">📋 Tarefa Pendente</span>
              <span style="margin-left: auto; font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">
                Não iniciada
              </span>
            </div>
          </template>
          Esta tarefa ainda não foi iniciada.
        </AccordionItem>
      </Accordion>
    </div>
  `,
});

// In a Card
export const InCard = () => ({
  components: { Accordion, AccordionItem },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Dentro de um Card</h2>
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; max-width: 600px;">
        <div style="padding: 20px; border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Perguntas Frequentes</h3>
          <p style="margin: 4px 0 0 0; font-size: 14px; color: #6b7280;">
            Encontre respostas para as dúvidas mais comuns
          </p>
        </div>
        <Accordion>
          <AccordionItem id="q1" title="Como criar uma conta?">
            Clique no botão "Criar Conta" no canto superior direito e preencha o formulário.
          </AccordionItem>
          <AccordionItem id="q2" title="Esqueci minha senha, o que fazer?">
            Clique em "Esqueci minha senha" na tela de login e siga as instruções enviadas por email.
          </AccordionItem>
          <AccordionItem id="q3" title="Como cancelar minha assinatura?">
            Acesse Configurações > Assinatura > Cancelar Assinatura.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  `,
});

// Design Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Title</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Content & Icon</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (header)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (content)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>FAQs:</strong> Perguntas frequentes e documentação</li>
          <li><strong>Seções Colapsáveis:</strong> Organizar conteúdo longo em seções</li>
          <li><strong>Configurações:</strong> Agrupar opções de configuração</li>
          <li><strong>Modo Simples:</strong> Use quando apenas um item deve estar aberto por vez</li>
          <li><strong>Modo Múltiplo:</strong> Use quando o usuário precisa comparar conteúdos</li>
          <li>Forneça títulos claros e descritivos</li>
          <li>Use <code>defaultOpen</code> para destacar conteúdo importante</li>
          <li>Desabilite itens temporariamente indisponíveis</li>
          <li>Customize headers para adicionar badges, ícones ou informações extras</li>
        </ul>
      </div>
    </div>
  `,
});
