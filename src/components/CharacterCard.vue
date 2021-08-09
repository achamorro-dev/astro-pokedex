<template>
  <article v-if="pokemon" class="character-card">
      <section>
        <h2 class="character-title">{{pokemon.name}}</h2>
        <div class="character-detail">

          <h3>height</h3>
          <span>{{pokemon.height}}</span>

          <h3>weight</h3>
          <span>{{pokemon.weight}}</span>

          <h3>stats</h3>
          <ul>
            <li
              v-for="stat in stats"
              :key="stat"
            >
              {{ stat[0] }} : {{ stat[1] }}</li>
          </ul>

          <h3>abilities</h3>
          <ul>
            <li
              v-for="ability in abilities"
              :key="ability"
            >
              {{ ability }}
            </li>
          </ul>

        </div>
      </section>
      <div :class="`character-image-container ${pokemon.color}-before`">
        <img class="character-image-container__image" :src="pokemon.image" :alt="pokemon.name" loading="lazy" />
      </div>
    </article>

    <h2 v-else>Pokémon not found</h2>
</template>

<script>
export default {
  props: {
    pokemon: Object,
  },
  computed: {
    stats() {
      return Object.entries(this.pokemon.stats);
    },
    abilities() {
      return Object.values(this.pokemon.abilities);
    },
  },
}
</script>
