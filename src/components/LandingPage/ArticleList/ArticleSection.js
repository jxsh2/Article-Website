import React, { useState } from "react";
import { Image, Header, Grid, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import articles from "../ArticleList/ArticleData";
import "../ArticleList/ArticleStyle.css";

const ArticleSection = () => {
  // Manage the number of articles visible
  const [visibleCount, setVisibleCount] = useState(12);
  const navigate = useNavigate();

  // Sort articles by date, most recent first
  const sortArticlesByDate = (articles) => {
    return articles.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  // Get sorted articles, excluding the first one
  const sortedArticles = sortArticlesByDate(articles).slice(1);

  // Show more articles when button is clicked
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  // Navigate to the selected article's page
  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <section className="article-cont" id="articles">
      <div className="article-title-frame">
        <div className="article-header">MORE ARTICLES</div>
        <div className="article-rec" />
      </div>
      <Grid columns={3} doubling stackable>
        {sortedArticles.slice(0, visibleCount).map((article) => (
          <Grid.Column
            key={article.id}
            className="article-column"
            onClick={() => handleArticleClick(article.id)}
          >
            <div
              className="article-card"
              title="Click to view the full article"
            >
              <div className="article-image-wrapper">
                {/* Display article image */}
                <Image
                  className="article-images"
                  src={article.image}
                  alt={article.title}
                />
              </div>
              <div className="article-content">
                {/* Display author and date */}
                <div className="article-author-date">
                  <span className="article-author">{article.author}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                {/* Display article title */}
                <Header as="h3" className="article-title">
                  {article.title}
                </Header>
                {/* Display article description */}
                <p className="article-description">{article.article}</p>
              </div>
            </div>
          </Grid.Column>
        ))}
      </Grid>

      {/* Show "Show More" button if there are more articles to display */}
      {visibleCount < sortedArticles.length && (
        <Button
          className="fluid ui right labeled icon button show-button"
          onClick={handleShowMore}
        >
          <i className="plus icon"></i>
          Show More
        </Button>
      )}
    </section>
  );
};

export default ArticleSection;
