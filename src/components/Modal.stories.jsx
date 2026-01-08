import Modal from './Modal/Modal.vue';
import Button from './Button/Button.vue';
import { ref } from 'vue';

export default {
  title: 'Scuba/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Estado aberto/fechado (v-model)'
    },
    title: {
      control: 'text',
      description: 'Título do modal'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Tamanho do modal'
    },
    showClose: {
      control: 'boolean',
      description: 'Mostrar botão de fechar'
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Fechar ao clicar no backdrop'
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Fechar ao pressionar ESC'
    },
    lockScroll: {
      control: 'boolean',
      description: 'Bloquear scroll do body'
    },
    persistent: {
      control: 'boolean',
      description: 'Modal persistente (não fecha)'
    },
    onOpen: { action: 'opened' },
    onClose: { action: 'closed' }
  },
};

// Template base
const Template = (args) => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    const openModal = () => { isOpen.value = true; };
    const closeModal = () => { isOpen.value = false; };
    return { isOpen, openModal, closeModal, args };
  },
  template: `
    <div>
      <Button variant="solid" label="Abrir Modal" @click="openModal" />
      <Modal v-bind="args" v-model="isOpen">
        <p>Este é o conteúdo do modal. Você pode adicionar qualquer conteúdo aqui.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="closeModal" />
          <Button variant="solid" label="Confirmar" @click="closeModal" />
        </template>
      </Modal>
    </div>
  `,
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  title: 'Título do Modal',
  size: 'md',
  showClose: true,
  closeOnBackdrop: true,
  closeOnEscape: true,
  lockScroll: true,
  persistent: false,
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes configurações do modal.'
    }
  }
};

// Tamanhos
export const Small = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Small Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Small Modal" size="sm">
        <p>Este é um modal pequeno. Ideal para confirmações simples e alertas.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="OK" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

export const Medium = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Medium Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Medium Modal" size="md">
        <p>Este é um modal médio (padrão). Adequado para a maioria dos casos de uso.</p>
        <p>Você pode adicionar múltiplos parágrafos e conteúdo mais complexo aqui.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Salvar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

export const Large = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Large Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Large Modal" size="lg">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Conteúdo Extenso</h3>
          <p style="margin-bottom: 16px;">Este é um modal grande, ideal para formulários complexos ou conteúdo extenso.</p>
          <p style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Confirmar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

export const ExtraLarge = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Extra Large Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Extra Large Modal" size="xl">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Modal Muito Grande</h3>
          <p style="margin-bottom: 16px;">Este modal é extra grande, perfeito para dashboards, editores ou visualizações complexas.</p>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px;">
            <div style="padding: 16px; background: #f9fafb; border-radius: 8px;">
              <h4 style="margin-bottom: 8px; font-weight: 600;">Seção 1</h4>
              <p style="font-size: 14px; color: #6b7280;">Conteúdo da primeira seção</p>
            </div>
            <div style="padding: 16px; background: #f9fafb; border-radius: 8px;">
              <h4 style="margin-bottom: 8px; font-weight: 600;">Seção 2</h4>
              <p style="font-size: 14px; color: #6b7280;">Conteúdo da segunda seção</p>
            </div>
          </div>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Salvar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

export const FullScreen = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Full Screen Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Full Screen Modal" size="full">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Modal Tela Cheia</h3>
          <p style="margin-bottom: 16px;">Este modal ocupa quase toda a tela, ideal para experiências imersivas.</p>
          <p style="margin-bottom: 16px;">Perfeito para editores, visualizadores de mídia, ou qualquer conteúdo que necessite máximo espaço.</p>
          <div style="height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 600;">
            Área de Conteúdo Ampla
          </div>
        </div>
        <template #footer>
          <Button variant="text" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Sem botão de fechar
export const NoCloseButton = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Modal Sem Botão Fechar" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Sem Botão Fechar" :showClose="false">
        <p>Este modal não tem o botão PhX no canto superior direito.</p>
        <p>Você precisa usar os botões de ação no rodapé.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Modal persistente
export const Persistent = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Modal Persistente" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Modal Persistente" :persistent="true">
        <p>Este modal não pode ser fechado clicando fora ou pressionando ESC.</p>
        <p>Você deve usar o botão de ação para fechá-lo.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Sem fechar no backdrop
export const NoCloseOnBackdrop = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Sem Fechar no Backdrop" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Clique Fora Desabilitado" :closeOnBackdrop="false">
        <p>Este modal não fecha ao clicar no backdrop (área escura).</p>
        <p>Use o botão PhX ou os botões de ação para fechar.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="OK" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Com conteúdo longo (scroll)
export const WithScroll = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Modal com Scroll" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Modal com Conteúdo Longo" size="md">
        <div>
          <p style="margin-bottom: 16px;">Este modal tem conteúdo longo que requer scroll interno.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 1</h3>
          <p style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 2</h3>
          <p style="margin-bottom: 16px;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 3</h3>
          <p style="margin-bottom: 16px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 4</h3>
          <p style="margin-bottom: 16px;">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 5</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Formulário
