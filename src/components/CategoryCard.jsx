export default function CategoryCard({
  href,
  title,
  color,
  image,
  pill,
}) {
  return (
    <a
      className={`card ${color} ${pill ? 'pill' : ''}`}
      href={href}
    >
      <h2>{ title }</h2>
      {
        image && <img src={image} alt={title} loading="lazy" />
      }
    </a>
  )
}
