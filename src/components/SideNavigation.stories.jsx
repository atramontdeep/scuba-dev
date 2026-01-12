import SideNavigation from './SideNavigation/SideNavigation.vue';

export default {
  title: 'Scuba/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: 'text',
      description: 'Nome do usuário'
    },
    userCompany: {
      control: 'text',
      description: 'Nome da empresa'
    },
    avatarInitials: {
      control: 'text',
      description: 'Iniciais do avatar'
    },
    defaultActive: {
      control: 'text',
      description: 'Item ativo por padrão'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { SideNavigation },
  setup() {
    const handleNavigate = (item) => {
      console.log('Navigate to:', item);
    };

    const handleMenuAction = (action) => {
      console.log('Menu action:', action);
    };

    const handleLanguageChange = (lang) => {
      console.log('Language changed to:', lang);
    };

    return { args, handleNavigate, handleMenuAction, handleLanguageChange };
  },
  template: `
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        v-bind="args"
        @navigate="handleNavigate"
        @menu-action="handleMenuAction"
        @language-change="handleLanguageChange"
      />
      <div style="flex: 1; padding: 40px;">
        <h1 style="font-size: 32px; font-weight: 600; color: #111827; margin-bottom: 8px;">Main Content Area</h1>
        <p style="color: #6B7280; font-size: 16px;">
          Passe o mouse sobre a sidebar à esquerda para expandir.
        </p>
        <p style="color: #6B7280; font-size: 16px; margin-top: 16px;">
          Clique nos 3 pontinhos no header expandido para abrir o menu com opções de perfil e idioma.
        </p>
      </div>
    </div>
  `,
});
Playground.args = {
  userName: 'Name',
  userCompany: 'Company',
  avatarInitials: 'AB',
  defaultActive: 'data-collection',
  currentLanguage: 'pt'
};

// Estado Colapsado
export const EstadoColapsado = () => ({
  components: { SideNavigation },
  setup() {
    const handleNavigate = (item) => {
      console.log('Navigate to:', item);
    };

    return { handleNavigate };
  },
  template: `
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        user-name="João Silva"
        user-company="Acme Corp"
        avatar-initials="JS"
        default-active="home"
        @navigate="handleNavigate"
      />
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Estado Colapsado (Default)
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          A navegação começa colapsada, mostrando apenas os ícones.
        </p>
      </div>
    </div>
  `,
});

// Estado Expandido
export const EstadoExpandido = () => ({
  components: { SideNavigation },
  setup() {
    const handleNavigate = (item) => {
      console.log('Navigate to:', item);
    };

    return { handleNavigate };
  },
  template: `
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <div style="width: 240px;">
        <SideNavigation
          user-name="Maria Santos"
          user-company="Tech Solutions"
          avatar-initials="MS"
          default-active="emissions"
          @navigate="handleNavigate"
          style="width: 240px;"
          class="scuba-sidenav--expanded"
        />
      </div>
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Estado Expandido
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          Ao passar o mouse, a sidebar expande revelando os labels e opções adicionais.
        </p>
      </div>
    </div>
  `,
});

// Com Item Ativo
export const ComItemAtivo = () => ({
  components: { SideNavigation },
  setup() {
    const handleNavigate = (item) => {
      console.log('Navigate to:', item);
    };

    return { handleNavigate };
  },
  template: `
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        user-name="Carlos Pereira"
        user-company="Green Energy"
        avatar-initials="CP"
        default-active="data-collection"
        @navigate="handleNavigate"
      />
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Item Ativo (Coleta de dados)
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          O item "Coleta de dados" está marcado como ativo com fundo azul.
        </p>
      </div>
    </div>
  `,
});
