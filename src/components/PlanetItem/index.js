// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-card">
      <img src={imageUrl} className="planet-img" alt={`planet ${name}`} />
      <h1 className="planet-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
