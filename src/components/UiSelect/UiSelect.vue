<template>
  <select
    :class="$style.select"
    :value="props.modelValue"
    @change="onChange"
    :disabled="props.isDisabled"
    :data-disabled="props.isDisabled"
  >
    <option v-for="opt in props.options" :key="opt" :value="opt">
      {{ opt }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  options: string[];
  isDisabled?: boolean;
}

const props = defineProps<IProps>();
const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLSelectElement).value);
}
</script>

<style module lang="scss">
.select {
  width: 100%;
  height: 48px;

  padding: 0 12px;
  padding-right: 36px; // место для стрелки

  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text);
  appearance: none;
  cursor: pointer;
  background-color: var(--color-bg);
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%232D6DF6' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(45, 109, 246, 0.15);
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    background-image: none;
    opacity: 0.6;
  }
}
</style>
