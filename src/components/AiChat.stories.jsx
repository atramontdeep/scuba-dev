import AiChatMessage from './AiChat/AiChatMessage.vue';
import AiChatSuggestion from './AiChat/AiChatSuggestion.vue';

export default {
  title: 'Scuba/AI/AiChat',
  component: AiChatMessage,
  subcomponents: { AiChatSuggestion },
  tags: ['autodocs']
};

export const Conversation = () => ({
  components: { AiChatMessage, AiChatSuggestion },
  template: `
    <div style="padding: 40px; max-width: 420px; display: flex; flex-direction: column; gap: 16px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-wrap: wrap; gap: 4px;">
        <AiChatSuggestion label="Que arquivos posso enviar?" />
        <AiChatSuggestion label="E se eu não tiver a nota fiscal?" />
      </div>
      <AiChatMessage role="user" text="Posso mandar a conta de luz em foto?" :files="['conta_luz_jan.jpg']" />
      <AiChatMessage text="Pode, sim. Lemos fotos e PDFs. Se a foto estiver torta ou cortada, avisamos você." />
      <AiChatMessage thinking />
    </div>
  `
});
