import FileTag from './FileTag/FileTag.vue';

export default {
  title: 'Scuba/FileTag',
  component: FileTag,
  tags: ['autodocs'],
  argTypes: { size: { control: 'select', options: ['sm', 'md'] } },
  args: { ext: 'pdf', size: 'sm' }
};

export const Playground = (args) => ({
  components: { FileTag },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><FileTag v-bind="args" /></div>'
});

export const Formats = () => ({
  components: { FileTag },
  template: `
    <div style="padding: 40px; display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 8px;"><FileTag v-for="e in ['pdf', 'xlsx', 'csv', 'xml', 'zip', 'jpg']" :key="e" :ext="e" /></div>
      <div style="display: flex; gap: 8px;"><FileTag v-for="e in ['pdf', 'xlsx', 'zip']" :key="e" :ext="e" size="md" /></div>
    </div>
  `
});
