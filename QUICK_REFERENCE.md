# Scuba Design System - Quick Reference Guide

## Component Import Guide

### Basic Usage Examples

#### Button
```vue
<script setup>
import Button from '@/components/Button/Button.vue';
</script>

<template>
  <Button
    variant="solid"
    size="md"
    label="Click me"
    iconLeft="ph-heart"
    iconRight="ph-arrow-right"
    @click="handleClick"
  />
</template>
```

#### Input
```vue
<script setup>
import { ref } from 'vue';
import Input from '@/components/Input/Input.vue';

const email = ref('');
</script>

<template>
  <Input
    v-model="email"
    type="email"
    label="Email Address"
    placeholder="Enter your email"
    iconLeft="ph-envelope"
    hint="We'll never share your email"
  />
</template>
```

#### Checkbox
```vue
<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';

const accepted = ref(false);
</script>

<template>
  <Checkbox
    v-model="accepted"
    label="I accept the terms and conditions"
    size="md"
  />
</template>
```

#### Radio
```vue
<script setup>
import { ref } from 'vue';
import Radio from '@/components/Radio/Radio.vue';

const selected = ref('option1');
</script>

<template>
  <div>
    <Radio v-model="selected" name="options" value="option1" label="Option 1" />
    <Radio v-model="selected" name="options" value="option2" label="Option 2" />
    <Radio v-model="selected" name="options" value="option3" label="Option 3" />
  </div>
</template>
```

#### Toggle
```vue
<script setup>
import { ref } from 'vue';
import Toggle from '@/components/Toggle/Toggle.vue';

const enabled = ref(true);
</script>

<template>
  <Toggle
    v-model="enabled"
    label="Enable notifications"
    size="md"
  />
</template>
```

#### Badge
```vue
<script setup>
import Badge from '@/components/Badge/Badge.vue';
</script>

<template>
  <Badge
    variant="success"
    label="New"
    iconLeft="ph-star"
    rounded
  />
</template>
```

#### Avatar
```vue
<script setup>
import Avatar from '@/components/Avatar/Avatar.vue';
</script>

<template>
  <Avatar
    src="https://example.com/avatar.jpg"
    alt="User Name"
    size="md"
    badge
    badgeVariant="success"
  />

  <!-- Or with initials -->
  <Avatar
    initials="AB"
    variant="primary"
    size="md"
  />
</template>
```

#### Alert
```vue
<script setup>
import { ref } from 'vue';
import Alert from '@/components/Alert/Alert.vue';

const showAlert = ref(true);
</script>

<template>
  <Alert
    v-if="showAlert"
    variant="success"
    title="Success!"
    message="Your changes have been saved."
    closable
    @close="showAlert = false"
  />
</template>
```

#### Spinner
```vue
<script setup>
import Spinner from '@/components/Spinner/Spinner.vue';
</script>

<template>
  <Spinner
    size="md"
    variant="primary"
    label="Loading..."
  />
</template>
```

#### ProgressBar
```vue
<script setup>
import { ref } from 'vue';
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue';

const progress = ref(65);
</script>

<template>
  <ProgressBar
    :value="progress"
    variant="primary"
    label="Upload Progress"
    showPercentage
    animated
  />
</template>
```

#### Card
```vue
<script setup>
import Card from '@/components/Card/Card.vue';
import Button from '@/components/Button/Button.vue';
</script>

<template>
  <Card variant="elevated" header="Card Title" padding="md">
    <p>Card content goes here.</p>

    <template #footer>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <Button variant="text" label="Cancel" />
        <Button variant="solid" label="Save" />
      </div>
    </template>
  </Card>
</template>
```

## Common Props Reference

### Button
- `variant`: 'solid', 'outline', 'text'
- `size`: 'sm', 'md', 'lg'
- `label`: string
- `disabled`: boolean
- `iconLeft`: string (Phosphor icon class)
- `iconRight`: string (Phosphor icon class)
- `fullWidth`: boolean
- `type`: 'button', 'submit', 'reset'

