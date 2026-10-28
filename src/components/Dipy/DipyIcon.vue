<template>
  <svg class="scuba-dipy-icon" :class="{ 'scuba-dipy-icon--animate': animate }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
    <rect width="96" height="96" rx="23" fill="#163A2E" />
    <g class="scuba-dipy-icon__sprout">
      <rect x="46.2" y="16" width="3.6" height="17" rx="1.8" fill="#8BE07D" />
      <path d="M48 24C46 15.5 38.5 11.5 30 13.5C32 21.5 39.5 25.5 48 24Z" fill="#6FCF6B" />
      <path d="M48 24C50 15.5 57.5 11.5 66 13.5C64 21.5 56.5 25.5 48 24Z" fill="#8BE07D" />
    </g>
    <path d="M48 31C66 31 77 46.5 77 64.5C77 76 68 84 48 84C28 84 19 76 19 64.5C19 46.5 30 31 48 31Z" fill="#F2F5EE" />
    <rect x="27" y="47" width="42" height="25" rx="12.5" fill="#14231E" />
    <g class="scuba-dipy-icon__eyes" fill="none" stroke="#8BE07D" stroke-width="3.6" stroke-linecap="round">
      <path d="M36.5 60.5Q40.5 56 44.5 60.5" />
      <path d="M51.5 60.5Q55.5 56 59.5 60.5" />
    </g>
  </svg>
</template>

<script setup>
// Ícone do Dipy, o assistente de IA da DEEP (28/10/2026, da jornada de carbono). No hover dele ou de quem o contém
// (classe scuba-dipy-host), a folha balança e os olhos piscam. animate: anima sem hover, por exemplo enquanto a IA
// trabalha. Com reduced-motion, parado. Estilo global: o hover vem de fora do componente.
defineProps({
  animate: {
    type: Boolean,
    default: false
  }
});
</script>

<style>
.scuba-dipy-icon {
  display: block;
  flex: none;
}

.scuba-dipy-icon__sprout {
  transform-origin: 48px 33px;
}

.scuba-dipy-icon__eyes {
  transform-origin: 48px 59px;
}

.scuba-dipy-host:hover .scuba-dipy-icon__sprout,
.scuba-button-toggle__button:hover .scuba-dipy-icon__sprout,
.scuba-dipy-icon:hover .scuba-dipy-icon__sprout,
.scuba-dipy-icon--animate .scuba-dipy-icon__sprout {
  animation: scuba-dipy-icon-sway 0.8s ease-in-out infinite;
}

.scuba-dipy-host:hover .scuba-dipy-icon__eyes,
.scuba-button-toggle__button:hover .scuba-dipy-icon__eyes,
.scuba-dipy-icon:hover .scuba-dipy-icon__eyes,
.scuba-dipy-icon--animate .scuba-dipy-icon__eyes {
  animation: scuba-dipy-icon-blink 1.6s ease-in-out infinite;
}

@keyframes scuba-dipy-icon-sway {
  0%,
  100% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-12deg);
  }
  70% {
    transform: rotate(12deg);
  }
}

@keyframes scuba-dipy-icon-blink {
  0%,
  40%,
  100% {
    transform: scaleY(1);
  }
  48% {
    transform: scaleY(0.1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scuba-dipy-icon * {
    animation: none !important;
  }
}
</style>
