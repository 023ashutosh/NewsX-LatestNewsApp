import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  render() {
    let {
      title,
      // description,
      image_url,
      news_url,
      publishedAt,
      author,
      source,
    } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image_url}
            className="card-img-top news_image_size"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">
              <b>{title}...</b>
            </h6>
            <p className="card-text">
              <small className="text-body-secondary text-warning">
                Published at: <b>{this.formatDate(publishedAt)}</b>. 
                Source:{" "}<b>{source}{author}</b>
              </small>
            </p>
            <Link
              rel="noreferrer"
              to={news_url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
