import React from "react";
import BreakingNewsImage from "../BreakingNews.jpg"; // Update the path if necessary

const NewsItem = (props) => {
    // This is how we take props in class-based components;
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span>
          <img
            src={!imageUrl ? BreakingNewsImage : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 45)}...</h5>
            <p className="card-text">{description.slice(0, 88)}...</p>
            <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
