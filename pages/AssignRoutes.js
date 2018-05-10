import React from "react";

export default class AssignRoutes extends React.Component {
  render() {
    return (
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">ID</th>
            <th scope="col">Assign Route</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>djdkdfdksa;lfjdsf</td>
            <td>
              <select className="custom-select">
                <option defaultValue>Select Route</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>djdkdfdksa;lfjdsf</td>
            <td>
              <select className="custom-select">
                <option defaultValue>Select Route</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>djdkdfdksa;lfjdsf</td>
            <td>
              <select className="custom-select">
                <option defaultValue>Select Route</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}
