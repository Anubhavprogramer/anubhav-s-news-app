import React, { Component } from "react";
import notfound from "./imagenotfound.jpg";
export default class NewsItems extends Component {
    
  render() {
    let { tittle, discreption, ImageURL,newsurl,author, publishedAt,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
        <img src={!ImageURL ? notfound : ImageURL} className="card-img-top" alt="" />
          <div className="card-body">
            <h6 className="card-title">{tittle}</h6>
            <p className="card-text">{discreption}...</p>
            <span class="text-dark" style={{font:'20px',fontWeight:'900'}}>{source.name}</span>
            <br />
            <a href={newsurl} className="btn btn-dark btn-sn">
              Read more
            </a>
            <br />
            <span>By-{!author?"Unknown":author}</span>
            <br />
            <span>On-{new Date(publishedAt).toUTCString()}</span>
          </div>
        </div>
      </div>
    );
  }
}
