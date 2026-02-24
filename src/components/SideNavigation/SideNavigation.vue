<template>
  <nav
    :class="navigationClasses"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Navigation Items -->
    <div class="scuba-sidenav__content">
      <!-- Home -->
      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'home' }]"
        @click.prevent="handleItemClick('home')"
      >
        <i class="ph ph-house"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Início</span>
        </transition>
      </a>

      <!-- Section divider for collapsed state -->
      <div v-if="!isExpanded" class="scuba-sidenav__section-divider"></div>
      <!-- Spacing for expanded state -->
      <div v-if="isExpanded" class="scuba-sidenav__section-spacing"></div>

      <!-- Carbono Section -->
      <transition name="fade">
        <div v-if="isExpanded" class="scuba-sidenav__section-title">CARBONO</div>
      </transition>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'emissions' }]"
        @click.prevent="handleItemClick('emissions')"
      >
        <i class="ph ph-globe-hemisphere-west"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Emissões (GHG)</span>
        </transition>
      </a>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'audit' }]"
        @click.prevent="handleItemClick('audit')"
      >
        <i class="ph ph-shield-check"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Auditoria</span>
        </transition>
      </a>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'methodologies' }]"
        @click.prevent="handleItemClick('methodologies')"
      >
        <i class="ph ph-calculator"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Metodologias</span>
        </transition>
      </a>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'carbon-ia' }]"
        @click.prevent="handleItemClick('carbon-ia')"
      >
        <i class="ph ph-leaf"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Carbono IA</span>
        </transition>
      </a>

      <!-- Section divider for collapsed state -->
      <div v-if="!isExpanded" class="scuba-sidenav__section-divider"></div>
      <!-- Spacing for expanded state -->
      <div v-if="isExpanded" class="scuba-sidenav__section-spacing"></div>

      <!-- Reporte ESG Section -->
      <transition name="fade">
        <div v-if="isExpanded" class="scuba-sidenav__section-title">REPORTE ESG</div>
      </transition>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'config' }]"
        @click.prevent="handleItemClick('config')"
      >
        <i class="ph ph-gear"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Configuração</span>
        </transition>
      </a>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'data-collection' }]"
        @click.prevent="handleItemClick('data-collection')"
      >
        <i class="ph ph-file-text"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Coleta de dados</span>
        </transition>
      </a>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'my-items' }]"
        @click.prevent="handleItemClick('my-items')"
      >
        <i class="ph ph-file-arrow-up"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Meus itens</span>
        </transition>
      </a>

      <!-- Section divider for collapsed state -->
      <div v-if="!isExpanded" class="scuba-sidenav__section-divider"></div>
      <!-- Spacing for expanded state -->
      <div v-if="isExpanded" class="scuba-sidenav__section-spacing"></div>

      <!-- Gestão Section -->
      <transition name="fade">
        <div v-if="isExpanded" class="scuba-sidenav__section-title">GESTÃO</div>
      </transition>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'esg-management' }]"
        @click.prevent="handleItemClick('esg-management')"
      >
        <i class="ph ph-chart-pie-slice"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Gestão ESG</span>
        </transition>
      </a>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'files' }]"
        @click.prevent="handleItemClick('files')"
      >
        <i class="ph ph-database"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Arquivos</span>
        </transition>
      </a>

      <a
        href="#"
        :class="['scuba-sidenav__item', { 'active': activeItem === 'access' }]"
        @click.prevent="handleItemClick('access')"
      >
        <i class="ph ph-users-three"></i>
        <transition name="fade">
          <span v-if="isExpanded" class="scuba-sidenav__label">Acessos</span>
        </transition>
      </a>
    </div>

    <!-- User Footer -->
    <div class="scuba-sidenav__footer">
      <Avatar
        :initials="avatarInitials"
        size="lg"
        variant="neutral"
      />

      <transition name="fade">
        <div v-if="isExpanded" class="scuba-sidenav__user-info">
          <div class="scuba-sidenav__user-name">{{ userName }}</div>
          <div class="scuba-sidenav__user-company">{{ userCompany }}</div>
        </div>
      </transition>

      <button
        class="scuba-sidenav__menu-button"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <i class="ph ph-dots-three"></i>
      </button>

      <!-- Menu Dropdown -->
      <transition name="fade">
        <div v-if="showMenu" class="scuba-sidenav__dropdown">
          <button
            class="scuba-sidenav__dropdown-item"
            @click="handleMenuAction('change-company')"
          >
            <i class="ph ph-buildings"></i>
            <span>Trocar empresa</span>
          </button>
          <button
            class="scuba-sidenav__dropdown-item"
            @click="handleMenuAction('profile')"
          >
            <i class="ph ph-user-circle"></i>
            <span>Perfil</span>
          </button>
          <button
            class="scuba-sidenav__dropdown-item"
            @click="handleMenuAction('logout')"
          >
            <i class="ph ph-sign-out"></i>
            <span>Sair</span>
          </button>

          <div class="scuba-sidenav__dropdown-divider"></div>

          <div class="scuba-sidenav__language-selector">
            <button
              v-for="lang in languages"
              :key="lang.code"
              :class="['scuba-sidenav__language-btn', { 'active': currentLanguage === lang.code }]"
              @click="handleLanguageChange(lang.code)"
              :aria-label="lang.label"
              v-html="lang.svg"
            ></button>
            <span class="scuba-sidenav__language-label">Português</span>
          </div>
        </div>
      </transition>
    </div>

  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import Avatar from '../Avatar/Avatar.vue';

