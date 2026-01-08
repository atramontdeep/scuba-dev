import{q as W,a as j,r as A,o as Z,N as ee,c as h,e as n,g as te,p as I,E as oe,T as ne,f as ie,h as de,t as ae,s as se,O as re}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ce={class:"scuba-accordion"},le={__name:"Accordion",props:{multiple:{type:Boolean,default:!1},defaultOpen:{type:[String,Number,Array],default:null}},setup(s){const e=s,t=W(e.multiple?Array.isArray(e.defaultOpen)?e.defaultOpen:e.defaultOpen?[e.defaultOpen]:[]:e.defaultOpen?[e.defaultOpen]:[]);return ee("accordion",{toggleItem:o=>{if(e.multiple){const c=t.value.indexOf(o);c>-1?t.value.splice(c,1):t.value.push(o)}else t.value.includes(o)?t.value=[]:t.value=[o]},isOpen:o=>t.value.includes(o)}),(o,c)=>(Z(),j("div",ce,[A(o.$slots,"default",{},void 0,!0)]))}},i=J(le,[["__scopeId","data-v-e47a5b8a"]]),pe=["aria-expanded"],me={class:"scuba-accordion-item__header-content"},ue={class:"scuba-accordion-item__actions"},ge={class:"scuba-accordion-item__content"},xe={class:"scuba-accordion-item__body"},fe={__name:"AccordionItem",props:{id:{type:[String,Number],required:!0},title:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(s){const e=s,t=ie("accordion",null),r=W(!1),d=h(()=>t?t.isOpen(e.id):!1),o=h(()=>["scuba-accordion-item",{"scuba-accordion-item--open":d.value,"scuba-accordion-item--focused":r.value&&d.value,"scuba-accordion-item--disabled":e.disabled}]),c=h(()=>["scuba-accordion-item__header",{"scuba-accordion-item__header--open":d.value,"scuba-accordion-item__header--focused":r.value&&d.value}]),K=()=>{!e.disabled&&t&&t.toggleItem(e.id)},X=()=>{r.value=!0},Y=()=>{r.value=!1};return(b,v)=>(Z(),j("div",{class:I(o.value)},[n("button",{class:I(c.value),"aria-expanded":d.value,onClick:K,onFocus:X,onBlur:Y},[n("div",me,[A(b.$slots,"header",{},()=>[de(ae(s.title),1)],!0)]),n("div",ue,[A(b.$slots,"chip",{},void 0,!0),v[0]||(v[0]=n("span",{class:"scuba-accordion-item__icon"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 256 256",fill:"currentColor"},[n("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"})])],-1))])],42,pe),te(ne,{name:"accordion-content"},{default:oe(()=>[se(n("div",ge,[n("div",xe,[A(b.$slots,"default",{},void 0,!0)])],512),[[re,d.value]])]),_:3})],2))}},a=J(fe,[["__scopeId","data-v-3448cb15"]]),be={title:"Scuba/Accordion",component:i,tags:["autodocs"],argTypes:{multiple:{control:"boolean",description:"Permite múltiplos itens abertos simultaneamente"},defaultOpen:{control:"text",description:"ID(s) do(s) item(ns) aberto(s) por padrão"}}},l=s=>({components:{Accordion:i,AccordionItem:a},setup(){return{args:s}},template:`
    <Accordion v-bind="args">
      <AccordionItem id="item-1" title="Item 1">
        Conteúdo do item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionItem>
      <AccordionItem id="item-2" title="Item 2">
        Conteúdo do item 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
      <AccordionItem id="item-3" title="Item 3">
        Conteúdo do item 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </AccordionItem>
    </Accordion>
  `});l.args={multiple:!1,defaultOpen:null};const p=()=>({components:{Accordion:i,AccordionItem:a},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Modo Simples</h2>
      <Accordion>
        <AccordionItem id="faq-1" title="O que é o Scuba Design System?">
          O Scuba Design System é uma biblioteca de componentes Vue 3 com design tokens
          sincronizados com o Figma, proporcionando consistência entre design e desenvolvimento.
        </AccordionItem>
        <AccordionItem id="faq-2" title="Como instalar o sistema?">
          Você pode instalar via npm ou yarn:
          <pre style="margin-top: 8px; padding: 12px; background: #f3f4f6; border-radius: 4px;">npm install @scuba/design-system</pre>
        </AccordionItem>
        <AccordionItem id="faq-3" title="Suporta TypeScript?">
          Sim! Todos os componentes possuem tipagens TypeScript completas para melhor
          experiência de desenvolvimento.
        </AccordionItem>
        <AccordionItem id="faq-4" title="É compatível com Vue 3?">
          Sim, o Scuba foi desenvolvido especificamente para Vue 3 utilizando a Composition API.
        </AccordionItem>
      </Accordion>
    </div>
  `}),m=()=>({components:{Accordion:i,AccordionItem:a},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Múltiplos Abertos</h2>
      <Accordion :multiple="true">
        <AccordionItem id="section-1" title="Seção 1 - Introdução">
          Esta seção contém informações introdutórias sobre o produto.
          Você pode abrir múltiplas seções simultaneamente neste modo.
        </AccordionItem>
        <AccordionItem id="section-2" title="Seção 2 - Recursos">
          <ul style="margin: 0; padding-left: 20px;">
            <li>Recurso A</li>
            <li>Recurso B</li>
            <li>Recurso C</li>
          </ul>
        </AccordionItem>
        <AccordionItem id="section-3" title="Seção 3 - Preços">
          Informações sobre planos e preços disponíveis.
        </AccordionItem>
        <AccordionItem id="section-4" title="Seção 4 - Suporte">
          Entre em contato conosco através do email: suporte@exemplo.com
        </AccordionItem>
      </Accordion>
    </div>
  `}),u=()=>({components:{Accordion:i,AccordionItem:a},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Item Aberto por Padrão</h2>
      <Accordion default-open="config-2">
        <AccordionItem id="config-1" title="Configurações Gerais">
          Defina as configurações gerais do sistema.
        </AccordionItem>
        <AccordionItem id="config-2" title="Configurações de Notificação">
          Gerencie como e quando você recebe notificações. Este item está aberto por padrão.
        </AccordionItem>
        <AccordionItem id="config-3" title="Configurações de Privacidade">
          Controle suas configurações de privacidade e segurança.
        </AccordionItem>
      </Accordion>
    </div>
  `}),g=()=>({components:{Accordion:i,AccordionItem:a},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Itens Desabilitados</h2>
      <Accordion>
        <AccordionItem id="item-1" title="Item Ativo">
          Este item pode ser expandido normalmente.
        </AccordionItem>
        <AccordionItem id="item-2" title="Item Desabilitado (em breve)" :disabled="true">
          Este conteúdo não está disponível no momento.
        </AccordionItem>
        <AccordionItem id="item-3" title="Outro Item Ativo">
          Este item também pode ser expandido.
        </AccordionItem>
        <AccordionItem id="item-4" title="Item Desabilitado (premium)" :disabled="true">
          Recurso disponível apenas para plano premium.
        </AccordionItem>
      </Accordion>
    </div>
  `}),x=()=>({components:{Accordion:i,AccordionItem:a},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Header Personalizado</h2>
      <Accordion>
        <AccordionItem id="task-1">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">✅ Tarefa Concluída</span>
              <span style="margin-left: auto; font-size: 12px; color: #10b981; background: #d1fae5; padding: 4px 8px; border-radius: 4px;">
                Completo
              </span>
            </div>
          </template>
          A tarefa foi concluída com sucesso em 15/01/2024.
        </AccordionItem>

        <AccordionItem id="task-2">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">⏳ Tarefa em Andamento</span>
              <span style="margin-left: auto; font-size: 12px; color: #3b82f6; background: #dbeafe; padding: 4px 8px; border-radius: 4px;">
                60% completo
              </span>
            </div>
          </template>
          Progresso atual: 6 de 10 subtarefas concluídas.
        </AccordionItem>

        <AccordionItem id="task-3">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">📋 Tarefa Pendente</span>
              <span style="margin-left: auto; font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">
                Não iniciada
              </span>
            </div>
          </template>
          Esta tarefa ainda não foi iniciada.
        </AccordionItem>
      </Accordion>
    </div>
  `}),f=()=>({components:{Accordion:i,AccordionItem:a},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Dentro de um Card</h2>
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; max-width: 600px;">
        <div style="padding: 20px; border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Perguntas Frequentes</h3>
          <p style="margin: 4px 0 0 0; font-size: 14px; color: #6b7280;">
            Encontre respostas para as dúvidas mais comuns
          </p>
        </div>
        <Accordion>
          <AccordionItem id="q1" title="Como criar uma conta?">
            Clique no botão "Criar Conta" no canto superior direito e preencha o formulário.
          </AccordionItem>
          <AccordionItem id="q2" title="Esqueci minha senha, o que fazer?">
            Clique em "Esqueci minha senha" na tela de login e siga as instruções enviadas por email.
          </AccordionItem>
          <AccordionItem id="q3" title="Como cancelar minha assinatura?">
            Acesse Configurações > Assinatura > Cancelar Assinatura.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  `}),y=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Title</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Content & Icon</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (header)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (content)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>FAQs:</strong> Perguntas frequentes e documentação</li>
          <li><strong>Seções Colapsáveis:</strong> Organizar conteúdo longo em seções</li>
          <li><strong>Configurações:</strong> Agrupar opções de configuração</li>
          <li><strong>Modo Simples:</strong> Use quando apenas um item deve estar aberto por vez</li>
          <li><strong>Modo Múltiplo:</strong> Use quando o usuário precisa comparar conteúdos</li>
          <li>Forneça títulos claros e descritivos</li>
          <li>Use <code>defaultOpen</code> para destacar conteúdo importante</li>
          <li>Desabilite itens temporariamente indisponíveis</li>
          <li>Customize headers para adicionar badges, ícones ou informações extras</li>
        </ul>
      </div>
    </div>
  `});var E,C,S;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    Accordion,
    AccordionItem
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Accordion v-bind="args">
      <AccordionItem id="item-1" title="Item 1">
        Conteúdo do item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionItem>
      <AccordionItem id="item-2" title="Item 2">
        Conteúdo do item 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>
      <AccordionItem id="item-3" title="Item 3">
        Conteúdo do item 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </AccordionItem>
    </Accordion>
  \`
})`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,z,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`() => ({
  components: {
    Accordion,
    AccordionItem
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Modo Simples</h2>
      <Accordion>
        <AccordionItem id="faq-1" title="O que é o Scuba Design System?">
          O Scuba Design System é uma biblioteca de componentes Vue 3 com design tokens
          sincronizados com o Figma, proporcionando consistência entre design e desenvolvimento.
        </AccordionItem>
        <AccordionItem id="faq-2" title="Como instalar o sistema?">
          Você pode instalar via npm ou yarn:
          <pre style="margin-top: 8px; padding: 12px; background: #f3f4f6; border-radius: 4px;">npm install @scuba/design-system</pre>
        </AccordionItem>
        <AccordionItem id="faq-3" title="Suporta TypeScript?">
          Sim! Todos os componentes possuem tipagens TypeScript completas para melhor
          experiência de desenvolvimento.
        </AccordionItem>
        <AccordionItem id="faq-4" title="É compatível com Vue 3?">
          Sim, o Scuba foi desenvolvido especificamente para Vue 3 utilizando a Composition API.
        </AccordionItem>
      </Accordion>
    </div>
  \`
})`,...(_=(z=p.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var q,D,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`() => ({
  components: {
    Accordion,
    AccordionItem
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Múltiplos Abertos</h2>
      <Accordion :multiple="true">
        <AccordionItem id="section-1" title="Seção 1 - Introdução">
          Esta seção contém informações introdutórias sobre o produto.
          Você pode abrir múltiplas seções simultaneamente neste modo.
        </AccordionItem>
        <AccordionItem id="section-2" title="Seção 2 - Recursos">
          <ul style="margin: 0; padding-left: 20px;">
            <li>Recurso A</li>
            <li>Recurso B</li>
            <li>Recurso C</li>
          </ul>
        </AccordionItem>
        <AccordionItem id="section-3" title="Seção 3 - Preços">
          Informações sobre planos e preços disponíveis.
        </AccordionItem>
        <AccordionItem id="section-4" title="Seção 4 - Suporte">
          Entre em contato conosco através do email: suporte@exemplo.com
        </AccordionItem>
      </Accordion>
    </div>
  \`
})`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var P,k,O;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => ({
  components: {
    Accordion,
    AccordionItem
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Item Aberto por Padrão</h2>
      <Accordion default-open="config-2">
        <AccordionItem id="config-1" title="Configurações Gerais">
          Defina as configurações gerais do sistema.
        </AccordionItem>
        <AccordionItem id="config-2" title="Configurações de Notificação">
          Gerencie como e quando você recebe notificações. Este item está aberto por padrão.
        </AccordionItem>
        <AccordionItem id="config-3" title="Configurações de Privacidade">
          Controle suas configurações de privacidade e segurança.
        </AccordionItem>
      </Accordion>
    </div>
  \`
})`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var T,B,M;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`() => ({
  components: {
    Accordion,
    AccordionItem
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Itens Desabilitados</h2>
      <Accordion>
        <AccordionItem id="item-1" title="Item Ativo">
          Este item pode ser expandido normalmente.
        </AccordionItem>
        <AccordionItem id="item-2" title="Item Desabilitado (em breve)" :disabled="true">
          Este conteúdo não está disponível no momento.
        </AccordionItem>
        <AccordionItem id="item-3" title="Outro Item Ativo">
          Este item também pode ser expandido.
        </AccordionItem>
        <AccordionItem id="item-4" title="Item Desabilitado (premium)" :disabled="true">
          Recurso disponível apenas para plano premium.
        </AccordionItem>
      </Accordion>
    </div>
  \`
})`,...(M=(B=g.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var V,R,U;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`() => ({
  components: {
    Accordion,
    AccordionItem
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Com Header Personalizado</h2>
      <Accordion>
        <AccordionItem id="task-1">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">✅ Tarefa Concluída</span>
              <span style="margin-left: auto; font-size: 12px; color: #10b981; background: #d1fae5; padding: 4px 8px; border-radius: 4px;">
                Completo
              </span>
            </div>
          </template>
          A tarefa foi concluída com sucesso em 15/01/2024.
        </AccordionItem>

        <AccordionItem id="task-2">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">⏳ Tarefa em Andamento</span>
              <span style="margin-left: auto; font-size: 12px; color: #3b82f6; background: #dbeafe; padding: 4px 8px; border-radius: 4px;">
                60% completo
              </span>
            </div>
          </template>
          Progresso atual: 6 de 10 subtarefas concluídas.
        </AccordionItem>

        <AccordionItem id="task-3">
          <template #header>
            <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
              <span style="font-weight: 600;">📋 Tarefa Pendente</span>
              <span style="margin-left: auto; font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">
                Não iniciada
              </span>
            </div>
          </template>
          Esta tarefa ainda não foi iniciada.
        </AccordionItem>
      </Accordion>
    </div>
  \`
})`,...(U=(R=x.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var N,H,$;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => ({
  components: {
    Accordion,
    AccordionItem
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Accordion - Dentro de um Card</h2>
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; max-width: 600px;">
        <div style="padding: 20px; border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Perguntas Frequentes</h3>
          <p style="margin: 4px 0 0 0; font-size: 14px; color: #6b7280;">
            Encontre respostas para as dúvidas mais comuns
          </p>
        </div>
        <Accordion>
          <AccordionItem id="q1" title="Como criar uma conta?">
            Clique no botão "Criar Conta" no canto superior direito e preencha o formulário.
          </AccordionItem>
          <AccordionItem id="q2" title="Esqueci minha senha, o que fazer?">
            Clique em "Esqueci minha senha" na tela de login e siga as instruções enviadas por email.
          </AccordionItem>
          <AccordionItem id="q3" title="Como cancelar minha assinatura?">
            Acesse Configurações > Assinatura > Cancelar Assinatura.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  \`
})`,...($=(H=f.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var G,L,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Title</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Content & Icon</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (header)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (content)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>FAQs:</strong> Perguntas frequentes e documentação</li>
          <li><strong>Seções Colapsáveis:</strong> Organizar conteúdo longo em seções</li>
          <li><strong>Configurações:</strong> Agrupar opções de configuração</li>
          <li><strong>Modo Simples:</strong> Use quando apenas um item deve estar aberto por vez</li>
          <li><strong>Modo Múltiplo:</strong> Use quando o usuário precisa comparar conteúdos</li>
          <li>Forneça títulos claros e descritivos</li>
          <li>Use <code>defaultOpen</code> para destacar conteúdo importante</li>
          <li>Desabilite itens temporariamente indisponíveis</li>
          <li>Customize headers para adicionar badges, ícones ou informações extras</li>
        </ul>
      </div>
    </div>
  \`
})`,...(Q=(L=y.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const he=["Playground","Default","Multiple","DefaultOpen","WithDisabledItems","CustomHeader","InCard","DesignTokens"];export{x as CustomHeader,p as Default,u as DefaultOpen,y as DesignTokens,f as InCard,m as Multiple,l as Playground,g as WithDisabledItems,he as __namedExportsOrder,be as default};
