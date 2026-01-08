import Card from './Card/Card.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Estilo visual do card'
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Espaçamento interno'
    },
    header: {
      control: 'text',
      description: 'Texto do cabeçalho'
    },
    hoverable: {
      control: 'boolean',
      description: 'Efeito hover'
    }
  },
};

export const Playground = () => ({
  components: { Card, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Card Title">
        <p style="margin: 0;">This is the card content. You can put any content here.</p>
      </Card>
    </div>
  `,
});

export const Default = () => ({
  components: { Card },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Default Card">
        <p style="margin: 0;">This is a default card with standard border.</p>
      </Card>
    </div>
  `,
});

export const Outlined = () => ({
  components: { Card },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="outlined" header="Outlined Card">
        <p style="margin: 0;">This card has a thicker border for emphasis.</p>
      </Card>
    </div>
  `,
});

export const Elevated = () => ({
  components: { Card },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="elevated" header="Elevated Card">
        <p style="margin: 0;">This card has a shadow for depth.</p>
      </Card>
    </div>
  `,
});

export const WithFooter = () => ({
  components: { Card, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Card with Footer">
        <p style="margin: 0;">This card has a footer with actions.</p>
        <template #footer>
          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <Button variant="text" label="Cancel" />
            <Button variant="solid" label="Save" />
          </div>
        </template>
      </Card>
    </div>
  `,
});

export const Hoverable = () => ({
  components: { Card },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="elevated" header="Hoverable Card" hoverable>
        <p style="margin: 0;">Hover over this card to see the effect!</p>
      </Card>
    </div>
  `,
});

export const NoPadding = () => ({
  components: { Card },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card padding="none">
        <img src="https://picsum.photos/400/200" alt="Sample" style="width: 100%; display: block;" />
        <div style="padding: 24px;">
          <h3 style="margin: 0 0 8px 0;">PhImage Card</h3>
          <p style="margin: 0;">This card has no padding to accommodate a full-width image.</p>
        </div>
      </Card>
    </div>
  `,
});

export const AllPaddings = () => ({
  components: { Card },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Card Padding Variants</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px;">
        <Card padding="sm" header="Small Padding">
          <p style="margin: 0;">Card with small padding</p>
        </Card>
        <Card padding="md" header="Medium Padding">
          <p style="margin: 0;">Card with medium padding</p>
        </Card>
        <Card padding="lg" header="Large Padding">
          <p style="margin: 0;">Card with large padding</p>
        </Card>
        <Card padding="none" header="No Padding">
          <div style="padding: 16px;">
            <p style="margin: 0;">Card with no padding (manual padding added to content)</p>
          </div>
        </Card>
      </div>
    </div>
  `,
});

export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">40px (lg)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Shadow</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-lg</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
