import React from "react";
import Header from "./Header";
import ArticleList from "./ArticleList";
import ToAddForm from "./ToAddForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: {},
    }
  }
  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ToAddForm />
        <ArticleList />
      </div>
    );
  }
}

export default App;