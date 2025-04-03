import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../ContentPage/ContentPage.css";
import { Image, Grid, Header, Divider, Button } from "semantic-ui-react";
import articles from "../LandingPage/ArticleList/ArticleData";

const ContentPage = () => {
  // Get the 'id' from the URL
  const { id } = useParams();

  // Hook to navigate between pages
  const navigate = useNavigate();

  // Find the article by 'id'
  const articleIndex = articles.findIndex((article) => article.id === id);
  const article = articles[articleIndex];

  // If no article found, show a message
  if (!article) {
    return <div className="no-article">Article Not Found</div>;
  }

  // Go back to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="content-page">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            {/* Display article image */}
            <Image
              className="content-images"
              src={article.image}
              alt={article.title}
              fluid
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="content-author-date">
          <Grid.Column width={8}>
            {/* Display author */}
            <h4 className="content-h4">{article.author}</h4>
          </Grid.Column>
          <Grid.Column width={8} textAlign="right">
            {/* Display date */}
            <h4 className="content-h4">{article.date}</h4>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            {/* Display title */}
            <Header as="h1" className="content-title">
              {article.title}
            </Header>
          </Grid.Column>
        </Grid.Row>

        {/* Divider line */}
        <Divider className="content-divider" />

        <Grid.Row>
          <Grid.Column>
            {/* Display article content */}
            <p className="content-article">{article.article}</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            {/* Back button */}
            <Button
              onClick={handleBack}
              className="ui left floated button back-button"
            >
              Back
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ContentPage;
