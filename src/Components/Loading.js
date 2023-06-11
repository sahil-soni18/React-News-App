import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
