import { Meta, StoryObj } from '@storybook/vue3';
import { UiField, UiInput } from '..';
import { html } from '../../helpers';
import { ref } from 'vue';

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'Поле',
  },
};

export default meta;

export const Default: StoryObj<typeof UiField> = {
  render: (args) => ({
    components: { UiField, UiInput },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: html`
      <UiField v-bind="args">
        <UiInput v-model="value" placeholder="Введите текст" />
      </UiField>
    `,
  }),
};
