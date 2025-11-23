<template>
  <label :class="$style.field">
    <span :class="$style.label">{{ props.label }}</span>
    <div :class="$style.control">
      <slot></slot>
    </div>
  </label>
</template>

<script setup lang="ts">
interface IProps {
  label: string;
}

const props = defineProps<IProps>();
</script>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.label {
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--color-text);
}

.control {
  display: flex;
  align-items: center;

  height: 48px;
  padding: 0 1px;

  background-color: var(--color-bg);

  /* stylelint-disable-next-line length-zero-no-unit */
  border: 0px solid var(--color-border);
  border-radius: 12px;

  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(45, 109, 246, 0.15);
  }
}
</style>
