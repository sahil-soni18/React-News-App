import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    console.log("News Contructor...");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsApp - ${this.props.category}`;
  }

  static defaultProps = {
    country: "in",
    category: "General",
  };

  static propsTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(80);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // Component did mount run automatically just after render runs.
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7a1861b09d03460996fc7a54c63224c8&page=1&pageSize=10`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  // previousNews = async () => {
  //   // console.log("Previous news");

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7a1861b09d03460996fc7a54c63224c8&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=10`;

  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({ page: this.state.page - 1});
  //   this.updateNews();
  // };

  // nextNews = async () => {
  //   // console.log("Next news");

  //   // if (this.state.totalResults / 10 < this.state.page + 1) {
  //   //   console.log("No news to show...");
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=7a1861b09d03460996fc7a54c63224c8&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=10`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   this.setState({ page: this.state.page + 1});
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        {/* <loadingSpinner /> */}
        <h2>NewsApp - Top {this.props.category} Headlines</h2>
        {/* {this.state.loading && <Loading />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
          style={{overflow: 'hidden'}}
        >
          <div className="container">
            <div className="row my-3">
            {this.state.articles.map((element) => {
  return (
    <div className="col-md-4" key={element.id}>
      <NewsItem
        title={element.title ? element.title : ""}
        description={element.description ? element.description : ""}
        imageUrl={element.urlToImage}
        newsUrl={element.url}
        author={element.author}
        date={element.publishedAt}
        source={element.source.name}
      />
    </div>
  );
})}

            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousNews}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.totalResults / 10 < this.state.page + 1}
            type="button"
            className="btn btn-dark"
            onClick={this.nextNews}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
  
}

export default News;

// Now we are making some changes in the newsapp according to the modern react app standards, first remove next and previous buttons because we are going to add infinte scrolling in our app, also firstly what we were doing was that do not show anything while data is loading now what we are going to do is show tha already loaded data and concatenate the newly loaded data in it. To implement infinite scrolling functionality we can write our js logic but we can also use reacr-infinte-scrolling-component.
