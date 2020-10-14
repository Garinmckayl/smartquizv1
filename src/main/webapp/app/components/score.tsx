import React from 'react';

const Score = props => (
  <div className="border p-2 rounded d-flex flex-row align-items-center">
    <div className="card text-white bg-success mb-3">
      <div className="card-body">
        <h5 className="card-title">A</h5>
        <p className="card-text">98%</p>
      </div>
    </div>
    <div className="ml-2 p-3">
      <h6 className="heading1">Great Job</h6> <span>You got {props.val} out of {props.max} right.</span>
    </div>
  </div>
)

export default Score;