const props = defineProps({
  userName: {
    type: String,
    default: 'Name'
  },
  userCompany: {
    type: String,
    default: 'Company'
  },
  avatarInitials: {
    type: String,
    default: 'AB'
  },
  defaultActive: {
    type: String,
    default: 'data-collection'
  },
  currentLanguage: {
    type: String,
    default: 'pt'
  }
});

const emit = defineEmits(['navigate', 'menu-action', 'language-change']);

const isExpanded = ref(false);
const showMenu = ref(false);
const activeItem = ref(props.defaultActive);

const languages = [
  {
    code: 'pt',
    label: 'Português',
    svg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_469_1034)">
<rect x="2" y="2" width="28" height="28" rx="14" fill="#70CDFF"/>
<path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="#6DA544"/>
<path d="M16 7.47827L27.5652 16L16 24.5217L4.43481 16L16 7.47827Z" fill="#FFDA44"/>
<path d="M16 20.8695C18.6894 20.8695 20.8696 18.6893 20.8696 16C20.8696 13.3106 18.6894 11.1304 16 11.1304C13.3107 11.1304 11.1305 13.3106 11.1305 16C11.1305 18.6893 13.3107 20.8695 16 20.8695Z" fill="#F0F0F0"/>
<path d="M13.5652 15.6956C12.7184 15.6956 11.9012 15.8244 11.132 16.0634C11.166 18.7234 13.3319 20.8695 16 20.8695C17.6498 20.8695 19.1069 20.0483 19.9877 18.7932C18.4807 16.9066 16.1619 15.6956 13.5652 15.6956V15.6956Z" fill="#0052B4"/>
<path d="M20.7793 16.9329C20.8379 16.6308 20.8695 16.3192 20.8695 16C20.8695 13.3105 18.6894 11.1304 16 11.1304C13.9933 11.1304 12.2706 12.3445 11.5251 14.078C12.1841 13.9415 12.8664 13.8696 13.5653 13.8696C16.3935 13.8695 18.9521 15.0452 20.7793 16.9329V16.9329Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_469_1034">
<rect x="2" y="2" width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>`
  },
  {
    code: 'en',
    label: 'English',
    svg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_469_1036)">
<g clip-path="url(#clip1_469_1036)">
<path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#F0F0F0"/>
<path d="M2.89407 5.4765C1.79436 6.90729 0.965136 8.55639 0.4823 10.3479H7.76547L2.89407 5.4765Z" fill="#0052B4"/>
<path d="M27.5177 10.3479C27.0348 8.55645 26.2056 6.90735 25.1059 5.47656L20.2346 10.3479H27.5177Z" fill="#0052B4"/>
<path d="M0.4823 17.6523C0.96519 19.4437 1.79442 21.0928 2.89407 22.5236L7.76531 17.6523H0.4823Z" fill="#0052B4"/>
<path d="M22.5234 2.89413C21.0927 1.79442 19.4436 0.96519 17.6521 0.4823V7.76542L22.5234 2.89413Z" fill="#0052B4"/>
<path d="M5.47656 25.1059C6.90735 26.2056 8.55645 27.0349 10.3479 27.5177V20.2347L5.47656 25.1059Z" fill="#0052B4"/>
<path d="M10.3479 0.4823C8.5564 0.96519 6.9073 1.79442 5.47656 2.89407L10.3479 7.76536V0.4823Z" fill="#0052B4"/>
<path d="M17.6522 27.5177C19.4437 27.0349 21.0928 26.2056 22.5235 25.106L17.6522 20.2347V27.5177Z" fill="#0052B4"/>
<path d="M20.2346 17.6523L25.1059 22.5236C26.2056 21.0929 27.0348 19.4437 27.5177 17.6523H20.2346Z" fill="#0052B4"/>
<path d="M27.8815 12.1739H15.8262H15.8261V0.118508C15.2283 0.0406875 14.6189 0 14 0C13.381 0 12.7717 0.0406875 12.1739 0.118508V12.1738V12.1739H0.118508C0.0406875 12.7717 0 13.3811 0 14C0 14.619 0.0406875 15.2283 0.118508 15.8261H12.1738H12.1739V27.8815C12.7717 27.9593 13.381 28 14 28C14.6189 28 15.2283 27.9594 15.8261 27.8815V15.8262V15.8261H27.8815C27.9593 15.2283 28 14.619 28 14C28 13.3811 27.9593 12.7717 27.8815 12.1739Z" fill="#D80027"/>
<path d="M17.6522 17.6523L23.8995 23.8996C24.1868 23.6123 24.4609 23.312 24.7224 23.0008L19.3739 17.6522H17.6522V17.6523Z" fill="#D80027"/>
<path d="M10.3478 17.6522H10.3477L4.10046 23.8994C4.38768 24.1868 4.68797 24.4609 4.99925 24.7224L10.3478 19.3737V17.6522Z" fill="#D80027"/>
<path d="M10.3478 10.3479V10.3478L4.10053 4.10046C3.8132 4.38768 3.5391 4.68797 3.27759 4.99925L8.62619 10.3479H10.3478V10.3479Z" fill="#D80027"/>
<path d="M17.6522 10.3479L23.8996 4.10053C23.6123 3.8132 23.312 3.53911 23.0008 3.27765L17.6522 8.62625V10.3479Z" fill="#D80027"/>
</g>
</g>
<defs>
<clipPath id="clip0_469_1036">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_469_1036">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>`
  },
  {
    code: 'es',
    label: 'Español',
    svg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_469_1037)">
