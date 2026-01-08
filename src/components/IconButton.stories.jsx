import IconButton from './IconButton/IconButton.vue';
import {
  PhMagnifyingGlass,
  PhHeart,
  PhShare,
  PhDotsThree,
  PhTrash,
  PhPencilSimple,
  PhPlus,
  PhX,
  PhCheck,
  PhStar,
  PhBell,
  PhGear,
  PhDownload,
  PhUpload,
  PhArrowRight,
  PhArrowLeft
} from '@phosphor-icons/vue';

export default {
  title: 'Scuba/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Variante visual do botão'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão'
    },
    iconWeight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill'],
      description: 'Peso do ícone'
    },
    ariaLabel: {
      control: 'text',
      description: 'Label de acessibilidade (obrigatório)'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { IconButton, PhHeart },
  setup() {
    const handleClick = () => {
      console.log('Icon button clicked!');
    };
    return { args, PhHeart, handleClick };
  },
  template: '<IconButton v-bind="args" :icon="PhHeart" @click="handleClick" />',
});
Playground.args = {
  variant: 'ghost',
  size: 'md',
  disabled: false,
  iconWeight: 'regular',
  ariaLabel: 'Favoritar'
};

// Variants
export const Variants = () => ({
  components: { IconButton, PhHeart },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Variantes</h2>

      <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <div style="width: 120px;">
          <strong>Primary</strong>
        </div>
        <IconButton variant="primary" :icon="PhHeart" aria-label="Favoritar" />
      </div>

      <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <div style="width: 120px;">
          <strong>Secondary</strong>
        </div>
        <IconButton variant="secondary" :icon="PhHeart" aria-label="Favoritar" />
      </div>

      <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <div style="width: 120px;">
          <strong>Ghost</strong>
        </div>
        <IconButton variant="ghost" :icon="PhHeart" aria-label="Favoritar" />
      </div>

      <div style="display: flex; gap: 16px; align-items: center;">
        <div style="width: 120px;">
          <strong>Danger</strong>
        </div>
        <IconButton variant="danger" :icon="PhTrash" aria-label="Excluir" />
      </div>
    </div>
  `,
});

// Sizes
export const Sizes = () => ({
  components: { IconButton, PhStar },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Tamanhos</h2>

      <div style="display: flex; gap: 16px; align-items: center;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Small (32px)</div>
          <IconButton variant="ghost" size="sm" :icon="PhStar" aria-label="Favoritar" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Medium (40px)</div>
          <IconButton variant="ghost" size="md" :icon="PhStar" aria-label="Favoritar" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Large (48px)</div>
          <IconButton variant="ghost" size="lg" :icon="PhStar" aria-label="Favoritar" />
        </div>
      </div>
    </div>
  `,
});

// Icon Weights
export const IconWeights = () => ({
  components: { IconButton, PhHeart },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Peso dos Ícones</h2>

      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Thin</div>
          <IconButton variant="ghost" :icon="PhHeart" icon-weight="thin" aria-label="Favoritar" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Light</div>
          <IconButton variant="ghost" :icon="PhHeart" icon-weight="light" aria-label="Favoritar" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Regular</div>
          <IconButton variant="ghost" :icon="PhHeart" icon-weight="regular" aria-label="Favoritar" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Bold</div>
          <IconButton variant="ghost" :icon="PhHeart" icon-weight="bold" aria-label="Favoritar" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-weight: 600; font-size: 14px;">Fill</div>
          <IconButton variant="ghost" :icon="PhHeart" icon-weight="fill" aria-label="Favoritar" />
        </div>
      </div>
    </div>
  `,
});

// Disabled State
export const DisabledState = () => ({
  components: { IconButton, PhPencilSimple, PhTrash, PhShare },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado Desabilitado</h2>

      <div style="display: flex; gap: 16px; align-items: center;">
        <IconButton variant="primary" :icon="PhPencilSimple" :disabled="true" aria-label="Editar" />
        <IconButton variant="secondary" :icon="PhShare" :disabled="true" aria-label="Compartilhar" />
        <IconButton variant="ghost" :icon="PhDotsThree" :disabled="true" aria-label="Mais opções" />
        <IconButton variant="danger" :icon="PhTrash" :disabled="true" aria-label="Excluir" />
      </div>
    </div>
  `,
});

