const React = require("react");
const Def = require("../default");

function New_Form(data) {
  let message = ''
  if (data.message) {
    message = (
      <h4 className="alert alert-danger">{data.message}</h4>
    )
  }
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        {message}
        <form action="/places" method="POST">
          <div className="row">
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" type="url" id="pic" name="pic" />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="city">Place City</label>
              <input
                className="form-control"
                type="text"
                id="city"
                name="city"
              />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="state">Place State</label>
              <input
                className="form-control"
                type="text"
                id="state"
                name="state"
              />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="cuisines">Place Cuisines</label>
              <input
                className="form-control"
                type="text"
                id="cuisines"
                name="cuisines"
                required
              />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="founded">Founded Year</label>
              <input type="number" className="form-control" id="founded" name="founded" defaultValue={new Date().getFullYear()} />
            </div>
            <div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Add New Place"
              />
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = New_Form;