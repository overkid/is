import { Meta, StoryObj } from '@storybook/vue3';

import { UiSelect } from '..';
import { html } from '../../helpers';
import { ref } from 'vue';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref(args.options[0]);

      return { args, value };
    },
    template: html`
      <UiSelect v-bind="args" v-model="value" />
    `,
  }),
};
