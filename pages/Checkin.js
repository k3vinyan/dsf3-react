import React from "react";

export default class Checkin extends React.Component {
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
              <th scope="col">Check In</th>
              <th scope="col">No Show</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>djdkdfdksa;lfjdsf</td>
              <td>Check In</td>
              <td>No Show</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>djdkdfdksa;lfjdsf</td>
              <td>Check In</td>
              <td>No Show</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>djdkdfdksa;lfjdsf</td>
              <td>Check In</td>
              <td>No Show</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
