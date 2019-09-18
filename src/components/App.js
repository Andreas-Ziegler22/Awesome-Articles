import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header tagline="This could be Articles list." />
        <ArticleList />
      </div>
    );
  }
}

export default App;