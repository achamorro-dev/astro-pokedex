export default function CharacterCard({pokemon}) {
  const details = pokemon.details && pokemon.details[0];
  const moves = [... new Set(details.moves.map(move => move.details.name))];

  return (
    <article class="character-card">
      <section>
        <h2 class="character-title">{pokemon.name}</h2>
        <div class="character-detail">
          <h3>height</h3>
          <span>{details.height}</span>
          <h3>weight</h3>
          <span>{details.weight}</span>
          <h3>stats</h3>
          <ul>
            {details.stats.map(stats => 
              <li>{stats.details.name} : {stats.value}</li>
            )}
          </ul>
          <h3>moves</h3>
          <ul>
            {moves.map(move => 
              <li>{move}</li>
            )}
          </ul>
        </div>
      </section>
      <div class={`character-image-container ${pokemon.color.name}-before`}>
        <img class="character-image-container__image" src={pokemon.image} alt={pokemon.name} />
      </div>
    </article>
  );
}
