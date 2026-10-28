import StepList from './StepList/StepList.vue';

export default {
  title: 'Scuba/StepList',
  component: StepList,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['icon', 'number', 'path', 'horizontal'] },
    current: { control: { type: 'number', min: -1, max: 5 } }
  }
};

const card = 'padding: 24px 40px; border-radius: 16px; background: white; box-shadow: var(--shadow-card); max-width: 560px;';

export const Icon = () => ({
  components: { StepList },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;"><div style="${card}">
      <StepList :current="2" :steps="[
        { title: 'Dados', text: '1.240 registros: notas fiscais e planilha de consumo', icon: 'ph-database' },
        { title: 'Cálculo', text: 'método por consumo, com os fatores da metodologia', icon: 'ph-calculator' },
        { title: 'Validação em andamento', text: 'a DEEP confere os dados e o cálculo', icon: 'ph-hourglass-medium' }
      ]" />
    </div></div>
  `
});

export const Numbered = () => ({
  components: { StepList },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;"><div style="${card}">
      <StepList variant="number" :steps="[
        { title: 'Confira os números', text: 'o total e as emissões mês a mês' },
        { title: 'Veja as premissas e as fontes', text: 'o que combinamos e de onde vêm os dados' },
        { title: 'Aprove ou desaprove', text: 'se algo estiver errado, diga o motivo e a DEEP reprocessa' }
      ]" />
    </div></div>
  `
});

export const Path = () => ({
  components: { StepList },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;"><div style="${card}">
      <StepList variant="path" :current="2" :steps="[
        { title: 'Recebimento de dados' }, { title: 'Cálculo' }, { title: 'Validação' }, { title: 'Revisão' }, { title: 'Concluída' }
      ]" />
    </div></div>
  `
});

export const Horizontal = () => ({
  components: { StepList },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;">
      <StepList variant="horizontal" :current="1" :steps="[
        { title: 'Onboarding', tag: 'Concluída em 10/10/2026', text: 'Contrato, apresentação e acesso à plataforma' },
        { title: 'Implantação', tag: 'Você está aqui', text: 'Você envia os dados e a DEEP calcula e valida categoria por categoria.' },
        { title: 'Entrega', text: 'A DEEP apresenta os resultados numa reunião com você.' },
        { title: 'Revisão', text: 'Você revisa o inventário e pede ajustes.' },
        { title: 'Conclusão', text: 'O inventário fica oficial e não muda mais.' }
      ]" />
    </div>
  `
});
