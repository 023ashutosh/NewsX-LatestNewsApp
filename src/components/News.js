import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=global&apiKey=896903060ae545d899f1f44b8f469f8a";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>
          <b>NewsX</b> : Top Headlines
        </h2>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.slice(0, 45)
                      : "Click on Read More"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "Click on Read More"
                  }
                  image_url={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F12%2Fglobalmobility-e1703163589861.jpeg&signature=8a6266fe80c1d552ccde0aed4beafcdb"
                  }
                  news_url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
