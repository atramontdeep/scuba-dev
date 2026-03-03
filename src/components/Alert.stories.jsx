import { ref } from 'vue';
import Alert from './Alert/Alert.vue';

export default {
  title: 'Scuba/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
      description: 'Tipo de alerta'
    },
    message: {
      control: 'text',
      description: 'Texto da mensagem'
    },
    showIcon: {
      control: 'boolean',
      description: 'Exibir ícone à esquerda'
    },
    closable: {
      control: 'boolean',
      description: 'Exibir botão de fechar'
    },
    actionLabel: {
      control: 'text',
      description: 'Texto do botão de ação (vazio = sem botão)'
    },
  },
};

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><Alert v-bind="args" /></div>',
});

export const Playground = Template.bind({});
Playground.args = {
  variant: 'error',
  message: 'Error',
  showIcon: true,
  closable: true,
  actionLabel: 'Label',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  message: 'Error',
  showIcon: true,
  closable: true,
  actionLabel: 'Label',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  message: 'Warning',
  showIcon: true,
  closable: true,
  actionLabel: 'Label',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  message: 'Info',
  showIcon: true,
  closable: true,
  actionLabel: 'Label',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  message: 'Info',
  showIcon: true,
  closable: true,
  actionLabel: 'Label',
};

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  variant: 'info',
  message: 'This is an informational alert.',
  showIcon: true,
  closable: true,
  actionLabel: '',
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  variant: 'warning',
  message: 'Warning without icon.',
  showIcon: false,
  closable: true,
  actionLabel: 'Label',
};

export const Closable = () => ({
  components: { Alert },
  setup() {
    const visible = ref(true);
    const handleClose = () => {
      visible.value = false;
      setTimeout(() => { visible.value = true; }, 2000);
    };
    return { visible, handleClose };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Alert
        v-if="visible"
        variant="info"
        message="Click the X button to close this alert."
        closable
        @close="handleClose"
      />
      <p v-else style="color: #6b7280; margin-top: 16px;">Alert fechado. Reaparece em 2 segundos.</p>
    </div>
  `,
});

export const AllVariants = () => ({
  components: { Alert },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 12px; max-width: 600px;">
      <Alert variant="error"   message="Error"   show-icon closable action-label="Label" />
      <Alert variant="warning" message="Warning" show-icon closable action-label="Label" />
      <Alert variant="info"    message="Info"    show-icon closable action-label="Label" />
      <Alert variant="success" message="Info"    show-icon closable action-label="Label" />
    </div>
  `,
});