// Common Use Cases
export const CommonUseCases = () => ({
  components: {
    IconButton,
    PhMagnifyingGlass,
    PhBell,
    PhGear,
    PhDotsThree,
    PhPlus,
    PhX,
    PhCheck,
    PhArrowLeft,
    PhArrowRight,
    PhDownload,
    PhUpload,
    PhShare,
    PhTrash,
    PhPencilSimple
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Casos de Uso Comuns</h2>

      <!-- Toolbar Actions -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Toolbar / Ações</h3>
        <div style="display: flex; gap: 8px;">
          <IconButton variant="ghost" :icon="PhMagnifyingGlass" aria-label="Buscar" />
          <IconButton variant="ghost" :icon="PhBell" aria-label="Notificações" />
          <IconButton variant="ghost" :icon="PhGear" aria-label="Configurações" />
          <IconButton variant="ghost" :icon="PhDotsThree" aria-label="Mais opções" />
        </div>
      </div>

      <!-- Navigation -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Navegação</h3>
        <div style="display: flex; gap: 8px; align-items: center;">
          <IconButton variant="ghost" :icon="PhArrowLeft" aria-label="Voltar" />
          <span style="color: #6b7280;">Página 1 de 10</span>
          <IconButton variant="ghost" :icon="PhArrowRight" aria-label="Avançar" />
        </div>
      </div>

      <!-- Modal/Dialog Actions -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Modal / Dialog</h3>
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; max-width: 400px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h4 style="margin: 0; font-size: 18px;">Título do Modal</h4>
            <IconButton variant="ghost" :icon="PhX" aria-label="Fechar" />
          </div>
          <p style="color: #6b7280; margin: 0;">Conteúdo do modal aqui...</p>
        </div>
      </div>

      <!-- File Actions -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Ações de Arquivo</h3>
        <div style="display: flex; gap: 8px;">
          <IconButton variant="secondary" :icon="PhDownload" aria-label="PhDownload" />
          <IconButton variant="secondary" :icon="PhUpload" aria-label="PhUpload" />
          <IconButton variant="secondary" :icon="PhShare" aria-label="Compartilhar" />
        </div>
      </div>

      <!-- Row Actions -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Ações em Linha (Tabela)</h3>
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead style="background: #f9fafb;">
              <tr>
                <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb;">Nome</th>
                <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb;">Status</th>
                <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e5e7eb; width: 120px;">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Item 1</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Ativo</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
                  <div style="display: flex; gap: 4px; justify-content: flex-end;">
                    <IconButton variant="ghost" size="sm" :icon="PhPencilSimple" aria-label="Editar" />
                    <IconButton variant="danger" size="sm" :icon="PhTrash" aria-label="Excluir" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- FAB (Floating Action Button) -->
      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Floating Action Button</h3>
        <div style="position: relative; height: 100px; border: 1px dashed #e5e7eb; border-radius: 8px;">
          <div style="position: absolute; bottom: 16px; right: 16px;">
            <IconButton variant="primary" size="lg" :icon="PhPlus" aria-label="Adicionar" />
          </div>
        </div>
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors - Primary</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--color-primary-500</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-primary-600</code></td><td style="text-align: right;">Hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-primary-700</code></td><td style="text-align: right;">Active</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-white</code></td><td style="text-align: right;">Icon color</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors - Secondary & Ghost</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-tertiary</code></td><td style="text-align: right;">Hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Icon (hover)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Icon (default)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors - Danger</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--color-red-600</code></td><td style="text-align: right;">Icon</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-700</code></td><td style="text-align: right;">Icon (hover)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-50</code></td><td style="text-align: right;">Background (hover)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-100</code></td><td style="text-align: right;">Background (active)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing & Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Small:</strong> 32x32px</td><td style="text-align: right;">Icon: 16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Medium:</strong> 40x40px</td><td style="text-align: right;">Icon: 20px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Large:</strong> 48x48px</td><td style="text-align: right;">Icon: 24px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px (sm padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px (md padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px (lg padding)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border Radius</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border Width</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px (secondary)</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Primary:</strong> Ações principais e FABs (Floating Action Buttons)</li>
          <li><strong>Secondary:</strong> Ações secundárias com mais destaque que ghost</li>
          <li><strong>Ghost:</strong> Ações terciárias, toolbars, navegação</li>
          <li><strong>Danger:</strong> Ações destrutivas (excluir, remover)</li>
          <li>Sempre forneça <code>aria-label</code> descritivo para acessibilidade</li>
          <li>Use ícones do Phosphor Icons para consistência</li>
          <li>Tamanho <code>sm</code> para ações em tabelas e espaços compactos</li>
          <li>Tamanho <code>md</code> para uso geral em interfaces</li>
          <li>Tamanho <code>lg</code> para FABs e ações de destaque</li>
          <li>Mantenha área clicável mínima de 44x44px para acessibilidade touch</li>
        </ul>
      </div>
    </div>
  `,
});
