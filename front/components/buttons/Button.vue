<template>
  <button class="flex items-center py-2 px-6 border rounded" :class="{'reverse': isReverse, 'flex-row-reverse': iconRight}" @click="$emit('click')">
    <Icon v-if="icon" :name="icon" size="30" :class="iconMargin" />
    <span>{{ label }}</span>
</button>
</template>

<script lang="ts" setup>

const props = defineProps<{
  label: string,
  icon?: string,
  isReverse?: boolean,
  iconRight?: boolean,
}>()

const iconMargin = ref(props.iconRight ? 'ml-4' : 'mr-4');
</script>

<style lang="scss" scoped>
  button {
    font-family: $font-bold;
    font-size: 1.1rem;
    background-color: $color-primary;
    border-color: $color-white;
    color: $color-white;
    transition: 0.3s;
    &:hover {
      background-color: $color-white;
      color: $color-primary;
    }
  }
  .reverse {
    background-color: $color-white;
    border-color: $color-primary;
    color: $color-primary;
    &:hover {
      background-color: $color-primary;
      color: $color-white;
    }
  }
</style>

