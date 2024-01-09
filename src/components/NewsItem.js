import React, { Component } from "react";
import "../App.css";

export class NewsItem extends Component {
  render() {
    let { title, description, image_url, news_url } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image_url}
            className="card-img-top news_image_size"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">{title}...</h6>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={news_url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;


