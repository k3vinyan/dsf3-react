import React from "react";

export default class Checkout extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">ID</th>
              <th scope="col">Route</th>
              <th scope="col">Package Count</th>
              <th scope="col">Check Out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>djdkdfdksa;lfjdsf</td>
              <td>LT1</td>
              <td>30/30</td>
              <td>Checkout</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>djdkdfdksa;lfjdsf</td>
              <td>LT1</td>
              <td>30/30</td>
              <td>Checkout</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>djdkdfdksa;lfjdsf</td>
              <td>LT1</td>
              <td>30/30</td>
              <td>Checkout</td>>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
