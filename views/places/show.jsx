const React = require("react");
const Def = require("../default");

function Show({ place }) {
  let comments = (
    <p className="inactive">
      No comments yet!
    </p>
  )

  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )

  if (place.comments.length) {
    let sumRatings = place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = place.comments.map(c => {
      return (
        <div className="border border-2 rounded" key={c.id} style={{
          backgroundColor: '#e9f1f7',
          textAlign: 'left',
          padding: '10px 15px'
        }}>
          <h6><strong>{c.rant ? 'Rant!' : 'Rave!'}</strong></h6>
          <p>{c.content}</p>
          <h6>- {c.author}</h6>
          <h6><strong>Rating: {c.stars}</strong></h6>
          <form method='POST' action={`/places/${place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value='Delete Comment' />
          </form>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <h1>{place.name}</h1>
          <img
            src={`${place.pic}`}
            className="card-img-top"
            alt={`${place.name} Picture`}
          ></img>
          <div className="card-body">
            <h5 className="card-title">Rating</h5>
            <p>Not Rated</p>
            <h5 className="card-title">Restaurant Description</h5>
            <ul
              className="card-text"
              style={{ listStyleType: "none", marginRight: "30px" }}
            >
              <li>{place.cuisines}</li>
              <li>
                Located in {place.city}, {place.state}
              </li>
            </ul>
            <div className="edit_delete">
              <a href={`/places/${[place.id]}/edit`} className="btn btn-primary">
                Edit
              </a>
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </div>
          </div>
            <h5 className="card-title">Comments</h5>
            <p>No comments yet</p>
          
        
      </main>
    </Def>
  );
}

module.exports = Show; 