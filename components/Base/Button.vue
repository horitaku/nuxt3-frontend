<template>
  <component
      :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
      :to="to"
      :href="href"
      @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "Button",
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>

</style>