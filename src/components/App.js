import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ArticleList />
      </div>
    );
  }
}

export default App;