export const FormModal = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Formulário Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Criar Novo Usuário" size="md">
        <form @submit.prevent="isOpen = false" style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Nome Completo</label>
            <input type="text" placeholder="Digite o nome" style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Email</label>
            <input type="email" placeholder="email@exemplo.com" style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Função</label>
            <select style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;">
              <option>Administrador</option>
              <option>Editor</option>
              <option>Visualizador</option>
            </select>
          </div>
        </form>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Criar Usuário" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Confirmação
export const ConfirmationModal = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Deletar Item" iconLeft="ph-trash" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Confirmar Exclusão" size="sm">
        <div>
          <p style="margin-bottom: 16px;">Tem certeza que deseja deletar este item?</p>
          <p style="color: #921535; font-size: 14px;">Esta ação não pode ser desfeita.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Deletar" iconLeft="ph-trash" @click="isOpen = false" style="background: #fe7e71;" />
        </template>
      </Modal>
    </div>
  `,
});

// Header customizado
export const CustomHeader = () => ({
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  template: `
    <div>
      <Button variant="solid" label="Header Customizado" @click="isOpen = true" />
      <Modal v-model="isOpen" size="md">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">
              <i class="ph ph-star"></i>
            </div>
            <div>
              <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Header Customizado</h2>
              <p style="margin: 0; font-size: 14px; color: #6b7280;">Com ícone e subtítulo</p>
            </div>
          </div>
        </template>
        <p>Este modal tem um header totalmente customizado usando slots.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Showcase de tamanhos
export const AllSizes = () => ({
  components: { Modal, Button },
  setup() {
    const modalSm = ref(false);
    const modalMd = ref(false);
    const modalLg = ref(false);
    const modalXl = ref(false);
    const modalFull = ref(false);
    return { modalSm, modalMd, modalLg, modalXl, modalFull };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Modal Sizes</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        <Button variant="outline" label="Small" size="sm" @click="modalSm = true" />
        <Button variant="outline" label="Medium" size="sm" @click="modalMd = true" />
        <Button variant="outline" label="Large" size="sm" @click="modalLg = true" />
        <Button variant="outline" label="Extra Large" size="sm" @click="modalXl = true" />
        <Button variant="outline" label="Full Screen" size="sm" @click="modalFull = true" />
      </div>

      <Modal v-model="modalSm" title="Small Modal" size="sm">
        <p>Este é um modal pequeno.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" size="sm" @click="modalSm = false" />
        </template>
      </Modal>

      <Modal v-model="modalMd" title="Medium Modal" size="md">
        <p>Este é um modal médio (padrão).</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalMd = false" />
        </template>
      </Modal>

      <Modal v-model="modalLg" title="Large Modal" size="lg">
        <p>Este é um modal grande.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalLg = false" />
        </template>
      </Modal>

      <Modal v-model="modalXl" title="Extra Large Modal" size="xl">
        <p>Este é um modal extra grande.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalXl = false" />
        </template>
      </Modal>

      <Modal v-model="modalFull" title="Full Screen Modal" size="full">
        <p>Este é um modal tela cheia.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalFull = false" />
        </template>
      </Modal>
    </div>
  `,
});

// Design Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders & Radius</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-lg</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">40px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-tight</code></td><td style="text-align: right;">1.25</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-2xl</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Z-Index</h3>
        <table style="width: 100%; font-size: 14px;">
          <tr><td style="padding: 4px 0;"><code>--z-index-modal-backdrop</code></td><td style="text-align: right;">1040</td></tr>
          <tr><td style="padding: 4px 0;"><code>--z-index-modal</code></td><td style="text-align: right;">1050</td></tr>
        </table>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade & Funcionalidades</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Focus Trap:</strong> Foco permanece dentro do modal quando aberto</li>
          <li><strong>ESC PhKey:</strong> Fecha o modal ao pressionar ESC (configurável)</li>
          <li><strong>Backdrop Click:</strong> Fecha ao clicar fora (configurável)</li>
          <li><strong>Scroll PhLock:</strong> Bloqueia scroll do body quando aberto</li>
          <li><strong>Focus Restore:</strong> Restaura foco ao elemento anterior ao fechar</li>
          <li><strong>ARIA:</strong> Usa <code>role="dialog"</code> e <code>aria-modal="true"</code></li>
          <li><strong>Teleport:</strong> Renderiza no body para evitar problemas de z-index</li>
          <li><strong>Animações:</strong> Transições suaves de entrada e saída</li>
          <li><strong>Responsivo:</strong> Adapta-se a diferentes tamanhos de tela</li>
        </ul>
      </div>
    </div>
  `,
});