### Input
- `type`: 'text', 'password', 'email', 'number', 'tel', 'url', 'textarea'
- `label`: string
- `placeholder`: string
- `required`: boolean
- `optional`: boolean
- `error`: string
- `hint`: string
- `disabled`: boolean
- `iconLeft`: string
- `iconRight`: string

### Checkbox/Radio
- `size`: 'sm', 'md', 'lg'
- `label`: string
- `labelPosition`: 'left', 'right', 'none'
- `disabled`: boolean

### Toggle
- `size`: 'sm', 'md', 'lg'
- `label`: string
- `labelPosition`: 'left', 'right', 'none'
- `disabled`: boolean

### Badge
- `variant`: 'neutral', 'primary', 'success', 'warning', 'error', 'info'
- `size`: 'sm', 'md', 'lg'
- `label`: string
- `iconLeft`: string
- `iconRight`: string
- `removable`: boolean
- `rounded`: boolean

### Avatar
- `size`: 'xs', 'sm', 'md', 'lg', 'xl'
- `shape`: 'circle', 'square'
- `variant`: 'neutral', 'primary', 'success', 'warning', 'error', 'info'
- `src`: string (image URL)
- `alt`: string
- `initials`: string
- `icon`: string
- `badge`: boolean
- `badgeVariant`: 'success', 'warning', 'error', 'neutral'

### Alert
- `variant`: 'success', 'warning', 'error', 'info'
- `title`: string
- `message`: string
- `icon`: string (custom icon)
- `showIcon`: boolean
- `closable`: boolean

### Spinner
- `size`: 'xs', 'sm', 'md', 'lg', 'xl'
- `variant`: 'primary', 'neutral', 'success', 'warning', 'error', 'info'
- `label`: string

### ProgressBar
- `value`: number (0-100)
- `variant`: 'primary', 'success', 'warning', 'error', 'info'
- `size`: 'sm', 'md', 'lg'
- `label`: string
- `showPercentage`: boolean
- `animated`: boolean

### Card
- `variant`: 'default', 'outlined', 'elevated'
- `padding`: 'none', 'sm', 'md', 'lg'
- `header`: string
- `hoverable`: boolean

## Phosphor Icons Reference

Common icons used throughout the system:

### UI Icons
- `ph-user` - User/profile
- `ph-gear` - Settings
- `ph-bell` - Notifications
- `ph-magnifying-glass` - Search
- `ph-x` - Close
- `ph-check` - Checkmark
- `ph-plus` - Add
- `ph-minus` - Remove

### Status Icons
- `ph-check-circle` - Success
- `ph-x-circle` - Error
- `ph-warning` - Warning
- `ph-info` - Information

### Navigation Icons
- `ph-arrow-left` - Back
- `ph-arrow-right` - Forward
- `ph-arrow-up` - Up
- `ph-arrow-down` - Down
- `ph-caret-down` - Dropdown

### Actions
- `ph-heart` - Favorite
- `ph-star` - Star/rating
- `ph-trash` - Delete
- `ph-pencil` - Edit
- `ph-eye` - View
- `ph-eye-slash` - Hide

### Communication
- `ph-envelope` - Email
- `ph-phone` - Phone
- `ph-chat` - Messages

Browse all icons at: https://phosphoricons.com/

## Design Token Categories

### Colors
```css
/* Semantic Colors */
--semantic-color-primary-500
--semantic-color-success-normal
--semantic-color-warning-normal
--semantic-color-error-normal
--semantic-color-neutral-800

/* Context Colors */
--context-color-text-primary
--context-color-surface-primary
--context-color-border-action
--context-color-icon-primary
```

### Spacing
```css
--spacing-4xs  /* 4px */
--spacing-3xs  /* 8px */
--spacing-2xs  /* 12px */
--spacing-xs   /* 16px */
--spacing-sm   /* 20px */
--spacing-md   /* 24px */
--spacing-lg   /* 40px */
```

