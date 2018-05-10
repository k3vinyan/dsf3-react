import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              {/* Route Card */}
              <div className="card text-center">
                <div className="card-body">
                  <h1 className="card-title">Routes on Site</h1>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Route</th>
                        <th scope="col">On Site</th>
                        <th scope="col">Left</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>LT</td>
                        <td>8</td>
                        <td>8/10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              {/* Route Card */}
              <div className="card text-center">
                <div className="card-body">
                  <h1 className="card-title">Driver Accepted</h1>
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Not Arrived</th>
                          <th scope="col">Waiting</th>
                          <th scope="col">Scanning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10</td>
                          <td>20</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