<path d="M11.5652 13.6957C10.7184 13.6957 9.90119 13.8245 9.13196 14.0635C9.16603 16.7235 11.3319 18.8696 14 18.8696C15.6498 18.8696 17.1069 18.0484 17.9877 16.7932C16.4807 14.9067 14.1619 13.6957 11.5652 13.6957Z" fill="#0052B4"/>
<path d="M18.7793 14.933C18.8379 14.6309 18.8695 14.3192 18.8695 14C18.8695 11.3106 16.6894 9.13049 14 9.13049C11.9933 9.13049 10.2706 10.3446 9.52515 12.0781C10.1841 11.9415 10.8664 11.8696 11.5653 11.8696C14.3935 11.8696 16.9521 13.0452 18.7793 14.933Z" fill="#0052B4"/>
<g clip-path="url(#clip1_469_1037)">
<path d="M0 14C0 15.7125 0.308055 17.3529 0.870789 18.8696L14 20.087L27.1292 18.8696C27.6919 17.3529 28 15.7125 28 14C28 12.2875 27.6919 10.6471 27.1292 9.13048L14 7.91309L0.870789 9.13048C0.308055 10.6471 0 12.2875 0 14H0Z" fill="#FFDA44"/>
<path d="M27.1293 9.13046C25.1512 3.7993 20.0196 0 14.0001 0C7.98055 0 2.84895 3.7993 0.87085 9.13046H27.1293Z" fill="#D80027"/>
<path d="M0.87085 18.8696C2.84895 24.2007 7.98055 28 14.0001 28C20.0196 28 25.1512 24.2007 27.1293 18.8696H0.87085Z" fill="#D80027"/>
</g>
</g>
<defs>
<clipPath id="clip0_469_1037">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_469_1037">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>`
  }
];

const navigationClasses = computed(() => ({
  'scuba-sidenav': true,
  'scuba-sidenav--expanded': isExpanded.value
}));

const handleMouseEnter = () => {
  isExpanded.value = true;
};

