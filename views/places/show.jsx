const React = require("react");
const Def = require("../default");

function Show({ place }) {
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