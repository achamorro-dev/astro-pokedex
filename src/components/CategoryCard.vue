<template>
  <a class="card" :class="`${color} ${pill ? 'pill' : ''}`" :href="href">
    <h2>{{ title }}</h2>
    <img v-if="image" :src="image" :alt="title" />
  </a>
</template>

<script>
export default {
  props: {
    href: String,
    title: String,
    color: String,
    image: String,
    pill: Boolean,
  },
}
</script>

<style scoped>
  .card {
    border-radius: 1rem;
    color: #fff;
    display:block;
    padding: 0.5rem 1.5rem;
    text-align: center;
  }
  .card.white {
    color: #222;
  }
</style>