const handleMouseLeave = () => {
  isExpanded.value = false;
  showMenu.value = false;
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const handleItemClick = (item) => {
  activeItem.value = item;
  emit('navigate', item);
};

const handleMenuAction = (action) => {
  emit('menu-action', action);
  showMenu.value = false;
};

const handleLanguageChange = (langCode) => {
  emit('language-change', langCode);
};
</script>

<style scoped>
.scuba-sidenav {
  display: flex;
  flex-direction: column;
  width: 88px;
  height: 100%;
  background: #FFFFFF;
  color: var(--context-color-text-primary);
  font-family: var(--type-font-family-body);
  transition: width 0.15s ease;
  position: relative;
  overflow: hidden;
  padding: 24px 16px;
  border-right: 1px solid var(--context-color-border-secondary);
}

.scuba-sidenav--expanded {
  width: 280px;
  padding: 24px 16px;
  transition: width 0.3s ease;
}

/* Footer (User area) */
.scuba-sidenav__footer {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  position: relative;
  flex-shrink: 0;
}

.scuba-sidenav__user-info {
  flex: 1;
  min-width: 0;
}

.scuba-sidenav__user-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--context-color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scuba-sidenav__user-company {
  font-size: 12px;
  color: var(--context-color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scuba-sidenav__menu-button {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: var(--context-color-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  transition: background 0.2s ease;
  margin: 0 auto;
}

.scuba-sidenav--expanded .scuba-sidenav__menu-button {
  margin: 0;
}

.scuba-sidenav__menu-button:hover {
  background: var(--context-color-surface-secondary);
}

/* Dropdown Menu */
.scuba-sidenav__dropdown {
  position: absolute;
  bottom: 100%;
  left: 0;
  margin-bottom: 8px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  padding: 8px;
  min-width: 200px;
  z-index: 1000;
}

.scuba-sidenav__dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: var(--context-color-text-primary);
  font-family: var(--type-font-family-body);
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
  text-align: left;
}

.scuba-sidenav__dropdown-item:hover {
  background: var(--context-color-surface-secondary);
}

.scuba-sidenav__dropdown-item i {
  font-size: 18px;
  color: var(--context-color-text-secondary);
}

.scuba-sidenav__dropdown-divider {
  height: 1px;
  background: var(--context-color-border-secondary);
  margin: 8px 0;
}

.scuba-sidenav__language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
}

.scuba-sidenav__language-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: transparent;
  padding: 0;
  cursor: pointer;
  transition: border-color 0.2s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scuba-sidenav__language-btn.active {
  border-color: var(--context-color-border-focus);
}

.scuba-sidenav__language-btn svg {
  width: 100%;
  height: 100%;
}

.scuba-sidenav__language-label {
  font-size: 13px;
  color: var(--context-color-text-secondary);
  flex: 1;
}

/* Content */
.scuba-sidenav__content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scuba-sidenav__content::-webkit-scrollbar {
  display: none;
}

/* Section dividers for collapsed state */
.scuba-sidenav__section-divider {
  height: 1px;
  background: var(--context-color-border-secondary);
  margin: 29px 0 21px 0;
  width: 100%;
}

/* Section spacing for expanded state */
.scuba-sidenav__section-spacing {
  height: 24px;
}

.scuba-sidenav__section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--context-color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0 0 16px 16px;
  margin-top: 0;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
}

.scuba-sidenav:not(.scuba-sidenav--expanded) .scuba-sidenav__section-title {
  padding-left: 0;
  margin-left: 56px;
  display: none;
}

.scuba-sidenav__item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--context-color-text-primary);
  text-decoration: none;
  font-size: 14px;
  transition: background 0.2s ease, color 0.2s ease;
  cursor: pointer;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
}

.scuba-sidenav--expanded .scuba-sidenav__item {
  gap: 12px;
}

.scuba-sidenav:not(.scuba-sidenav--expanded) .scuba-sidenav__item {
  padding: 12px 0;
  width: 56px;
  margin: 0 auto;
  gap: 0;
}

.scuba-sidenav__item i {
  font-size: 24px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: none;
}

.scuba-sidenav:not(.scuba-sidenav--expanded) .scuba-sidenav__item i {
  margin-left: 16px;
}


.scuba-sidenav__item:hover {
  background: var(--context-color-surface-action);
}

.scuba-sidenav__item.active {
  background: var(--context-color-surface-focus);
  color: var(--context-color-text-focus);
  font-weight: 600;
}

.scuba-sidenav__label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: none;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile */
@media (max-width: 768px) {
  .scuba-sidenav {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
  }

  .scuba-sidenav--expanded {
    width: 280px;
  }
}
</style>
