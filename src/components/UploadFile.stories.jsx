import UploadFile from './UploadFile/UploadFile.vue';

export default {
  title: 'Scuba/UploadFile',
  component: UploadFile,
  tags: ['autodocs'],
  argTypes: {
    fileName: {
      control: 'text',
      description: 'Nome do arquivo'
    },
    uploadedBy: {
      control: 'text',
      description: 'Autor do envio'
    },
    uploadedAt: {
      control: 'text',
      description: 'Data/hora do envio'
    },
    fileType: {
      control: 'text',
      description: 'Extensão usada no ícone (ph-file-{fileType})'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
  },
};

const Template = (args) => ({
  components: { UploadFile },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px; max-width: 846px;"><UploadFile v-bind="args" /></div>',
});

export const Playground = Template.bind({});
Playground.args = {
  fileName: 'balancete-empresad.pdf',
  uploadedBy: 'Edna Gonçalves',
  uploadedAt: '27/09/2026 09:50',
  fileType: 'pdf',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...Playground.args };

export const Disabled = Template.bind({});
Disabled.args = { ...Playground.args, disabled: true };

export const AllStates = () => ({
  components: { UploadFile },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 16px; max-width: 846px;">
      <div>
        <h3 style="font-size: 14px; color: #555; margin-bottom: 8px;">Default (hover disponível ao passar o mouse)</h3>
        <UploadFile file-name="balancete-empresad.pdf" uploaded-by="Edna Gonçalves" uploaded-at="27/09/2026 09:50" />
      </div>
      <div>
        <h3 style="font-size: 14px; color: #555; margin-bottom: 8px;">Disabled</h3>
        <UploadFile file-name="balancete-empresad.pdf" uploaded-by="Edna Gonçalves" uploaded-at="27/09/2026 09:50" disabled />
      </div>
    </div>
  `,
});
