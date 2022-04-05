<template>
  <div>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup>
import {useRoute} from "nuxt3/app";

const { id } = useRoute().params
const { event } = await useAsyncData('count', () => $fetch(`/api/events?id=${id}`))

</script>

<style scoped>

</style>