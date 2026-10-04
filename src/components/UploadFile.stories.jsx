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
    fileType: {
      control: 'select',
      options: ['', 'pdf', 'docx', 'xls', 'png', 'jpeg', 'zip'],
      description: 'Formato. Vazio: vem da extensão do nome'
    },
    caption: {
      control: 'text',
      description: 'Texto pequeno ao lado do nome, como a origem'
    },
    tag: {
      control: 'text',
      description: 'Tag com o tipo identificado do arquivo'
    },
    description: {
      control: 'text',
      description: 'Descrição ao lado da tag'
    },
    status: {
      control: 'text',
      description: 'Linha de status abaixo'
    },
    statusVariant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'neutral'],
      description: 'Cor e ícone do status'
    },
    actionIcon: {
      control: 'text',
      description: 'Ícone Phosphor do botão à direita (ex.: ph-trash). Vazio: sem botão'
    },
    actionLabel: {
      control: 'text',
      description: 'Rótulo acessível do botão à direita'
    },
    uploadedBy: {
      control: 'text',
      description: 'Autor do envio, quando não há descrição'
    },
    uploadedAt: {
      control: 'text',
      description: 'Data do envio, quando não há descrição'
    },
    flat: {
      control: 'boolean',
      description: 'Sem borda, para empilhar numa lista'
    },
    clickable: {
      control: 'boolean',
      description: 'O nome emite click'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    onAction: { action: 'action' },
    onClick: { action: 'click' }
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
  fileName: 'Balancete_jan-set_2026.xlsx',
  fileType: '',
  tag: 'Balancete',
  description: '312 contas, com saldos de janeiro a setembro de 2026',
  status: 'Cumpre: Balancete',
  statusVariant: 'success',
  actionIcon: 'ph-trash',
  actionLabel: 'Remover Balancete_jan-set_2026.xlsx',
  flat: false,
  clickable: false,
  disabled: false,
};

export const Default = Template.bind({});
Default.args = { ...Playground.args };

export const Simples = Template.bind({});
Simples.args = {
  fileName: 'balancete-empresad.pdf',
  uploadedBy: 'Edna Gonçalves',
  uploadedAt: '27/09/2026 09:50',
};

export const Disabled = Template.bind({});
Disabled.args = { ...Playground.args, disabled: true };

export const Formatos = () => ({
  components: { UploadFile },
  template: `
    <div style="padding: 40px; display: flex; flex-direction: column; gap: 12px; max-width: 846px;">
      <UploadFile file-name="Inventario GEE 2025 final.pdf" />
      <UploadFile file-name="Relatorio de sustentabilidade.docx" />
      <UploadFile file-name="Balancete_2026.xlsx" />
      <UploadFile file-name="foto_conta_de_luz.png" />
      <UploadFile file-name="foto_balancete.jpg" />
      <UploadFile file-name="Arquivos complementares.zip" />
    </div>
  `,
});

export const Lista = () => ({
  components: { UploadFile },
  template: `
    <div style="padding: 40px; max-width: 846px;">
      <div style="border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
        <UploadFile
          flat
          file-name="Balancete_jan-set_2026.xlsx"
          tag="Balancete"
          description="312 contas, com saldos de janeiro a setembro de 2026"
          status="Cumpre: Balancete"
          action-icon="ph-trash"
          action-label="Remover Balancete_jan-set_2026.xlsx"
        />
        <div style="border-top: 1px solid #e5e5e5;"></div>
        <UploadFile
          flat
          file-name="Colaboradores_2026.xlsx"
          caption="de Arquivos complementares.zip"
          tag="Tabela de colaboradores"
          description="214 linhas, com filial, modalidade de trabalho e CEP"
          status="Esta tabela tem dado pessoal. Não inclua CPF nem nome."
          status-variant="warning"
          action-icon="ph-trash"
          action-label="Remover Colaboradores_2026.xlsx"
        />
        <div style="border-top: 1px solid #e5e5e5;"></div>
        <UploadFile
          flat
          file-name="Relatorio_contabil_protegido.pdf"
          tag="Não lido"
          status="O PDF está protegido por senha. Envie uma versão sem senha."
          status-variant="error"
          action-icon="ph-trash"
          action-label="Remover Relatorio_contabil_protegido.pdf"
        />
        <div style="border-top: 1px solid #e5e5e5;"></div>
        <UploadFile
          flat
          file-name="Contrato frota.pdf"
          caption="de Arquivos complementares.zip"
          tag="Outros arquivos"
          description="Não reconhecemos o conteúdo deste arquivo."
          action-icon="ph-trash"
          action-label="Remover Contrato frota.pdf"
        />
      </div>
    </div>
  `,
});
