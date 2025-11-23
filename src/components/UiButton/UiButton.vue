<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 0 32px;

  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-textw);

  cursor: pointer;

  background-color: var(--color-primary);

  border: 1px solid var(--color-primary);
  border-radius: 8px;

  box-shadow: 0 2px 8px rgba(45, 109, 246, 0.15);

  transition:
    background-color 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;

  &:hover {
    background-color: var(--color-primary-hover);
    box-shadow: 0 6px 18px rgba(45, 109, 246, 0.22);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 3px 10px rgba(45, 109, 246, 0.2);
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.6;
    transform: none;
  }

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background-color: var(--color-bg);
    border-color: var(--color-primary);
    box-shadow: none;

    &:hover {
      background-color: var(--color-border);
      box-shadow: none;
      transform: none;
    }
  }
}
</style>
