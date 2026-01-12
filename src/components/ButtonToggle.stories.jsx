import { ref } from 'vue';
import ButtonToggle from './ButtonToggle/ButtonToggle.vue';
import {
  PhTextAlignLeft,
  PhTextAlignCenter,
  PhTextAlignRight
} from '@phosphor-icons/vue';

export default {
  title: 'Scuba/ButtonToggle',
  component: ButtonToggle,
  tags: ['autodocs'],
  argTypes: {
    showIcons: {
      control: 'boolean',
      description: 'Exibe ícones à esquerda do texto'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita todos os botões'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { ButtonToggle },
  setup() {
    const selected = ref('center');
    const alignOptions = [
      { value: 'left', label: 'Left', icon: PhTextAlignLeft },
      { value: 'center', label: 'Center', icon: PhTextAlignCenter },
      { value: 'right', label: 'Right', icon: PhTextAlignRight }
    ];
    return { selected, alignOptions, args, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ButtonToggle v-bind="args" v-model="selected" :options="alignOptions" />
    </div>
  `,
});
Playground.args = {
  showIcons: false,
  disabled: false
};

// Sem Ícones
export const SemIcones = () => ({
  components: { ButtonToggle },
  setup() {
    const selected = ref('center');
    const options = [
      { value: 'left', label: 'Left', icon: PhTextAlignLeft },
      { value: 'center', label: 'Center', icon: PhTextAlignCenter },
      { value: 'right', label: 'Right', icon: PhTextAlignRight }
    ];
    return { selected, options, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Sem Ícones</h2>
      <ButtonToggle v-model="selected" :options="options" />
    </div>
  `,
});

// Com Ícones
export const ComIcones = () => ({
  components: { ButtonToggle },
  setup() {
    const selected = ref('center');
    const options = [
      { value: 'left', label: 'Left', icon: PhTextAlignLeft },
      { value: 'center', label: 'Center', icon: PhTextAlignCenter },
      { value: 'right', label: 'Right', icon: PhTextAlignRight }
    ];
    return { selected, options, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Ícones</h2>
      <ButtonToggle v-model="selected" :options="options" show-icons />
    </div>
  `,
});

// Desabilitado
export const Desabilitado = () => ({
  components: { ButtonToggle },
  setup() {
    const selected = ref('center');
    const options = [
      { value: 'left', label: 'Left', icon: PhTextAlignLeft },
      { value: 'center', label: 'Center', icon: PhTextAlignCenter },
      { value: 'right', label: 'Right', icon: PhTextAlignRight }
    ];
    return { selected, options, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Desabilitado</h2>
      <ButtonToggle v-model="selected" :options="options" disabled />
    </div>
  `,
});
