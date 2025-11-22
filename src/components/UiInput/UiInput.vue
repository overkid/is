<template>
  <input
    :class="$style.input"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.isDisabled"
    @input="onInput"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  placeholder: '',
});

const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emit('update:modelValue', target.value);
};
</script>

<style module lang="scss">
.input {
  width: 100%;
  height: var(--size-field-height);
  padding: var(--space-none) var(--space-s);

  cursor: text;

  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-m);

  opacity: 1;

  transition:
    border var(--transition-fast) linear,
    box-shadow var(--transition-fast) linear;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
