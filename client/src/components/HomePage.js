import axios from "axios";

import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      responseToPost:''
    };
  }
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("/upload", data, {
        
      })
      .then((res) => {
        this.setState({responseToPost:res.data})
        console.log(res.statusText);
        setTimeout(this.redirect, 3000);
      });
  };
  redirect = () => {
    window.location.replace("http://localhost:3000/list")
  };
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <div
          className="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-10 "
          style={{ backgroundColor: "#F2F3F4" }}
        >
          <div class="card-body">
            <h5
              class="card-title text-center"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              Upload Files
            </h5>
            <div>
              <input
                style={{ marginTop: "30px" }}
                className="offset-sm-4"
                type="file"
                name="file"
                onChange={this.onChangeHandler}
              />
              <div
                className="offset-sm-4 col-sm-3"
                style={{ marginTop: "30px" }}
              >
                <button
                  type="button"
                  class="btn btn-success btn-block"
                  onClick={this.onClickHandler}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
        <p style={{textAlign:'center',marginTop:'40px',fontWeight:"bold",fontSize:'24px'}}>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default HomePage;
