import React from "react";
import BreakingNewsImage from "../BreakingNews.jpg"; // Ensure the correct path

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  // Ensure there is no issue with empty title/description or missing data
  const formattedTitle = title ? title.slice(0, 45) : "No Title Available";
  const formattedDescription = description ? description.slice(0, 88) : "No Description Available";
  
  // Safely handle the image URL, fallback if needed
  const imageSrc = imageUrl || BreakingNewsImage;
  
  // Safely handle the author and date
  const formattedAuthor = author || "Unknown";
  const formattedDate = date ? new Date(date).toGMTString() : "Unknown Date";

  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={imageSrc}
          className="card-img-top"
          alt="Breaking News"
        />
        <div className="card-body">
          <h5 className="card-title">{formattedTitle}...</h5>
          <p className="card-text">{formattedDescription}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {formattedAuthor} on {formattedDate}
            </small>
          </p>
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
};

export default NewsItem;
