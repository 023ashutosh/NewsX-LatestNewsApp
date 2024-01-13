import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=896903060ae545d899f1f44b8f469f8a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">
          <b>NewsX</b> : Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.slice(0, 80)
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
                  publishedAt={element.publishedAt}
                  author={
                    element.author ? "| " + element.author.slice(0, 10) : " "
                  }
                  source={element.source.name.slice(0, 10) + " "}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
