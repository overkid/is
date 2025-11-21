<template>
  <label :class="$style.field">
    <span v-if="label" :class="$style.label">{{ label }}</span>
    <div :class="$style.control">
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
}

const props = defineProps<IProps>();
const { label } = props;
</script>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.control {
  display: flex;
  width: 100%;
}
</style>
