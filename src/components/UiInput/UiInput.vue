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
  height: 44px;
  padding: 0 12px;

  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text);
  outline: none;
  background-color: var(--color-bg);

  border: 1px solid var(--color-border);
  border-radius: 12px;

  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;

  &::placeholder {
    color: var(--color-placeholder);
  }

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(45, 109, 246, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
