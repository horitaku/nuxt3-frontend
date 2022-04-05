<template>
  <div class="events">
    <h1 class="text-2xl">Event for Goods</h1>
    <EventList :events="data.events" />
  </div>
</template>


<script setup>
import {useAsyncData} from "nuxt3/app";

// const { data } = await useAsyncData('count', () => $fetch('/api/hello'))
const { data } = await useAsyncData('user', () => $fetch('/api/events'))
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>