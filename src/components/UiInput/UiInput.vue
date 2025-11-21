<template>
  <input
    :class="$style.input"
    :value="modelValue"
    @input="onInput"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :data-disabled="isDisabled"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  placeholder?: string;
  isDisabled?: boolean;
}

interface IEmit {
  'update:modelValue': [value: string];
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

const { modelValue, placeholder, isDisabled } = props;

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}
</script>

<style module lang="scss">
.input {
  display: flex;
  width: 100%;
  padding: 10px 12px;
  font-size: 1rem;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 12px;

  &:focus {
    border-color: var(--color-primary);
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
