import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h4>
          <b>NewsX</b> : Top Headlines
        </h4>

        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="Cricket"
              description="Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  "
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Cricket"
              description="Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  "
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="Cricket"
              description="Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
