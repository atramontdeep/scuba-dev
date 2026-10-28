import AiMessage from './AiMessage/AiMessage.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/AI/AiMessage',
  component: AiMessage,
  tags: ['autodocs']
};

export const Default = () => ({
  components: { AiMessage },
  template: `
    <div style="padding: 40px; max-width: 640px;">
      <AiMessage>Marcamos as categorias que costumam valer para empresas do seu setor. Confira e ajuste.</AiMessage>
    </div>
  `
});

export const WithExtra = () => ({
  components: { AiMessage, Button },
  template: `
    <div style="padding: 40px; max-width: 640px;">
      <AiMessage>
        Envie a lista de unidades e montamos o cadastro para você.
        <template #extra><Button variant="outline" size="sm" label="Enviar arquivo" /></template>
      </AiMessage>
    </div>
  `
});
