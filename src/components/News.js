import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsX : ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=896903060ae545d899f1f44b8f469f8a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(35);
    let parsedData = await data.json();
    this.props.setProgress(85);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=896903060ae545d899f1f44b8f469f8a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    setTimeout(() => {
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }, 500);
  };

  render() {
    return (
      <>
        <h1 className="text-center my-4">
          <b>NewsX</b> : {this.capitalizeFirstLetter(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            <h4>
              <Spinner />
            </h4>
          }
        >
          <div className="container">
            <div className="row my-3">
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
                        element.author
                          ? "| " + element.author.slice(0, 10)
                          : " "
                      }
                      source={element.source.name.slice(0, 10) + " "}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
