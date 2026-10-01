import UploadBox from './UploadBox/UploadBox.vue';

export default {
  title: 'Scuba/UploadBox',
  component: UploadBox,
  tags: ['autodocs'],
  argTypes: {
    files: {
      control: 'object',
      description: 'Arquivos já enviados, exibidos como UploadFile acima da dropzone'
    },
    errorMessage: {
      control: 'text',
      description: 'Mensagem de erro (exibida quando não há arquivos enviados)'
    },
    acceptLabel: {
      control: 'text',
      description: 'Texto de formatos suportados exibido na dropzone'
    },
    accept: {
      control: 'text',
      description: 'Atributo accept do input de arquivo'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
  },
};

const Template = (args) => ({
  components: { UploadBox },
  setup() {
    const handleFilesSelected = (files) => {
      console.log('Arquivos selecionados:', files);
    };
    return { args, handleFilesSelected };
  },
  template: '<div style="padding: 40px; max-width: 846px;"><UploadBox v-bind="args" @files-selected="handleFilesSelected" /></div>',
});

export const Playground = Template.bind({});
Playground.args = {
  files: [],
  errorMessage: '',
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { files: [], errorMessage: '', disabled: false };

export const Error = Template.bind({});
Error.args = { files: [], errorMessage: 'Formato inválido', disabled: false };

export const Uploaded = Template.bind({});
Uploaded.args = {
  files: [
    { id: 1, name: 'balancete-empresad.pdf', uploadedBy: 'Edna Gonçalves', uploadedAt: '27/09/2026 09:50', type: 'pdf' },
    { id: 2, name: 'balancete-empresad.pdf', uploadedBy: 'Edna Gonçalves', uploadedAt: '27/09/2026 09:50', type: 'pdf' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = { files: [], errorMessage: '', disabled: true };

export const AllStates = () => ({
  components: { UploadBox },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 32px; max-width: 846px;">
      <div>
        <h3 style="font-size: 14px; color: #555; margin-bottom: 8px;">Default</h3>
        <UploadBox />
      </div>
      <div>
        <h3 style="font-size: 14px; color: #555; margin-bottom: 8px;">Erro</h3>
        <UploadBox error-message="Formato inválido" />
      </div>
      <div>
        <h3 style="font-size: 14px; color: #555; margin-bottom: 8px;">Com arquivos enviados</h3>
        <UploadBox :files="[
          { id: 1, name: 'balancete-empresad.pdf', uploadedBy: 'Edna Gonçalves', uploadedAt: '27/09/2026 09:50', type: 'pdf' },
          { id: 2, name: 'balancete-empresad.pdf', uploadedBy: 'Edna Gonçalves', uploadedAt: '27/09/2026 09:50', type: 'pdf' },
        ]" />
      </div>
    </div>
  `,
});