### Typography
```css
--type-font-size-xs    /* 12px */
--type-font-size-sm    /* 14px */
--type-font-size-base  /* 16px */
--type-font-size-lg    /* 18px */
--type-font-size-xl    /* 20px */

--type-font-weight-regular   /* 400 */
--type-font-weight-semibold  /* 600 */
--type-font-weight-bold      /* 700 */
```

### Border & Effects
```css
--border-radius-rounded-sm    /* 4px */
--border-radius-rounded       /* 8px */
--border-radius-rounded-pill  /* 64px */
--border-radius-rounded-full  /* 9999px */

--shadow-sm
--shadow-md
--shadow-lg

--transition-fast  /* 150ms */
--transition-base  /* 200ms */
--transition-slow  /* 300ms */
```

## Form Example

Complete form using multiple components:

```vue
<script setup>
import { ref } from 'vue';
import Input from '@/components/Input/Input.vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import Radio from '@/components/Radio/Radio.vue';
import Toggle from '@/components/Toggle/Toggle.vue';
import Button from '@/components/Button/Button.vue';
import Alert from '@/components/Alert/Alert.vue';

const formData = ref({
  name: '',
  email: '',
  password: '',
  plan: 'basic',
  newsletter: false,
  notifications: true
});

const showSuccess = ref(false);

const handleSubmit = () => {
  showSuccess.value = true;
  console.log('Form data:', formData.value);
};
</script>

<template>
  <form @submit.prevent="handleSubmit" style="max-width: 500px; padding: 40px;">
    <h2>Sign Up Form</h2>

    <Alert
      v-if="showSuccess"
      variant="success"
      title="Success!"
      message="Your account has been created."
      closable
      @close="showSuccess = false"
      style="margin-bottom: 24px;"
    />

    <div style="display: flex; flex-direction: column; gap: 24px;">
      <Input
        v-model="formData.name"
        label="Full Name"
        placeholder="Enter your name"
        iconLeft="ph-user"
        required
      />

      <Input
        v-model="formData.email"
        type="email"
        label="Email"
        placeholder="you@example.com"
        iconLeft="ph-envelope"
        required
      />

      <Input
        v-model="formData.password"
        type="password"
        label="Password"
        placeholder="Enter password"
        iconLeft="ph-lock"
        hint="Must be at least 8 characters"
        required
      />

      <div>
        <label style="font-weight: 600; margin-bottom: 12px; display: block;">
          Choose a plan
        </label>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <Radio v-model="formData.plan" name="plan" value="basic" label="Basic Plan" />
          <Radio v-model="formData.plan" name="plan" value="pro" label="Pro Plan" />
          <Radio v-model="formData.plan" name="plan" value="enterprise" label="Enterprise Plan" />
        </div>
      </div>

      <Checkbox
        v-model="formData.newsletter"
        label="Subscribe to newsletter"
      />

      <Toggle
        v-model="formData.notifications"
        label="Enable notifications"
      />

      <Button
        type="submit"
        variant="solid"
        size="lg"
        label="Create Account"
        iconRight="ph-arrow-right"
        fullWidth
      />
    </div>
  </form>
</template>
```

## Tips & Best Practices

1. **Always use design tokens** - Never hardcode colors, spacing, or sizes
2. **Provide aria-labels** - For accessibility, especially for icon-only buttons
3. **Use semantic HTML** - Forms should use proper form elements
4. **Handle loading states** - Use Spinner component for async operations
5. **Provide feedback** - Use Alert component for success/error messages
6. **Validate inputs** - Show error states on Input components
7. **Group related items** - Use Card component to organize content
8. **Show progress** - Use ProgressBar for multi-step processes
9. **Consistent sizing** - Use the same size across related components
10. **Test accessibility** - Use keyboard navigation and screen readers

---

For more detailed documentation, run `npm run storybook` and explore each component's stories.
