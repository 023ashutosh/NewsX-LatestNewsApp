import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const updateNews = async () => {
      props.setProgress(0);

      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

      setLoading(true);

      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    };

    updateNews();
  }, [
    page,
    props.category,
    props.country,
    props.apiKey,
    props.pageSize,
    props.setProgress,
  ]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setTimeout(() => {
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <h1 className="text-center mt-4 pt-5">
        <b>NewsX</b> : {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <h4>
            <Spinner />
          </h4>
        }
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => (
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
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
