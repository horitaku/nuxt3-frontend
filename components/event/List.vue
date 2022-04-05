<template>
  <EventCard v-for="event in events" :key="event.id" :event="event" />
</template>

<script setup lang="ts">
type Event = {
  id: number,
  category: string,
  title: string,
  description: string,
  location: string,
  date: string,
  time: string,
  petsAllowed: boolean,
  organizer: string
}

type Props = {
  events: Event[]
}

const { events } = defineProps<Props>();

</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>