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
    title: {
      control: 'text',
      description: 'Título do alerta'
    },
    message: {
      control: 'text',
      description: 'Mensagem do alerta'
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar ícone'
    },
    closable: {
      control: 'boolean',
      description: 'Permitir fechar'
    },
    icon: {
      control: 'text',
      description: 'Ícone personalizado'
    }
  },
};

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args };
  },
  template: '<Alert v-bind="args" />',
});

export const Playground = Template.bind({});
Playground.args = {
  variant: 'info',
  title: 'Information',
  message: 'This is an informational alert message.',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Success!',
  message: 'Your operation completed successfully.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Warning',
  message: 'Please review the information before proceeding.',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: 'Error',
  message: 'An error occurred while processing your request.',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  title: 'Information',
  message: 'Here is some important information for you.',
};

export const Closable = () => ({
  components: { Alert },
  setup() {
    const visible = ref(true);
    const handleClose = () => {
      visible.value = false;
      setTimeout(() => {
        visible.value = true;
      }, 2000);
    };
    return { visible, handleClose };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Alert
        v-if="visible"
        variant="info"
        title="Closable Alert"
        message="Click the PhX button to close this alert."
        closable
        @close="handleClose"
      />
      <p v-else style="color: #6b7280; margin-top: 16px;">Alert closed. It will reappear in 2 seconds.</p>
    </div>
  `,
});

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  variant: 'info',
  title: 'No Icon',
  message: 'This alert has no icon.',
  showIcon: false,
};

export const AllVariants = () => ({
  components: { Alert },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Alert Variants</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Alert
          variant="success"
          title="Success"
          message="Your operation completed successfully."
        />
        <Alert
          variant="warning"
          title="PhWarning"
          message="Please review the information before proceeding."
        />
        <Alert
          variant="error"
          title="Error"
          message="An error occurred while processing your request."
        />
        <Alert
          variant="info"
          title="Information"
          message="Here is some important information for you."
        />
      </div>
    </div>
  `,
});

export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-dark</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-info-light</code></td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
