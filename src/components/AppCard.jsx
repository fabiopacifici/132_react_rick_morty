export default function AppCard({ character }) {
  return (
    <div className="col" >
      <div className="card">
        <img src={character.image} alt="" />
        <div className="card-body">
          <h5 className="text-muted">
            {character.name}
          </h5>
          <div>
            <strong>specie</strong>: {character.species} <br />
            <strong>status</strong>: {character.status}
          </div>
        </div>
      </div>
    </div>
  )
}