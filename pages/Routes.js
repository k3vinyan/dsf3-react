import React from "react";

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button type="button" className="btn btn-primary">Primary</button>
        </form>
      </div>
    )
  }
}
