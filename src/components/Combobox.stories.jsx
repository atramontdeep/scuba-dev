import { ref } from 'vue';
import Combobox from './Combobox/Combobox.vue';
import { PhUser, PhMapPin, PhBriefcase, PhGraduationCap, PhHeart } from '@phosphor-icons/vue';

export default {
  title: 'Scuba/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do combobox'
    },
    searchable: {
      control: 'boolean',
      description: 'Permite buscar opções'
    },
    multiple: {
      control: 'boolean',
      description: 'Permite seleção múltipla'
    },
    creatable: {
      control: 'boolean',
      description: 'Permite criar novas opções'
    },
    clearable: {
      control: 'boolean',
      description: 'Mostra botão de limpar'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o combobox'
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { Combobox },
  setup() {
    const selected = ref(null);
    const options = [
      { value: '1', label: 'Option 1', icon: PhUser },
      { value: '2', label: 'Option 2', icon: PhMapPin },
      { value: '3', label: 'Option 3', icon: PhBriefcase }
    ];

    return { args, selected, options, PhUser, PhMapPin, PhBriefcase };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <Combobox v-bind="args" v-model="selected" :options="options" />
      <p style="margin-top: 16px; color: #6b7280;">Selected: {{ selected }}</p>
    </div>
  `,
});
Playground.args = {
  placeholder: 'Select or search...',
  size: 'md',
  searchable: true,
  multiple: false,
  creatable: false,
  clearable: true,
  disabled: false,
  error: false
};

// Searchable
export const Searchable = () => ({
  components: { Combobox },
  setup() {
    const selected = ref(null);
    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
      { value: 'br', label: 'Brazil' },
      { value: 'ar', label: 'Argentina' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
      { value: 'de', label: 'Germany' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' }
    ];

    return { selected, countries };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Searchable Combobox</h2>
      <Combobox
        v-model="selected"
        :options="countries"
        placeholder="Search for a country..."
        searchable
      />
    </div>
  `,
});

