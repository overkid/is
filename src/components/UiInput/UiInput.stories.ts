import { Meta, StoryObj } from '@storybook/vue3';

import { UiInput } from '..';
import { html } from '../../helpers';
import { ref } from 'vue';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    placeholder: 'Введите текст',
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup() {
      const value = ref('');

      return { args, value };
    },
    template: html`
      <UiInput v-bind="args" v-model="value" />
    `,
  }),
};
