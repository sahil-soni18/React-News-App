import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const apikey = process.env.REACT_APP_NEWS_API;

  const updateNews = async () => {
    try {
      props.setProgress(10);
      const url = `https://api.thenewsapi.com/v1/news/top?api_token=jpSmvOrXolCWOjBVxkmlZhqyaMvjFaaUQYaAliLn&locale=us&limit=3`;
      setLoading(true);
      let data = await fetch(url);
      console.log(data); // Log the response to inspect it
      
      if (!data.ok) {
        throw new Error('Failed to fetch data');
      }
      
      props.setProgress(50);
      let parsedData = await data.json();
      console.log(parsedData); // Log the data to inspect it
  
      props.setProgress(80);
      if (Array.isArray(parsedData.data)) {
        setArticles(parsedData.data); // Now using 'data' instead of 'results'
      } else {
        console.error("No articles found in the response");
        setArticles([]); // Fallback to an empty array
      }
  
      // setTotalResults(parsedData.meta.found); // You may want to use 'meta.found' for total results
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };
  

  useEffect(() => {
    updateNews();
    document.title = `NewsApp - ${props.category}`;
  }, [page]);

  const fetchMoreData = async () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      const url = `https://api.thenewsapi.com/v1/news/top?api_token=jpSmvOrXolCWOjBVxkmlZhqyaMvjFaaUQYaAliLn&locale=us&limit=3`;

      fetch(url)
        .then((response) => response.json())
        .then((parsedData) => {
          console.log(parsedData); // Log the fetched data for inspection
          // Concatenate the new articles with the existing ones
          setArticles((prevArticles) => prevArticles.concat(parsedData.results)); // Adjust based on new field name
        })
        .catch((error) => {
          console.error("Error fetching more news data:", error);
        });

      return newPage;
    });
  };

  return (
    <div className="container my-3">
      <h2 style={{ marginTop: "90px" }}>NewsApp - Top {props.category} Headlines</h2>

      <InfiniteScroll
  dataLength={Array.isArray(articles) ? articles.length : 0} // Ensure articles is an array
  next={fetchMoreData}
  hasMore={articles.length < totalResults}
  loader={<Loading />}
  style={{ overflow: "hidden" }}
>
  <div className="container">
    <div className="row my-3">
      {Array.isArray(articles) && articles.length > 0 ? (
        articles.map((element, index) => (
          <div className="col-md-4" key={element.id || index}>
            <NewsItem
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imageUrl={element.imageUrl} // Adjust if necessary
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}
            />
          </div>
        ))
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  </div>
</InfiniteScroll>

    </div>
  );
};

News.defaultProps = {
  country: "in",
  category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