// Multiple Selection
export const MultipleSelection = () => ({
  components: { Combobox },
  setup() {
    const selected = ref([]);
    const skills = [
      { value: 'js', label: 'JavaScript' },
      { value: 'ts', label: 'TypeScript' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'react', label: 'React' },
      { value: 'node', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java' },
      { value: 'go', label: 'Go' }
    ];

    return { selected, skills };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Multiple Selection</h2>
      <Combobox
        v-model="selected"
        :options="skills"
        placeholder="Select your skills..."
        multiple
        searchable
      />
      <p style="margin-top: 16px; color: #6b7280;">Selected: {{ selected.join(', ') || 'None' }}</p>
    </div>
  `,
});

// Creatable
export const Creatable = () => ({
  components: { Combobox },
  setup() {
    const selected = ref([]);
    const tags = ref([
      { value: 'design', label: 'Design' },
      { value: 'development', label: 'Development' },
      { value: 'marketing', label: 'Marketing' }
    ]);

    const handleCreate = (newOption) => {
      tags.value.push(newOption);
      console.log('Created:', newOption);
    };

    return { selected, tags, handleCreate };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Creatable Tags</h2>
      <Combobox
        v-model="selected"
        :options="tags"
        placeholder="Select or create tags..."
        multiple
        creatable
        searchable
        @create="handleCreate"
      />
      <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
        Type a new tag name and press Enter to create it
      </p>
    </div>
  `,
});

// With Icons
export const WithIcons = () => ({
  components: { Combobox },
  setup() {
    const selected = ref(null);
    const categories = [
      { value: 'personal', label: 'Personal', icon: PhUser },
      { value: 'work', label: 'Work', icon: PhBriefcase },
      { value: 'education', label: 'Education', icon: PhGraduationCap },
      { value: 'health', label: 'Health', icon: PhHeart }
    ];

    return { selected, categories, PhUser, PhBriefcase, PhGraduationCap, PhHeart };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">With Icons</h2>
      <Combobox
        v-model="selected"
        :options="categories"
        placeholder="Select category..."
        searchable
      />
    </div>
  `,
});

// With Descriptions
export const WithDescriptions = () => ({
  components: { Combobox },
  setup() {
    const selected = ref(null);
    const plans = [
      { value: 'free', label: 'Free', description: '$0/mo' },
      { value: 'pro', label: 'Pro', description: '$29/mo' },
      { value: 'business', label: 'Business', description: '$99/mo' },
      { value: 'enterprise', label: 'Enterprise', description: 'Custom' }
    ];

    return { selected, plans };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">With Descriptions</h2>
      <Combobox
        v-model="selected"
        :options="plans"
        placeholder="Choose a plan..."
        searchable
      />
    </div>
  `,
});

// Sizes
export const Sizes = () => ({
  components: { Combobox },
  setup() {
    const small = ref(null);
    const medium = ref(null);
    const large = ref(null);
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ];

    return { small, medium, large, options };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Tamanhos</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Small (32px)</h3>
        <Combobox v-model="small" :options="options" size="sm" placeholder="Small combobox" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Medium (40px)</h3>
        <Combobox v-model="medium" :options="options" size="md" placeholder="Medium combobox" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Large (48px)</h3>
        <Combobox v-model="large" :options="options" size="lg" placeholder="Large combobox" />
      </div>
    </div>
  `,
});

// Form Example
export const FormExample = () => ({
  components: { Combobox },
  setup() {
    const formData = ref({
      country: null,
      skills: [],
      category: null
    });

    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' }
    ];

    const skills = [
      { value: 'js', label: 'JavaScript' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'react', label: 'React' }
    ];

    const categories = [
      { value: 'dev', label: 'Development', icon: PhBriefcase },
      { value: 'design', label: 'Design', icon: PhUser }
    ];

    const handleSubmit = () => {
      console.log('Form data:', formData.value);
      alert(JSON.stringify(formData.value, null, 2));
    };

    return { formData, countries, skills, categories, handleSubmit, PhBriefcase, PhUser };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Form Example</h2>

      <form @submit.prevent="handleSubmit" style="max-width: 400px;">
        <div style="margin-bottom: 16px;">
          <Combobox
            v-model="formData.country"
            :options="countries"
            label="Country"
            placeholder="Select country"
            required
          />
        </div>

        <div style="margin-bottom: 16px;">
          <Combobox
            v-model="formData.skills"
            :options="skills"
            label="Skills"
            placeholder="Select skills"
            multiple
            searchable
          />
        </div>

        <div style="margin-bottom: 24px;">
          <Combobox
            v-model="formData.category"
            :options="categories"
            label="Category"
            placeholder="Select category"
            required
          />
        </div>

        <button
          type="submit"
          style="padding: 10px 20px; background: #0942a1; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: Poppins; font-weight: 600;"
        >
          Submit
        </button>
      </form>
    </div>
  `,
});

// Design Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Option hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-primary</code></td><td style="text-align: right;">Border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-tertiary</code></td><td style="text-align: right;">Placeholder</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-primary-100/500/600</code></td><td style="text-align: right;">Tags & Selected</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-500</code></td><td style="text-align: right;">Error</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium/semibold</code></td><td style="text-align: right;">500/600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs/xs/sm/md</code></td><td style="text-align: right;">4/8/12/16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm/md</code></td><td style="text-align: right;">4/8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Searchable:</strong> Use quando há muitas opções (>10)</li>
          <li><strong>Multiple:</strong> Use para seleção de tags, categorias, ou filtros</li>
          <li><strong>Creatable:</strong> Use quando usuários podem adicionar valores customizados</li>
          <li><strong>Icons:</strong> Use para melhor identificação visual das opções</li>
          <li><strong>Descriptions:</strong> Use para fornecer contexto adicional (ex: preços, códigos)</li>
          <li>Combine searchable + creatable para máxima flexibilidade</li>
          <li>Use tags para mostrar seleções múltiplas de forma clara</li>
          <li>Forneça feedback visual ao criar novas opções</li>
        </ul>
      </div>
    </div>
  `,
});
