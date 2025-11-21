<template>
  <select
    :class="$style.select"
    :value="modelValue"
    @change="onChange"
    :disabled="isDisabled"
    :data-disabled="isDisabled"
  >
    <option v-for="opt in options" :key="opt" :value="opt">
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

interface IEmit {
  'update:modelValue': [value: string];
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

const { modelValue, options, isDisabled } = props;

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLSelectElement).value);
}
</script>

<style module lang="scss">
.select {
  display: flex;
  width: 100%;
  padding: 10px 12px;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 12px;

  &:focus {
    border-color: var(--color-primary);
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
