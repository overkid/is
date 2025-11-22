<template>
  <label :class="$style.field">
    <span :class="$style.label">{{ props.label }}</span>
    <slot></slot>
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
  color: var(--color-text-secondary);
}
</style>
