import React from "react";
import { Button, Grid, Header, Divider, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import articles from "../ArticleList/ArticleData";
import "../Main/MainStyle.css";

// Function to sort articles by date in descending order
const sortArticlesByDate = (articles) => {
  return articles.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
};

const MainSection = () => {
  const navigate = useNavigate();

  // Sort articles by date and select the latest article
  const sortedArticles = sortArticlesByDate(articles);
  const latestArticle = sortedArticles[0];

  // Navigate to the content page for the latest article
  const handleButtonClick = () => {
    navigate(`/article/${latestArticle.id}`);
  };

  return (
    <section className="main-cont">
      <Grid>
        <Grid.Row columns={2} verticalAlign="left">
          <Grid.Column>
            <div className="main-image-container">
              <Image
                className="main-image"
                src={latestArticle.image}
                alt={latestArticle.title}
              />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="main-right-cont">
              <Header as="h1" className="main-title">
                {latestArticle.title}
              </Header>
              <Grid
                columns={2}
                className="main-author-date"
                verticalAlign="middle"
              >
                <Grid.Column>
                  <h4 className="main-author">
                    Author: {latestArticle.author}
                  </h4>
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <h4 className="main-date">Date: {latestArticle.date}</h4>
                </Grid.Column>
              </Grid>

              <Divider className="main-divider" />
              <p className="main-desc">{latestArticle.article}</p>
              <Button
                className="ui animated button main-button"
                tabIndex="0"
                onClick={handleButtonClick}
              >
                <div className="visible content">Full Article</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  );
};

export default MainSection;
