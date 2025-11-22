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

interface IEmit {
  'update:modelValue': (value: string) => void;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  placeholder: '',
});

const emit = defineEmits<IEmit>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style module lang="scss">
.input {
  width: 100%;
  height: var(--size-field-height);
  padding: 0 var(--space-s);
  font-size: var(--font-size-m);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-m);
  cursor: text;
  opacity: 1;
  transition: border var(--transition-fast) linear,
    box-shadow var(--transition-fast) linear;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
